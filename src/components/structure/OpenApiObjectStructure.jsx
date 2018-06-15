// @flow
import React from "react";
import type {OpenApiObject} from "../../types/OpenApiSchema";

type Props = {
    schemaField: OpenApiObject,
    schema: OpenApiObject,
    theme: *
};

export default class OpenApiObjectStructure extends React.Component<Props> {
    render() {
        return <div>Object</div>;
    }
}
