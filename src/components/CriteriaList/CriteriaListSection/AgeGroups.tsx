import { Divider } from "semantic-ui-react";
import { Form, Checkbox } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";

export default class AgeGroups extends Component<any, any> {
    render() {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>Age Group</Divider>

                <Form.Group className="criteria-content no-margin" inline>
                    <Form.Field>
                        <Checkbox
                            label={"age1"}
                            name="interval1"
                            checked={this.props.ageGroups.interval1}
                            onChange={this.props.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            label={"age2"}
                            name="interval2"
                            checked={this.props.ageGroups.interval2}
                            onChange={this.props.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            label={"age3"}
                            name="interval3"
                            checked={this.props.ageGroups.interval3}
                            onChange={this.props.onChange}
                        />
                    </Form.Field>
                </Form.Group>
            </div>
        );
    }
}