// @flow
import SwaggerParser from "swagger-parser";
import React from "react";
import type {ComponentType} from "react";
import type {OpenApiObject} from "../../types/OpenApiSchema";

type State = {
    schema?: ?OpenApiObject
};

export default function schemaFetch<Props: {}>(
    url: string
): (
    RenderComponent: ComponentType<Props & {schema: OpenApiObject}>,
    LoaderComponent: ComponentType<Props>
) => ComponentType<Props> {
    return (
        RenderComponent: ComponentType<Props & {schema: OpenApiObject}>,
        LoaderComponent: ComponentType<Props>
    ): ComponentType<Props> => {
        class Fetcher extends React.Component<Props, State> {
            state: State = {
                schema: null
            };

            componentDidMount() {
                this.fetchSchema(url);
            }

            fetchSchema(api: string) {
                SwaggerParser.validate(api).then((schema: OpenApiObject) => {
                    this.setState({schema});
                });
            }

            render() {
                if (this.state.schema) {
                    return <RenderComponent {...this.props} schema={this.state.schema} />;
                } else {
                    return <LoaderComponent {...this.props} />;
                }
            }
        }

        return Fetcher;
    };
}
