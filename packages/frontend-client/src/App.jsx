/*
  Implementation ideas:
    - Register/login user via google and/or facebook
    - Set daily min score - default 30
    - Set daily tasks - repeatable
    - Edit task - name and value
    - Mark task complete/uncomplete
    - Get tasks for yesterday or any day
    - Show simple graph of points completed per day
*/

import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import NoZeroTaskGroup from './components/NoZeroTaskGroup';
import NoZeroUser from './components/NoZeroUser';
import NoZeroSeekDate from './components/NoZeroSeekDate';
import NoZeroScore from './components/NoZeroScore';

import './App.css';

const client = new ApolloClient({
  // FIXME: Add PROD uri
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="con">
          <header className="header">
            <h1>No Zero Days</h1>
            <div className="user-menu">
              <NoZeroUser email="max@wearegenki.com" />
            </div>
          </header>

          <NoZeroSeekDate />
          <NoZeroScore value={0} total={30} />

          <NoZeroTaskGroup />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
