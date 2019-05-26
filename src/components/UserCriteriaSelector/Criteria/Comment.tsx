import * as React from "react";
import { Component } from "react";
import { Header, Form, TextAreaProps } from "semantic-ui-react";
import "./Comment.css";

const maxLength = 145;

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
                <Header size="small">
                    <Header className="subheader" size="small">COMMENTS</Header>
                    <Header className="subheader counter" size="small">{
                        maxLength - (this.state.value + '').length > 0 ?
                            `${maxLength - (this.state.value + '').length} CHARS` :
                            'Too long!'}
                    </Header>
                </Header>
                <Form.TextArea
                    name="comment"
                    className="comment-form"
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder="Type here..."
                />

            </div>
        );
    }
}
