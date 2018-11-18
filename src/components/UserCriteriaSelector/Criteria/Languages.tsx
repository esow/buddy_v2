import { Divider, Dropdown, DropdownProps } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";
import { languages } from "../../../resources/Languages";

interface Props {
    selectedLanguages: string[];
    handleChange: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
}
export default class Languages extends Component<Props, any> {

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
                    value={this.props.selectedLanguages}
                    options={languages}
                    onChange={this.props.handleChange}
                    closeOnChange
                />
            </div>
        );
    }
}
