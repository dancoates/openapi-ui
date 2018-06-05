// @flow
import React from "react";

import type {OpenApiObject} from "../types/OpenApiSchema";

type Props = {
    schema: OpenApiObject
};

export default function(props: Props) {
    console.log(props);
    return <div>woot</div>;
}
