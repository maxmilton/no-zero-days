import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Task from './Task';

class TaskGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: Convert this into state driven by a GraphQL query
      tasks: [
        { uid: 1, id: 111, checked: false, title: 'Test 111', value: 5 },
        { uid: 1, id: 222, checked: true, title: 'Test 222', value: 5 },
        { uid: 1, id: 333, checked: false, title: 'test 333', value: 20 },
      ],
    };

    /** @type {Function} */
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Card.Group className="TaskGroup">
        {this.state.tasks.map((task) =>
          <Task key={task.id} handleChange={this.handleChange} {...task} />
        )}
      </Card.Group>
    );
  }
}

export default TaskGroup;
