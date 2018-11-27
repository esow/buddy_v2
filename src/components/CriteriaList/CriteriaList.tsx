import { Segment, Form, Label } from "semantic-ui-react";
import VoiceChat from "./CriteriaListSection/VoiceChat";
// import AgeGroups from './CriteriaListSection/AgeGroups';
import AllLanguages from "./CriteriaListSection/AllLanguages";
import "./CriteriaList.css";
import * as React from "react";

export interface CriteriaListProps {
    criteria: any;
    onChangeCriteria: any;
}

class CriteriaList extends React.Component<CriteriaListProps, any> {

    componentDidMount() {
        if (!this.props.criteria) {
            // history.pushState("/");
        } else {
            this.setState({
                positions: this.props.criteria.positions,
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
            <div style={{ width: "100%" }}>
                <Form>
                    <Segment inverted color={"yellow"} id="criteria-bar" raised>
                        <Label id="criteria-header" color="orange" floating>Filters</Label>
                        {/* <AgeGroups onChange={this.onChangeAgeGroup} ageGroups={this.state.ageGroups} /> */}
                        <AllLanguages onChange={this.onChangeAllLanguages} ignoreLanguage={false} />
                        <VoiceChat onChange={this.onChangeVoiceChat} checked={true} />
                    </Segment>
                </Form>
            </div>
        );
    }
}

export default CriteriaList;