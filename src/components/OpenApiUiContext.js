// @flow

import React from "react";
import type {OpenApiUiTheme} from "../types/OpenApiUiTheme";
import type {OpenApiObject} from "../types/OpenApiSchema";
import OpenApiUiDefaultTheme from "./OpenApiUiDefaultTheme";
type Context = {theme: OpenApiUiTheme, schema?: OpenApiObject};
export default React.createContext<Context>({theme: OpenApiUiDefaultTheme});
