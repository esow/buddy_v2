import * as React from "react";
import { Component } from "react";
import { Divider, Form, TextAreaProps } from "semantic-ui-react";

interface CommentProps {
    handleChange: (from: string, data: any) => void;
    comment: string;
}

interface State {
    value: React.ReactText;
}

export default class Comment extends Component<CommentProps, State> {

    constructor(props: CommentProps) {
        super(props);
        // Don't call this.setState() here!
        this.state = { value: this.props.comment };
    }

    handleChange = (_: React.SyntheticEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
        if (data.value !== undefined) {
            this.setState({ value: data.value });
        }
        this.props.handleChange("comment", data.value);
    }
    render() {
        return (
            <div>
                <Divider inverted horizontal>Comments</Divider>
                <Form.TextArea
                    name="comment"
                    className="comment-form"
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder="Additional information (max. 100 characters)"
                />

            </div>
        );
    }
}
