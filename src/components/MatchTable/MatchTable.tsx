import { Segment, Transition, List, Header } from "semantic-ui-react";
import MatchTile from "./MatchTableTile/MatchTile";
import MatchTileHeader from "./MatchTableTile/MatchTileHeader";
import { Component } from "react";
import * as React from "react";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";
import "./MatchTable.css";

export interface MatchTableProps {
    matches?: FortnitePlayerStats[];
    requestMatch: (player: any) => void;
}

export default class MatchTable extends Component<MatchTableProps, any> {

    render() {
        const noMatches = (this.props.matches === undefined || this.props.matches.length === 0);
        const state = { hide: 0, show: 500 };

        const { hide, show } = state;

        return (
            <Segment inverted color={"yellow"} style={{ overflow: 'auto', maxHeight: '80%' }}>
                <MatchTileHeader />
                <div className={noMatches ? "" : "hidden"} >
                    <div className="match-tile empty">
                        <Header>You don't have any matches yet!</Header>
                    </div>
                </div>

                <Transition.Group
                    as={List}
                    duration={{ hide, show }}
                    animation="vertical flip"
                >

                    {this.props.matches && this.props.matches.map((match: any) =>
                        <List.Item key={match.id} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                            <MatchTile requestMatch={this.props.requestMatch} match={match} />
                        </List.Item>
                    )}

                </Transition.Group>

            </Segment>
        );
    }
}



