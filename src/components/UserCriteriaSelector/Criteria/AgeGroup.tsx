import { Form, Divider } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";

interface AgeGroupProps {
  handleChange: (event: any, data: String) => void;
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
  }

  render() {
    return (
      <div>
        <Divider inverted horizontal>Age group</Divider>
        <Form.Group inline className="centered-form-field">
          <RadioGroup name="ageGroups" selectedValue={this.state.value} onChange={this.handleChange}>
            <Form.Field>
              <Radio value="interval1" />
              13-16
                        </Form.Field>
            <Form.Field>
              <Radio value="interval2" />
              16-21
                    </Form.Field>
            <Form.Field>
              <Radio value="interval3" />
              22+
                    </Form.Field>
          </RadioGroup>
        </Form.Group>
      </div>
    );
  }
}