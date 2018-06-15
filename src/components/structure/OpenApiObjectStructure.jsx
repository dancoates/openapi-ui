// @flow
import React from "react";
import type {OpenApiObject} from "../../types/OpenApiSchema";
import OpenApiUiContext from "../OpenApiUiContext";

type Props = {
    schemaField: OpenApiObject,
    schema: OpenApiObject
};

export default function(props: Props) {
    const {schemaField} = props;

    return (
        <OpenApiUiContext.Consumer>
            {({theme}) => {
                const layoutProps = {};

                const AsyncRenderHock = theme.hock.AsyncRenderHock;
                const OpenApiObjectLayout = AsyncRenderHock(theme.layout.OpenApiObjectLayout);
                return <OpenApiObjectLayout layoutProps={layoutProps} />;
            }}
        </OpenApiUiContext.Consumer>
    );
}
