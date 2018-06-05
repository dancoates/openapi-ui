// @flow
import React from 'react';
import ReactDom from 'react-dom';

function renderApp() {
    const OpenApiUi = require('./components/OpenApiUi').default;
    const SchemaFetchHock = require('./components/hock/SchemaFetchHock').default;
    const url = "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore-expanded.yaml";
    const Loader = () => <div>loading</div>;
    const OpenApiUiWithSchema = SchemaFetchHock(url)(OpenApiUi, Loader);

    const app = document.getElementById('app');
    if(!app) return;

    ReactDom.render(
        <OpenApiUiWithSchema/>,
        app
    );
}

renderApp();
// $FlowFixMe flow doesn't know about hot property on module
module.hot.accept(renderApp);