// @flow
import React from "react";
import type {OpenApiObject} from "../types/OpenApiSchema";
import type {ContactObject} from "../types/OpenApiSchema";

type Props = {
    contact: ContactObject,
    schema: OpenApiObject
};

// @TODO

export default class OpenApiUi extends React.Component<Props, void> {
    render(): * {
        const {schema} = this.props;
        const {contact} = this.props;

        return (
            <div>
                Contact:<br />
            </div>
        );
    }
}
