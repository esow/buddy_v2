import { Segment, Transition, List } from "semantic-ui-react";
import MatchTile from "./MatchTableTile/MatchTile";
import "./MatchTable.css";
import MatchTileHeader from "./MatchTableTile/MatchTileHeader";
import { Component } from "react";
import * as React from "react";

export interface MatchTableProps {
    matches: 
    {
        id: number;
        region: string; 
        name: string
        comment: string;
    }[];
    requestMatch: (player: any) => void;
}

export default class MatchTable extends Component<MatchTableProps> {

    render() {
        const noMatches = (this.props.matches.length === 0);
        const state = { hide: 0, show: 500 };

        const { hide, show } = state;

        return (
            <div className="match-table">
                <Segment inverted>
                    <MatchTileHeader />
                    <div className={noMatches ? "" : "hidden"} >
                        <div className="match-tile empty">
                            <h4>You don't have any matches yet. Try changing your search 
                                criteria or wait a bit until someone else signs up.</h4>
                        </div>
                    </div>

                    <Transition.Group
                        as={List}
                        duration={{ hide, show }}
                        divided
                        size="huge"
                        verticalAlign="middle"
                        animation="vertical flip"
                        className="no-margin"
                    >
                        {this.props.matches.map((match) =>
                            <List.Item key={match.id}>
                                <MatchTile requestMatch={this.props.requestMatch} match={match} />
                            </List.Item>
                        )}

                    </Transition.Group>

                </Segment>
            </div>
        );
    }
}