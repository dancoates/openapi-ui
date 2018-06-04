// @flow
import SwaggerParser from 'swagger-parser';
import React from 'react';
import type {ComponentType} from 'react';

type State = {
    schema?: ?OpenApiObject
};

export default function(url: string): * {

    return <R, T>(RenderComponent: R, LoaderComponent: T): * => {

        class Fetcher extends React.Component {
            state: State = {
                schema: null
            };

            componentDidMount() {
                this.fetchSchema(url);
            }

            fetchSchema(api: string) {
                SwaggerParser.validate(api)
                    .then((schema: OpenApiObject) => {
                        this.setState({schema});
                    });
            }

            render(): * {
                if(this.state.schema) {
                    return <RenderComponent {...this.props}/>;

                } else {
                    return <LoaderComponent {...this.props}/>;
                }
            }
        }


        return Fetcher;
    };

}