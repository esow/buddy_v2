import { Form, Header } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";

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

  handleChange = (value: String) => {
    this.setState({ value: value });
    this.props.handleChange("age", value);
  }

  render() {
    return (
      <div>
        <Header size="small">AGE GROUP</Header>
        <Form.Group inline className="centered-form-field">
          <RadioGroup name="ageGroups" selectedValue={this.state.value} onChange={this.handleChange}>
            <Form.Field>
              <Radio value="interval1" label="13-16" />
              <Header size="tiny">13-16</Header>
            </Form.Field>
            <Form.Field>
              <Radio value="interval2" label="16-21" />
              <Header size="tiny">16-21</Header>
            </Form.Field>
            <Form.Field>
              <Radio value="interval3" label="22+" />
              <Header size="tiny">22+</Header>
            </Form.Field>
          </RadioGroup>
        </Form.Group>
      </div>
    );
  }
}