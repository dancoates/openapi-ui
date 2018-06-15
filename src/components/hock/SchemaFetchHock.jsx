// @flow
import SwaggerParser from "swagger-parser";
import React from "react";
import type {ComponentType} from "react";
import type {ElementConfig} from "react";
import type {OpenApiObject} from "../../types/OpenApiSchema";

type State = {
    schema?: ?OpenApiObject
};
// @TODO move loader into options
export default function schemaFetch<Props: {}, Component: ComponentType<Props>>(
    url: string
): (
    ComposedComponent: Component
) => ComponentType<$Diff<ElementConfig<Component>, {schema: OpenApiObject | void}>> {
    return (
        ComposedComponent: Component
    ): ComponentType<$Diff<ElementConfig<Component>, {schema: OpenApiObject | void}>> => {
        class Fetcher extends React.Component<Props, State> {
            state: State = {
                schema: null
            };

            cancelFetch: boolean = false;

            componentDidMount() {
                this.fetchSchema(url);
            }

            componentWillUnmount() {
                this.cancelFetch = true;
            }

            fetchSchema(api: string) {
                SwaggerParser.validate(api).then((schema: OpenApiObject) => {
                    if (!this.cancelFetch) this.setState({schema});
                });
            }

            render() {
                if (this.state.schema) {
                    return <ComposedComponent {...this.props} schema={this.state.schema} />;
                } else {
                    return <div>loading schema</div>;
                }
            }
        }

        return Fetcher;
    };
}
