import React from "react"
import ReactDOM from "react-dom/client";
import App from "./App";

//Rendered using Js
// const header = document.createElement('h1')
// header.textContent = 'Rendered Using JS'
// header.className = 'Container'
// const rootJs = document.getElementById('rootJs')
// rootJs.append(header)

// Rendered Using React
// const heading = React.createElement("h1", {className: 'usingReact'}, ["Rendered Using React", " ", "No more looking back"]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);