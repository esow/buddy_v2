import { Header } from "semantic-ui-react";
import { Form, Checkbox } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";

export default class AgeGroups extends Component<any, any> {
    render() {
        return (
            <>
                <Header size="small">AGE GROUP</Header>
                <Form>

                    <Form.Group className="criteria-content no-margin" inline>
                        <Form.Field>
                            <Checkbox
                                label={"13-16"}
                                name="interval1"
                                checked={this.props.ageGroups.interval1}
                                onChange={this.props.onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                label={"17-21"}
                                name="interval2"
                                checked={this.props.ageGroups.interval2}
                                onChange={this.props.onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                label={"22+"}
                                name="interval3"
                                checked={this.props.ageGroups.interval3}
                                onChange={this.props.onChange}
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </>
        );
    }
}