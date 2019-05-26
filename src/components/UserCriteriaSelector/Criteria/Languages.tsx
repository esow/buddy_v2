import { Dropdown, DropdownProps, Grid, Header } from "semantic-ui-react";
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
                <Grid.Row centered>
                    <Header size="small">LANGUAGE</Header>
                    <Grid.Column className="centered-form-field">
                        <Dropdown
                            placeholder="Choose one or more"
                            fluid
                            multiple
                            searchS
                            selection
                            value={this.props.selectedLanguages}
                            options={languages}
                            onChange={this.handleChange}
                            closeOnChange
                        />
                    </Grid.Column>
                </Grid.Row>
            </div>
        );
    }
}
