/* @flow */
import React from 'react';
import type {ComponentType} from 'react';
import {FetchingState} from 'react-enty/lib/RequestState';
import {SuccessState} from 'react-enty/lib/RequestState';
import {ErrorState} from 'react-enty/lib/RequestState';
import Fetching from 'jarvis-core-client/requestState/component/Fetching';
import Error from 'jarvis-core-client/requestState/component/Error';
type Props = {};
type State = {
    requestState: Object,
    Component: ComponentType<*>
};
export default function CodeSplitFactory(importer: Function): ComponentType<*> {
    class CodeSplit extends React.Component<Props, State> {
        static loadingPromise = null;
        mounted: boolean;
        state = {
            Component: () => <div/>,
            requestState: FetchingState()
        };
        componentDidMount = () => {this.mounted = true;};
        componentWillUnmount = () => {this.mounted = false;};
        constructor(props: Object) {
            super(props);
            this.updateComponent();
        }
        componentWillReceiveProps() {
            this.updateComponent();
        }
        static load(): Promise<*> {
            return CodeSplit.loadingPromise = importer()
                .then((module: Object): Object => {
                    return module.default || module;
                });
        }
        updateComponent = () => {
            CodeSplit.load()
                .then((Component: *) => {
                    this.mounted && this.setState({
                        Component,
                        requestState: SuccessState()
                    });
                })
                .catch(err => this.mounted && this.setState({
                    requestState: ErrorState(err)
                }))
            ;
        }
        render(): * {
            const {requestState} = this.state;
            const {Component} = this.state;
            return requestState
                .fetchingMap(Fetching())
                .errorMap(Error())
                .successMap(() => <Component {...this.props} />)
                .value()
            ;
        }
    }
    if (module && module.hot) {
        CodeSplit.load();
    }
    return CodeSplit;
}