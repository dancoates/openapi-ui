// @flow
import AsyncRenderHock from "./hock/AsyncRenderHock";
import React from "react";

export default {
    structure: {
        OpenApiObjectStructure: () =>
            import("./structure/OpenApiObjectStructure").then(ii => ii.default)
    },
    layout: {
        OpenApiObjectLayout: () => import("./layout/OpenApiObjectLayout").then(ii => ii.default)
    },
    affordance: {},
    hock: {
        AsyncRenderHock: AsyncRenderHock({loader: () => <div>Loading component</div>})
    }
};
