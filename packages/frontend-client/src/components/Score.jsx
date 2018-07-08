import React, { Component } from 'react';
import { Button, Progress } from 'semantic-ui-react';

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="test">
          {this.props.value} / {this.props.total}
        </div>

        <Button
          className="button-edit"
          basic
          color="blue"
          content="Edit"
          icon="edit"
        />

        <Progress
          value={this.props.value}
          total={this.props.total}
          progress="percent"
          autoSuccess
        />
      </div>
    );
  }
}
