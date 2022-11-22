import * as React from 'react';
import { AppState } from '../redux/integration/store';
import { AppError } from '../redux/store';

export interface LoaderProps extends React.PropsWithChildren {
    status: AppState;
    message?: string;
    error?: AppError;
    onLoad: () => void;
}

interface LoaderState { }

export default class Loader extends React.Component<LoaderProps, LoaderState> {
    componentDidMount() {
        this.props.onLoad();
    }
    renderError() {
        if (!this.props.error) {
            return (
                <div data-k-b-testhook-component="Loader" data-k-b-testhook-element="error">
                    An Unknown Error Occurred!
                </div>
            );
        }
        return (
            // TODO: need to rethink how the integration loading state (where this is used ... sort that out too!)
            //       is shown. E.g. the plugin using integration will have it's own loading display, so
            //       perhaps that can be passed in to the integration component.
            <div data-k-b-testhook-component="Loader" data-k-b-testhook-element="error">
                {this.props.error.message}
            </div>
        );
    }
    renderLoading() {
        return (
            <div data-k-b-testhook-component="Loader" data-k-b-testhook-element="loading">
                {this.props.message}
            </div>
        );
    }
    render() {
        switch (this.props.status) {
            case AppState.NONE:
            case AppState.LOADING:
                return this.renderLoading();
            case AppState.ERROR:
                return this.renderError();
            case AppState.READY:
                return this.props.children;
        }
    }
}
