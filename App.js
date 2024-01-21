import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
//console.log(heading);

//root.render(heading);

/*
<div id = "parent">
    <div id = "child">
        <h1> I am h1 tag </h1>
    </div>
</div>

implement nested div using react
*/

const parent = React.createElement(
    "div", 
    {id: "parent"},
    [
        React.createElement(
            "div", {id: "child"},[
            React.createElement("h1", {}, "I'm h1 tag"),
            React.createElement("h2", {}, "I'm h2 tag")
        ]),
        React.createElement(
            "div", {id: "child2"},[
            React.createElement("h1", {}, "I'm h1 tag"),
            React.createElement("h2", {}, "I'm h2 tag")
        ])
    ]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);