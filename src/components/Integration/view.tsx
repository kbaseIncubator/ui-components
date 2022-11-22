import * as React from 'react';
import './style.css';

// This is the "loader" component, which really just waits until the app is ready
// according to the store. onAppStart invokes the startup process for the app, which
// is responsible for populating the store with app configuration, channel id for
// comm, etc.
// TODO: auth is separate, but we maybe we should merge them together...


export interface KBaseIntegrationProps extends React.PropsWithChildren {
    title: string;
}

interface KBaseIntegrationState {
    ready: boolean;
}

export default class KBaseIntegration extends React.Component<KBaseIntegrationProps, KBaseIntegrationState> {
    constructor(props: KBaseIntegrationProps) {
        super(props);

        this.state = {
            ready: false
        };
    }

    componentDidMount() {
        this.setState({
            ready: true
        });
    }

    renderReady() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }

    renderNotReady() {
        return <div data-k-b-testhook-element="notready"></div>;
    }

    render() {
        return (
            <div data-k-b-testhook-component="KBaseIntegration" className="scrollable-flex-column">
                {this.state.ready ? this.renderReady() : this.renderNotReady()}
            </div>
        );
    }
}
