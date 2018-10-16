import { Form, Divider } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";

interface CommentProps {
    handleChange: () => boolean;
    comment: string;
}

export default class Comment extends Component<CommentProps> {
    render() {
        return (
            <div>
                <Divider inverted horizontal>Comments</Divider>
                <Form.TextArea
                    className="comment-form"
                    onChange={this.props.handleChange}
                    value={this.props.comment}
                    placeholder="Additional information (max. 100 characters)"
                />

            </div>
        );
    }
}
