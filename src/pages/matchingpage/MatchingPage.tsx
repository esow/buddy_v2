import Notification from "react-web-notification";
import { Component } from "react";
import * as React from "react";
import CriteriaList from "../../components/CriteriaList/CriteriaList";
import MatchTable from "../../components/MatchTable/MatchTable";
import RequestingMatchModal from "../../components/Modals/RequestingMatchModal";
import "./MatchingPage.css";
import MatchRequestModal from "../../components/Modals/MatchRequestModal";
import MatchResponseModal from "../../components/Modals/MatchResponseModal";
import { RootState } from "../../store/root-reducer";
import { connect } from "react-redux";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";

interface State {
    status?: string;
    timeLeft: number;
    ignore: boolean;
    options?: any;
    title: string;
    otherPlayer: any;
    showModal: number;

}
interface ConnectedProps {
    matches: FortnitePlayerStats[];
}

interface MatchingPageProps {
    criteria: any;
}
class MatchingPage extends Component<MatchingPageProps & ConnectedProps, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: 0,
            status: undefined,
            timeLeft: 50,
            ignore: true,
            title: "asd",
            otherPlayer: ""
        };
    }

    componentWillMount() {
        // Go to frontpage if you don't have channel or criteria
        // if (!this.state.channel) {
        // history.pushState(process.env.PUBLIC_URL + "/");
        // }
    }

    componentWillUnmount() {
        // var channel = this.state.channel;
        // if (channel) { channel.leave(); }
    }

    handlePermissionGranted() {
        console.log("Permission Granted");
        this.setState({
            ignore: false
        });
    }
    handlePermissionDenied() {
        console.log("Permission Denied");
        this.setState({
            ignore: true
        });
    }
    handleNotSupported() {
        console.log("Web Notification not Supported");
        this.setState({
            ignore: true
        });
    }

    handleNotification = () => {

        if (this.state.ignore) {
            return;
        }

        const now = Date.now();

        const title = "You matched with someone!";
        const body = this.state.otherPlayer.name + " wants to play with you.";
        const tag = now;

        const options = {
            tag: tag,
            body: body,
            lang: "en",
            dir: "ltr"
        };

        this.setState({
            title: title,
            options: options
        });
    }

    render() {
        return (
            <div className="main-content2">
                <div className="width-control2">
                    <CriteriaList onChangeCriteria={() => true} criteria={this.props.criteria} />
                    <MatchTable matches={this.props.matches} requestMatch={() => true} />

                    <Notification
                        ignore={this.state.ignore && this.state.title !== ""}
                        title={this.state.title}
                        options={this.state.options}
                        // tslint:disable-next-line:jsx-no-bind
                        notSupported={this.handleNotSupported.bind(this)}
                        // tslint:disable-next-line:jsx-no-bind
                        onPermissionGranted={this.handlePermissionGranted.bind(this)}
                        // tslint:disable-next-line:jsx-no-bind
                        onPermissionDenied={this.handlePermissionDenied.bind(this)}
                        timeout={5000}
                    />

                    <RequestingMatchModal
                        open={this.state.showModal === 1}
                        handleClose={() => true}
                        player={this.state.otherPlayer}
                        timeLeft={this.state.timeLeft}
                    />

                    <MatchRequestModal
                        open={this.state.showModal === 2}
                        handleClose={() => true}
                        handleAccept={() => true}
                        player={this.state.otherPlayer}
                        timeLeft={this.state.timeLeft}
                    />

                    <MatchResponseModal
                        open={this.state.showModal === 3}
                        handleClose={() => true}
                        player={this.state.otherPlayer}
                        response="Request_Rejected"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    matches: state.matching.matches
});

export default connect(mapStateToProps, {})(MatchingPage);
