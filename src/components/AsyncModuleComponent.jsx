// @flow
import React from "react";
import type { ComponentType } from "react";

export default function(componentPromiseMap: { [key: string]: Promise<ComponentType<*>> }): * {
    return (ComposedComponent: ComponentType<*>) => {};
}
