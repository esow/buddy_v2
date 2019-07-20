import { Grid, Header, Icon } from "semantic-ui-react";
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
            <Grid.Column style={columnStyle}>
                <Header size='small'><Icon name="winner" color="orange" size="mini" style={iconStyle} /> % Win </Header>
            </Grid.Column>
            <Grid.Column style={columnStyle}>
                <Header size='small'><Icon name="angle double up" color="green" size="mini" style={iconStyle} /> Top 5 </Header>
            </Grid.Column>
            <Grid.Column style={columnStyle}>
                <Header size='small'><Icon name="game" color="violet" size="mini" style={iconStyle} /> Played </Header>
            </Grid.Column>
            <Grid.Column style={columnStyle}>
                <Header size='small'><Icon name="bullseye" color="red" size="mini" style={iconStyle} /> K/D </Header>
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

const columnStyle = {
    padding: "1px"
}

const iconStyle = {
    margin: "1px"
}