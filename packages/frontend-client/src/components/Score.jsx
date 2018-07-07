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
        {this.props.value} / {this.props.total}

        <Progress percent={this.state.percent} autoSuccess />
        <Progress value={this.props.value} total={this.props.total} progress="ratio" />
      </div>
    );
  }
}
