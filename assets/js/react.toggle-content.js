import React from 'react';
import ReactDOM from 'react-dom';
import ToggleContent from "./react.toggle-content/ToggleContent";

window.bindReactToggleContent = function (element, options) {
    if (!(element instanceof Element)) {
        element = document.querySelector(element);
    }
    const initiallyShown = element.getAttribute('initially-shown') | false;
    // You can pass another initial props via "options" arg.
    ReactDOM.render(<ToggleContent initiallyShown={initiallyShown}/>, element);
};
