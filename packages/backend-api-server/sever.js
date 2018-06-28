// This is an example MongoDB pad

import { graphql, buildSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient, ObjectID } from 'mongodb';

function fromMongo(item) {
  return {
    ...item,
    id: item._id.toString(),
  };
}

function toMongo(item) {
  return {
    ...item,
    _id: ObjectID(item.id),
  };
}

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Post {
	  id: ID!
    title: String
    text: String
  }

  input PostInput {
    title: String!
    text: String
  }

  input PostInputWithId {
    id: ID!
    title: String!
    text: String
  }

  type Query {
    posts: [Post]
    postById(id: ID!): Post
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(input: PostInputWithId!): Post
    deletePost(id: ID!): Post
  }
`;

// The root provides a resolver function for each API endpoint
const resolvers = {
  Query: {
    posts: async (parent, args, context) => {
      return context.mongo.collection('Posts').find({}).map(fromMongo).toArray();
    },

    postById: async (parent, { id }, context) => {
      const result = await context.mongo
        .collection('Posts')
        .findOne({ _id: new ObjectID(id) });
      return fromMongo(result);
    },
  },

  Mutation: {
    createPost: async ({ input: { title, text } }, context) => {
      const id = new ObjectID();
      const result = await context.mongo.collection('Posts').findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: {
            title,
            text,
          },
        },
        {
          upsert: true,
          returnOriginal: false,
        },
      );
      return fromMongo(result.value);
    },

    updatePost: async ({ input: { id, title, text } }, context) => {
      const result = await context.mongo.collection('Posts').findOneAndUpdate(
        {
          _id: new ObjectID(id),
        },
        {
          $set: {
            title,
            text,
          },
        },
        {
          returnOriginal: false,
        },
      );
      return fromMongo(result.value);
    },

    deletePost: async ({ id }, context) => {
      const result = await context.mongo.collection('Posts').findOneAndDelete({
        _id: new ObjectID(id),
      });
      return fromMongo(result.value);
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

let mongo;

export async function context(headers, secrets) {
  if (!mongo) {
    mongo = await MongoClient.connect(secrets.MONGODB_URL)
  }
  return {
    mongo,
  };
}
