import { Divider, Dropdown, DropdownProps } from "semantic-ui-react";
import * as React from "react";
import { Component } from "react";
import { languages } from "../../../resources/Languages";

interface Props {
    selectedLanguages: string[];
    handleChange: (from: string, data: any) => void;
}
export default class Languages extends Component<Props, any> {

    handleChange = (_: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        this.props.handleChange("language", data.value);
    }

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
                    onChange={this.handleChange}
                    closeOnChange
                />
            </div>
        );
    }
}
