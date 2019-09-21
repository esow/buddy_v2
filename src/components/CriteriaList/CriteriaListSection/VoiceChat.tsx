import { CheckboxProps, Header } from "semantic-ui-react";
import { Form, Checkbox } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";

interface VoiceChatsProps {
    onChange: (event: any, data: any) => void;
    checked: any;
}

interface State {
    checked: any;
}

export default class VoiceChat extends Component<VoiceChatsProps, State> {

    render() {
        return (
            <>
                <Header size="tiny">VOICE CHAT</Header>
                <Form>
                    <Form.Group inline>
                        <Form.Field inline width={5}>
                            <Checkbox
                                label="YES"
                                checked={this.props.checked.YES}
                                onChange={this.props.onChange}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Checkbox
                                label="NO"
                                checked={this.props.checked.NO}
                                onChange={this.props.onChange}
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </>
        );
    }
}