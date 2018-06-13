// @flow
import React from "react";
import type {ComponentType} from "react";

type AsyncRenderHockConfig = {
    loader: ComponentType<{}>
};

export default function<Props: {}>(
    config: AsyncRenderHockConfig
): (ComponentFuture: Promise<ComponentType<Props>>) => ComponentType<Props> {
    return (ComponentFuture: Promise<ComponentType<Props>>): ComponentType<Props> => {
        type State = {
            Component?: ComponentType<Props>
        };

        class AwaitComponentFuture extends React.Component<Props, State> {
            state = {};

            componentDidMount() {
                ComponentFuture.then((Component: ComponentType<Props>) => {
                    this.setState({Component});
                });
            }

            render() {
                const Loader = config.loader;
                const Component = this.state.Component;
                return Component ? <Component {...this.props} /> : <Loader />;
            }
        }

        return AwaitComponentFuture;
    };
}
