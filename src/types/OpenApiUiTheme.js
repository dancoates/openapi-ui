// @flow
import type {ComponentType} from "react";
import type {OpenApiObject} from "./OpenApiSchema";

export type OpenApiUiTheme = {
    structure: OpenApiUiThemeStructure,
    layout: {[key: string]: string},
    affordance: {[key: string]: string}
};

export type OpenApiUiThemeStructure = {
    OpenApiObjectStructure: Promise<ComponentType<{schemaField: OpenApiObject}>>
};
