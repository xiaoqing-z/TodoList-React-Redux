import ReactDOM from 'react-dom';
import React from "react";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import { createStore, } from "redux";
import reducer from "./store/reducer";


const store = createStore(reducer);

ReactDOM.render(

    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('root'));




