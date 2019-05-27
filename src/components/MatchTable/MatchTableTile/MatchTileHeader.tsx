import { Grid, Header } from "semantic-ui-react";
import * as React from "react";
import "../MatchTable.css";

export default function MatchTileHeader() {
    return (
        <div className="match-tile">
            <Grid columns="equal" textAlign="center">
                <Grid.Column width={2}>
                    <Header> Player name </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> Languages </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> Age Group </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> Voice chat? </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> Top 5 </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> PLayed </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> % Win </Header>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header> Comment </Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header> Send request </Header>
                </Grid.Column>
            </Grid>
        </div>
    );
}