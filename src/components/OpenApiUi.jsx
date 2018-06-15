// @flow
import React from "react";
import OpenApiUiDefaultTheme from "./OpenApiUiDefaultTheme";
import AsyncRenderHock from "./hock/AsyncRenderHock";
import type {OpenApiObject} from "../types/OpenApiSchema";
import type {OpenApiUiTheme} from "../types/OpenApiUiTheme";

type Props = {
    schema: OpenApiObject,
    theme: OpenApiUiTheme
};

export default class OpenApiUi extends React.Component<Props> {
    static defaultProps = {
        theme: OpenApiUiDefaultTheme
    };

    render() {
        const {schema} = this.props;
        const {theme} = this.props;
        console.log(schema);
        const OpenApiObjectStructure = AsyncRenderHock({
            loader: () => <div>Loading component</div>
        })(theme.structure.OpenApiObjectStructure);

        // return <div />;
        return <OpenApiObjectStructure schemaField={schema} schema={schema} theme={theme} />;
    }
}
