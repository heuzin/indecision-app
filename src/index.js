import ReactDOM from 'react-dom';

const header = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two', 'three']
}
// JSX - JavaScript XML
 const template = (
    <div>
        <h1>{header.title}</h1>
        {header.subTitle && <p>{header.subTitle}</p>}
        {header.options.length > 0 ? header.options.map((option) => {
           return <p>{option}</p>
        }) : <p>No options</p>}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)