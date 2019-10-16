import _ from 'lodash'
import { Segment, Table, Icon } from "semantic-ui-react";
import MatchTile from "./MatchTableTile/MatchTile";
// import MatchTileHeader from "./MatchTableTile/MatchTileHeader";
import { Component } from "react";
import * as React from "react";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";
import "./MatchTable.css";

export interface MatchTableProps {
    matches?: FortnitePlayerStats[];
    requestMatch: (player: any) => void;
}

export default class MatchTable extends Component<MatchTableProps, any> {

    state = {
        column: null,
        data: this.props.matches,
        direction: null,
    }

    handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state
        if (column !== clickedColumn) {
            var tmp;
            if (clickedColumn == 'name') {
                tmp = _.sortBy(data, [clickedColumn])
            } else if (clickedColumn == 'gamesWon') {
                tmp = _.orderBy(data, (e) => Math.round(e.duo[clickedColumn] / e.duo['gamesPlayed'] * 100), "asc")
            } else {
                tmp = _.orderBy(data, (e) => e.duo[clickedColumn], "asc")
            }
            this.setState({
                column: clickedColumn,
                data: tmp,
                direction: 'ascending',
            })

            return
        }
        try {
            this.setState({
                data: data.reverse(),
                direction: direction === 'ascending' ? 'descending' : 'ascending',
            })
        } catch (err) {
            this.setState({
                data: data,
                direction: direction === 'ascending' ? 'descending' : 'ascending',
            })
        }

    }


    render() {
        const noMatches = (this.props.matches === undefined || this.props.matches.length === 0);
        const { column, data, direction } = this.state

        return (
            < Table celled sortable textAlign="center" >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={this.handleSort('name')}
                        >Name</Table.HeaderCell>
                        <Table.HeaderCell>Language</Table.HeaderCell>
                        <Table.HeaderCell>Age Group</Table.HeaderCell>
                        <Table.HeaderCell>Voice</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'top5finishes' ? direction : null}
                            onClick={this.handleSort('top5finishes')}
                        ><Icon name="angle double up" color="green" size="small" style={iconStyle} /> Top 5</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'gamesPlayed' ? direction : null}
                            onClick={this.handleSort('gamesPlayed')}
                        ><Icon name="game" color="violet" size="small" style={iconStyle} /> Played</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'killDeathRatio' ? direction : null}
                            onClick={this.handleSort('killDeathRatio')}
                        ><Icon name="bullseye" color="red" size="small" style={iconStyle} /> K/D</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'gamesWon' ? direction : null}
                            onClick={this.handleSort('gamesWon')}
                        ><Icon name="winner" color="orange" size="small" style={iconStyle} /> % Win</Table.HeaderCell>
                        <Table.HeaderCell>Comment</Table.HeaderCell>
                        <Table.HeaderCell>Send Request</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row className={noMatches ? "" : "hidden"}>You don't have any matches yet!</Table.Row>
                    {this.state.data && this.state.data.map((match: any) =>
                        <MatchTile requestMatch={this.props.requestMatch} match={match} />
                    )}
                </Table.Body>
            </Table >
        );
    }
}

const iconStyle = {
    margin: "1px"
}

