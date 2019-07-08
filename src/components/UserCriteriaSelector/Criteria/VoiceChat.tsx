import { Form, Header } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";
import "./VoiceChat.css";
interface VoiceChatProps {
    handleChange: (event: any, data: any) => void;
    voicechat: String;
}

interface State {
    voicechat: String;
}

export default class VoiceChat extends Component<VoiceChatProps, State> {
    constructor(props: VoiceChatProps) {
        super(props);
        // Don't call this.setState() here!
        this.state = { voicechat: this.props.voicechat };
    }

    handleChange = (value: String) => {
        this.setState({ voicechat: value });
        this.props.handleChange("voice", value);
    }

    render() {
        return (
            <div>
                <Header size="small">VOICE CHAT</Header>
                <Form.Group inline className="centered-form-field">
                    <RadioGroup name="voiceChat" selectedValue={this.state.voicechat} onChange={this.handleChange}>
                        <Form.Field>
                            <Radio value="yes" />
                            <Header size="tiny">Yes</Header>
                        </Form.Field>
                        <Form.Field>
                            <Radio value="no" />
                            <Header size="tiny">No</Header>
                        </Form.Field>
                        <Form.Field>
                            <Radio value="w/e" />
                            <Header size="tiny">Don't care</Header>
                        </Form.Field>
                    </RadioGroup>
                </Form.Group>

            </div>
        );
    }
}