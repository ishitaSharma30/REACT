import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
        <h1 className="head" tabIndex="5"> React using JSX</h1>
);

const Title = () => (
    <h1 className="head" tabIndex="5"> React using JSX</h1>
);
//React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading"> React Functional Component</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

//Reddering Functional component
root.render(<HeadingComponent/>);