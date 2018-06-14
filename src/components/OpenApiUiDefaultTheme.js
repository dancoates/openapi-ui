// @flow
export default {
    structure: {
        OpenApiObjectStructure: () =>
            import("./structure/OpenApiObjectStructure").then(ii => ii.default)
    },
    layout: {},
    affordance: {}
};
