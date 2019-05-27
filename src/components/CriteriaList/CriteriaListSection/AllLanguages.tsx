import { Header } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";

export default class AllLanguages extends Component<any, any> {

    render() {
        return (
            <>
                <Header size="tiny">SHOW ALL LANGUAGES</Header>
                <Checkbox
                    label="Show all languages"
                    checked={this.props.ignoreLanguage}
                    onChange={this.props.onChange}
                />
            </>
        );
    }
}