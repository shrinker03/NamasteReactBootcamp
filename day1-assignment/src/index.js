//Rendered using Js
const header = document.createElement('h1')
header.textContent = 'Rendered Using H1'
header.className = 'Container'
const rootJs = document.getElementById('rootJs')
rootJs.append(header)

// Rendered Using React
const heading = React.createElement("h1", {className: 'usingReact'}, ["Rendered Using React", " ", "No more looking back"]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);