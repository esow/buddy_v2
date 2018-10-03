import { Form, Checkbox, Divider, Button } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";

export default class AutoRefresh extends Component<any, any> {
    render() {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>MatchList</Divider>
                <Form.Group className="criteria-content no-margin">
                    <Form.Field>
                        <Checkbox checked label="Automatically refresh list" />
                    </Form.Field>
                    <Form.Field>
                        <Button primary compact disabled>Refresh</Button>
                    </Form.Field>
                </Form.Group>
            </div>
        );
    }
}