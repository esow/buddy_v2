import { Divider, Dropdown } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";

interface LanguageProps {
    handleChange: () => void;
    languageOptions: any;
    value: string;
}

export default class Languages extends Component<LanguageProps> {
    render() {
        return (
            <div>
                <Divider inverted horizontal>Languages</Divider>
                <Dropdown
                    placeholder="Select one or more languages"
                    fluid
                    multiple
                    search
                    selection
                    options={this.props.languageOptions}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    closeOnChange
                />
            </div>
        );
    }
}