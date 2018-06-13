// @flow
import React from "react";
import OpenApiUiContext from "./OpenApiUiContext";
import OpenApiUiDefaultTheme from "./OpenApiUiDefaultTheme";
import AsyncRenderHock from "./hock/AsyncRenderHock";
import type {OpenApiObject} from "../types/OpenApiSchema";
import type {OpenApiUiTheme} from "../types/OpenApiUiTheme";

type Props = {
    schema: OpenApiObject,
    theme: OpenApiUiTheme
};

class ThemedOpenApiUi extends React.Component<{}> {
    render() {
        return (
            <OpenApiUiContext.Consumer>
                {({theme, schema}) => {
                    if (!theme || !schema) return <span />;
                    const OpenApiObjectStructure = AsyncRenderHock({
                        loader: () => <div>Loading component</div>
                    })(theme.structure.OpenApiObjectStructure);
                    <OpenApiObjectStructure schemaField={schema} />;
                }}
            </OpenApiUiContext.Consumer>
        );
    }
}

export default class OpenApiUi extends React.Component<Props> {
    static defaultProps = {
        theme: OpenApiUiDefaultTheme
    };

    render() {
        const {schema} = this.props;
        const {theme} = this.props;

        return (
            <OpenApiUiContext.Provider value={{schema, theme}}>
                <ThemedOpenApiUi />
            </OpenApiUiContext.Provider>
        );
    }
}
