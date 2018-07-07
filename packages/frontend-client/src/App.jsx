import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'semantic-ui-react';
import TaskGroup from './components/TaskGroup';
import User from './components/User';
import Score from './components/Score';

import './App.css';
import logo from './logo.svg';

const client = new ApolloClient({
  // FIXME: Add PROD uri
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return <ApolloProvider client={client}>
        <Container className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <h2>Implementation ideas</h2>

          <ul>
            <li>Register/login user via google and/or facebook</li>
            <li>Set daily min score - default 30</li>
            <li>Set daily tasks - repeatable</li>
            <li>Edit task - name and value</li>
            <li>Mark task complete/uncomplete</li>
            <li>Get tasks for yesterday or any day</li>
            <li>Show simple graph of points completed per day</li>
          </ul>

          <h2>Component ideas</h2>

          <ul>
            <li>task</li>
            <li>date seeker (1 day back/forward)</li>
            <li>visualisation graph</li>
            <li>user - gravatar + logout</li>
            <li>score - current, edit min</li>
          </ul>

          <User email="max@wearegenki.com" />
          <Score value={0} total={30} />

          <TaskGroup />
        </Container>
      </ApolloProvider>;
  }
}

export default App;
