// @flow
import React from "react";
import type {OpenApiObject} from "../../types/OpenApiSchema";

type Props = {
    schemaField: OpenApiObject
};

export default function(props: Props) {
    console.log(props);
    return <div>Object</div>;
}
