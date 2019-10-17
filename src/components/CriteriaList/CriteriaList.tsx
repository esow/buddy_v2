import { Segment, Label, Grid } from "semantic-ui-react";
import VoiceChat from "./CriteriaListSection/VoiceChat";
// import AgeGroups from './CriteriaListSection/AgeGroups';
import AllLanguages from "./CriteriaListSection/AllLanguages";
import "./CriteriaList.css";
import * as React from "react";
import AgeGroups from "./CriteriaListSection/AgeGroups";
import { ageGroups } from '../../resources/AgeGroups';
import { Criteria } from "../../models/FornitePlayerStats";

export interface CriteriaListProps {
    criteria: Criteria;
    onChangeCriteria: any;
}

class CriteriaList extends React.Component<CriteriaListProps, any> {

    componentDidMount() {
        if (!this.props.criteria) {
            // history.pushState("/");
        } else {
            this.setState({
                ageGroups: this.props.criteria.ageGroups,
                voiceChat: this.props.criteria.voiceChat,
                ignoreLanguage: true
            });
        }
    }

    shouldComponentUpdate(nextState: any) {
        return (this.state !== nextState);
    }

    componentDidUpdate() {
        this.props.onChangeCriteria(this.state);
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

    onChangeAgeGroup = ({ name }: any) => {
        let ageGroups = { ...this.state.ageGroups };
        ageGroups[name] = !ageGroups[name];

        this.setState({
            ageGroups: ageGroups
        });
    }

    onChangeVoiceChat = ({ label }: any) => {
        let voiceChat = { ...this.state.voiceChat };
        voiceChat[label] = !voiceChat[label];

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
                        <AgeGroups onChange={this.onChangeAgeGroup} ageGroups={ageGroups} />
                    </Grid.Column>
                    <Grid.Column >
                        <VoiceChat onChange={this.onChangeVoiceChat} checked={this.props.criteria.voiceChat.YES} />
                    </Grid.Column>
                    <Grid.Column >
                        <AllLanguages onChange={this.onChangeAllLanguages} ignoreLanguage={false} />
                    </Grid.Column>

                </Grid>
            </Segment>
        );
    }
}

export default CriteriaList;