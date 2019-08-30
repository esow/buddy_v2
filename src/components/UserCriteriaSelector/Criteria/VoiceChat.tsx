import { Form, Header } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";
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


    handleChange = (_e: any, { value }: any) => {
        this.setState({ voicechat: value });
        this.props.handleChange("voice", value);
    }

    render() {
        return (
            <div>
                <Header size="small">VOICE CHAT</Header>
                <Form>
                    <Form.Group inline>
                        <Form.Radio
                            value="yes"
                            label="Yes"
                            checked={this.state.voicechat === "yes"}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            value="no"
                            label="No"
                            checked={this.state.voicechat === "no"}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                </Form>

            </div >
        );
    }
}