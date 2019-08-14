import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./src/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {pizzaReducer} from "./src/reducers/pizzaReducer";

export const store = createStore(pizzaReducer, []);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
