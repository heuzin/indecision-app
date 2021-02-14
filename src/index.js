import ReactDOM from 'react-dom';

const header = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
}
// JSX - JavaScript XML
 const template = (
    <div>
        <h1>{header.title}</h1>
        <p>{header.subTitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)