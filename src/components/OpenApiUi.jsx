// @flow
import React from "react";
import type {ComponentType} from "react";
import OpenApiUiDefaultTheme from "./OpenApiUiDefaultTheme";
import AsyncRenderHock from "./hock/AsyncRenderHock";
import type {OpenApiObject} from "../types/OpenApiSchema";

type Props = {
    schema: OpenApiObject,
    theme: *
};

export default class OpenApiUi extends React.Component<Props> {
    static defaultProps = {
        theme: OpenApiUiDefaultTheme
    };

    render() {
        const {schema} = this.props;
        const {theme} = this.props;

        const OpenApiObjectStructure = AsyncRenderHock({
            loader: () => <div>Loading component</div>
        })(theme.structure.OpenApiObjectStructure);

        return <OpenApiObjectStructure schemaField={schema} schema={schema} theme={theme} />;
    }
}
