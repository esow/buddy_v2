import { CheckboxProps, Header } from "semantic-ui-react";
import { Form, Checkbox } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";

interface VoiceChatsProps {
    onChange: (state: boolean) => void;
    checked: boolean;
}

interface State {
    checked: boolean;
}

export default class VoiceChat extends Component<VoiceChatsProps, State> {

    prettyOnchange(_: React.FormEvent<HTMLInputElement>, data: CheckboxProps) {

        if (data.label === "YES") {
            this.props.onChange(true);
        } else if (data.label === "NO") {
            this.props.onChange(false);

        }
    }

    render() {
        return (
            <>
                <Header size="tiny">VOICE CHAT</Header>
                <Form>
                    <Form.Group inline>
                        <Form.Field inline width={5}>
                            <Checkbox
                                label="YES"
                                checked={this.props.checked}
                                onChange={this.prettyOnchange}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Checkbox
                                label="NO"
                                checked={!this.props.checked}
                                onChange={this.prettyOnchange}
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </>
        );
    }
}