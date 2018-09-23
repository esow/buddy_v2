import * as React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
            <a href="https://www.twitter.com/BuddyGGOfficial" target="_blank">
                <Icon link name="twitter" size="huge" color="black"/>
            </a>
            <a href="https://github.com/buddygg" target="_blank">
                <Icon link name="github" size="huge" color="black"/>
            </a>
            </footer>
        );
    }
}
