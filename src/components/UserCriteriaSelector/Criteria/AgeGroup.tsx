import { Form, Checkbox, Divider } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";

interface AgeGroupProps {
  handleChange: (input: String) => void;
  value: String;
}

export default class AgeGroup extends Component<AgeGroupProps> {

  setAgeInterval1 = () => this.props.handleChange("interval1");
  setAgeInterval2 = () => this.props.handleChange("interval2");
  setAgeInterval3 = () => this.props.handleChange("interval3");

  render() {
    return (
      <div>
        <Divider inverted horizontal>Age group</Divider>
        <Form.Group inline>
          <Form.Field>
            <Checkbox
              radio
              label="13-16"
              value="interval1"
              checked={this.props.value === "interval1"}
              onChange={this.setAgeInterval1}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="17-21"
              value="interval2"
              checked={this.props.value === "interval2"}
              onChange={this.setAgeInterval2}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="22+"
              value="interval3"
              checked={this.props.value === "interval3"}
              onChange={this.setAgeInterval3}
            />
          </Form.Field>
        </Form.Group>
      </div>
    );
  }
}