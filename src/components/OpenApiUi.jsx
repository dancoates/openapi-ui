// @flow
import React from 'react';
import SwaggerParser from 'swagger-parser';
import type {OpenApiObject} from '../types/OpenApiSchema';
import OpenApiObjectUi from './OpenApiObjectUi';

type Props = {
    api: string
};

type State = {
    schema?: ?OpenApiObject
};

export default class OpenApiUi extends React.Component<Props, State> {

    state: State = {};

    componentDidMount() {
        const {api} = this.props;
        this.fetchSchema(api);
    }

    componentDidUpdate(prevProps: Props) {
        if(prevProps.api !== this.props.api) {
            this.fetchSchema(this.props.api);
        }
    }

    fetchSchema(api: string) {
        SwaggerParser.validate(api)
            .then((schema: OpenApiObject) => {
                this.setState({schema});
            });
    }

    render(): * {
        if(this.state.schema) {
            return <OpenApiObjectUi schema={this.state.schema}/>;
        } else {
            return <div>loading...</div>;
        }
    }
}