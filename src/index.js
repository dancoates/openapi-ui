// @flow
import React from 'react';
import ReactDom from 'react-dom';

function renderApp() {
    const OpenApiUi = require('./components/OpenApiUi').default;
    ReactDom.render(
        <OpenApiUi api="https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore-expanded.yaml"/>,
        document.getElementById('app')
    );
}

renderApp();
// $FlowFixMe flow doesn't know about hot property on module
module.hot.accept(renderApp);