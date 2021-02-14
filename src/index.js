import ReactDOM from 'react-dom';

// JSX - JavaScript XML
 const template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)