import ReactDOM from 'react-dom';

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two', 'three']
}
// JSX - JavaScript XML

const appRoot = document.getElementById('app')

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            {app.options.length > 0 ? app.options.map((option) => {
               return <p>{option}</p>
            }) : <p>No options</p>}
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();