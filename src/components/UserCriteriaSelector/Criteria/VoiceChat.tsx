import { Form, Divider } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";
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
    }

    render() {
        return (
            <div>
                <Divider inverted horizontal>Voice chat?</Divider>
                <Form.Group inline className="centered-form-field">
                    <RadioGroup name="voiceChat" selectedValue={this.state.voicechat} onChange={this.handleChange}>
                        <Form.Field>
                            <Radio value="yes" />
                            YES
                        </Form.Field>
                        <Form.Field>
                            <Radio value="no" />
                            NO
                    </Form.Field>
                        <Form.Field>
                            <Radio value="w/e" />
                            I don't care
                    </Form.Field>
                    </RadioGroup>
                </Form.Group>

            </div>
        );
    }
}