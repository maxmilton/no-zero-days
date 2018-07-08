import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'semantic-ui-react';
import TaskGroup from './components/TaskGroup';
import User from './components/User';
import Seeker from './components/Seeker';
import Score from './components/Score';

import './App.css';

const client = new ApolloClient({
  // FIXME: Add PROD uri
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return <ApolloProvider client={client}>
        <Container className="App">
          <header className="header">
            <h1>No Zero Days Tracker</h1>
          {/* TODO: Get email from user auth mechanism */}
            <div className="user-menu">
              <User email="max@wearegenki.com" />
            </div>
          </header>
          {/*
          <p>Implementation ideas:</p>

          <ul>
            <li>Register/login user via google and/or facebook</li>
            <li>Set daily min score - default 30</li>
            <li>Set daily tasks - repeatable</li>
            <li>Edit task - name and value</li>
            <li>Mark task complete/uncomplete</li>
            <li>Get tasks for yesterday or any day</li>
            <li>Show simple graph of points completed per day</li>
          </ul>

          <p>Component ideas:</p>

          <ul>
            <li>task</li>
            <li>date seeker (1 day back/forward)</li>
            <li>visualisation graph</li>
            <li>user - gravatar + logout</li>
            <li>score - current, edit min</li>
          </ul>
          */}

          <Seeker />
          <Score value={0} total={30} />

          <TaskGroup />
        </Container>
      </ApolloProvider>;
  }
}

export default App;
