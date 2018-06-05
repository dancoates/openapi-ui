// @flow
import React from "react";
import type {OpenApiObject} from "../types/OpenApiSchema";
import InfoObjectUi from "./InfoObjectUi";

type Props = {
    schema: OpenApiObject
};

export default class OpenApiObjectUi extends React.Component<Props, void> {
    render(): * {
        const {schema} = this.props;

        return <div>{schema.info && <InfoObjectUi schema={schema} info={schema.info} />}</div>;
    }
}
