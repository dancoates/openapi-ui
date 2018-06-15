// @flow
import React from "react";
import type {ComponentType} from "react";
import OpenApiUiDefaultTheme from "./OpenApiUiDefaultTheme";
import type {OpenApiObject} from "../types/OpenApiSchema";
import OpenApiUiContext from "./OpenApiUiContext";

type Props = {
    schema: OpenApiObject
};

export default class OpenApiUi extends React.Component<Props> {
    render() {
        const {schema} = this.props;

        return (
            <OpenApiUiContext.Consumer>
                {value => {
                    console.log("V", value);
                    const {theme} = value;
                    const AsyncRenderHock = theme.hock.AsyncRenderHock;
                    const OpenApiObjectStructure = AsyncRenderHock(
                        theme.structure.OpenApiObjectStructure
                    );
                    return <OpenApiObjectStructure schemaField={schema} schema={schema} />;
                }}
            </OpenApiUiContext.Consumer>
        );
    }
}
