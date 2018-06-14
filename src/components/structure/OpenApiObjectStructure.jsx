// @flow
import React from "react";
import type {OpenApiObject} from "../../types/OpenApiSchema";
import type {OpenApiUiTheme} from "../../types/OpenApiUiTheme";

type Props = {
    schemaField: OpenApiObject,
    schema: OpenApiObject,
    theme: OpenApiUiTheme
};

export default class OpenApiObjectStructure extends React.Component<Props> {
    render() {
        console.log("OBJECT");
        return <div>Object</div>;
    }
}
