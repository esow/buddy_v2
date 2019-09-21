import { Segment, Label, Grid } from "semantic-ui-react";
import VoiceChat from "./CriteriaListSection/VoiceChat";
// import AgeGroups from './CriteriaListSection/AgeGroups';
import AllLanguages from "./CriteriaListSection/AllLanguages";
import "./CriteriaList.css";
import * as React from "react";
import AgeGroups from "./CriteriaListSection/AgeGroups";
import { ageGroups } from '../../resources/AgeGroups';

export interface CriteriaListProps {
    criteria: any;
    onChange: any;
}

class CriteriaList extends React.Component<CriteriaListProps, any> {

    constructor(props: any) {
        super(props)
        if (props.criteria) {
            this.state = {
                positions: props.criteria.positions,
                ageGroups: props.criteria.ageGroups,
                voiceChat: props.criteria.voiceChat,
                ignoreLanguage: true
            }
        }
        else {
            this.state = {
                positions: [],
                ageGrounds: this.setInitialAgeGroup({ userInfo: { agegroup: "13-19" } }),
                voiceChat: this.setInitialVoiceChat({ userInfo: { voiceChat: true } }),
                ignoreLanguage: true,
            }
        }

    }

    shouldComponentUpdate(nextState: any) {
        return (this.state !== nextState);
    }

    componentDidUpdate() {
        this.props.onChange(this.state);
    }

    setInitialAgeGroup = (player: any) => {
        const ageGroups = {
            interval1: false,
            interval2: false,
            interval3: false
        };

        if (player.userInfo.agegroup === "13-19") { ageGroups.interval1 = true; }
        if (player.userInfo.agegroup === "20-29") { ageGroups.interval2 = true; }
        if (player.userInfo.agegroup === "29+") { ageGroups.interval3 = true; }

        return ageGroups;
    }

    setInitialVoiceChat = (player: any) => {
        const voiceChat = {
            YES: false,
            NO: false
        };

        if (player.userInfo.voicechat) { voiceChat.YES = true; }
        if (!player.userInfo.voicechat) { voiceChat.NO = true; }

        return voiceChat;
    }

    onChangePositions = (event: any) => {
        const pos = event.target.name;

        let positions = { ...this.state.positions };
        positions[pos] = !positions[pos];

        this.setState({
            positions: positions
        });
    }

    onChangeAgeGroup = (_: any, data: any) => {
        let ageGroups = { ...this.state.ageGroups };
        ageGroups[data.name] = !ageGroups[data.name];

        this.setState({
            ageGroups: ageGroups
        });

    }

    onChangeVoiceChat = (_: any, data: any) => {
        let voiceChat = { ...this.state.voiceChat };
        voiceChat[data.label] = !voiceChat[data.label];

        this.setState({
            voiceChat: voiceChat
        });
    }

    onChangeAllLanguages = () => {
        this.setState({
            ignoreLanguage: !this.state.ignoreLanguage
        });
    }

    render() {
        return (
            <Segment inverted color={"yellow"} id="criteria-bar" raised>
                <Label id="criteria-header" color="orange" floating>Filters</Label>
                <Grid centered columns="4">
                    <Grid.Column >
                        <AgeGroups onChange={this.onChangeAgeGroup} ageGroups={this.state.ageGroups} />
                    </Grid.Column>
                    <Grid.Column >
                        <VoiceChat onChange={this.onChangeVoiceChat} checked={this.state.voiceChat} />
                    </Grid.Column>
                    <Grid.Column >
                        <AllLanguages onChange={this.onChangeAllLanguages} ignoreLanguage={this.state.ignoreLanguage} />
                    </Grid.Column>

                </Grid>
            </Segment>
        );
    }
}

export default CriteriaList;