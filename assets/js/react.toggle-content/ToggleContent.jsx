import React, { useState } from 'react';

export default function ToggleContent(props) {
    const [shown, setShown] = useState(props.initiallyShown | false);

    const toggle = () => {
        setShown(!shown);
    };

    const buttonClass = "toggle-button " + (
        shown ? "on" : "off"
    );

    return (
        <div>
            <button className={buttonClass} onClick={toggle}>Toggle</button>
            { shown ? <Content/> : null}
        </div>
    );
}

function Content() {
    return (
        <div className="toggle-content">
            <p>Hello</p>
            <p>World</p>
        </div>
    );
}
