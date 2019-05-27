import { Grid, Header } from "semantic-ui-react";
import * as React from "react";

export default function MatchTileHeader() {
    return (
        <Grid columns="equal" textAlign="center" verticalAlign="middle">
            <Grid.Column width={2}>
                <Header size='small'> Player name </Header>
            </Grid.Column>
            <Grid.Column>
                <Header size='small'> Languages </Header>
            </Grid.Column>
            <Grid.Column>
                <Header size='small'> Age Group </Header>
            </Grid.Column>
            <Grid.Column>
                <Header size='small'> Voice chat? </Header>
            </Grid.Column>
            <Grid.Column>
                <Header size='small'> Top 5 </Header>
            </Grid.Column>
            <Grid.Column>
                <Header size='small'> Played </Header>
            </Grid.Column>
            <Grid.Column>
                <Header size='small'> K/D </Header>
            </Grid.Column>
            <Grid.Column>
                <Header size='small'> % Win </Header>
            </Grid.Column>
            <Grid.Column width={3}>
                <Header size='small'> Comment </Header>
            </Grid.Column>
            <Grid.Column width={2}>
                <Header size='small'> Send request </Header>
            </Grid.Column>
        </Grid>
    );
}