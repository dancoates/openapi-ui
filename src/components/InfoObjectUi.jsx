// @flow
import React from "react";
import type { OpenApiObject } from "../types/OpenApiSchema";
import type { InfoObject } from "../types/OpenApiSchema";

type Props = {
    info: InfoObject,
    schema: OpenApiObject
};

// @TODO
// - safelink the TOS

export default class OpenApiUi extends React.Component<Props, void> {
    render(): * {
        const { schema } = this.props;
        const { info } = this.props;

        return (
            <div>
                <h1>
                    {info.title} <small>OAS {schema.openapi}</small>
                </h1>

                {info.description && <p>{info.description}</p>}
                {info.termsOfService && <a href={info.termsOfService}>{info.termsOfService}</a>}
                {info.contact && <a href={info.termsOfService}>{info.termsOfService}</a>}
            </div>
        );
    }
}
