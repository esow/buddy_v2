import { Form, Header, Radio, Checkbox } from 'semantic-ui-react';
import * as React from "react";
import { Component } from "react";

interface AgeGroupProps {
  handleChange: (from: String, data: String) => void;
  value: String;
}
interface State {
  value: String;
}

export default class AgeGroup extends Component<AgeGroupProps, State> {
  constructor(props: AgeGroupProps) {
    super(props);
    // Don't call this.setState() here!
    this.state = { value: this.props.value };
  }

  handleChange = (_e: any, { value }: any) => {
    this.setState({ value: value });
    this.props.handleChange("age", value);
  }

  render() {
    return (
      <div>
        <Header size="small">AGE GROUP</Header>
        <Form.Group widths={"equal"} inline >
          <Form.Field>
            <Checkbox
              value="interval1"
              label="13-16"
              checked={this.state.value === "interval1"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field >
            <Radio
              value="interval2"
              label="16-21"
              checked={this.state.value === "interval2"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width={1}>
            <Radio
              value="interval3"
              label="22+"
              checked={this.state.value === "interval3"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
      </div>
    );
  }
}