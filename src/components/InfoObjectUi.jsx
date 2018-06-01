// @flow
import React from 'react';
import type {OpenApiObject} from '../types/OpenApiSchema';
import type {InfoObject} from '../types/OpenApiSchema';

type Props = {
    info: InfoObject,
    schema: OpenApiObject
};

export default class OpenApiUi extends React.Component<Props, void> {
    render(): * {
        const {schema} = this.props;

        return <div>
            Info
        </div>;
    }
}