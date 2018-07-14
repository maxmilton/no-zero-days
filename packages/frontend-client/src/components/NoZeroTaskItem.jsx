import React from 'react';
import { Button, Card, Checkbox, Icon, Input, TextArea } from 'semantic-ui-react';
import NoZeroInput from './NoZeroInput.jsx';
import './NoZeroTaskItem.css';

const NoZeroTask = props => (
  <Card className="Task" fluid color="blue">
    <Card.Content>
      <Checkbox checked={props.checked} />
      <Input
        className="task-input"
        // transparent
        size="massive"
        value={props.title}
        onChange={props.handleChange}
      />
      <TextArea
        className="task-input"
        value={props.title}
        onChange={props.handleChange}
      />
      <NoZeroInput value={props.title} onChange={props.handleChange} />
    </Card.Content>

    <Card.Content extra>
      <Icon name="gem outline" />
      {props.value} points

      <Button
        className="button-edit"
        basic
        color="blue"
        content="Edit"
        icon="edit"
      />

      <Button
        basic
        color="red"
        icon="trash alternate outline"
      />
    </Card.Content>
  </Card>
);

export default NoZeroTask;
