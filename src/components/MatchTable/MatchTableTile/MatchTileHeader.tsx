import { Grid } from "semantic-ui-react";
import * as React from "react";
import "../MatchTable.css";

export default function MatchTileHeader() {
    return (
        <div className="match-tile">
            <Grid className="grid match-tile-header" columns="equal" verticalAlign="middle" divided>
                <Grid.Column width={2}>
                    <h4> Player name </h4>
                </Grid.Column>
                <Grid.Column>
                    <h4> Languages </h4>
                </Grid.Column>
                <Grid.Column>
                    <h4> Age Group </h4>
                </Grid.Column>
                <Grid.Column>
                    <h4> Voice chat? </h4>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h4> Comment </h4>
                </Grid.Column>
                <Grid.Column />
            </Grid>
        </div>
    );
}