import ReactDOM from 'react-dom';

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two', 'three',' four']
}

const onFormSubmit = (e) => {
    e.preventDefault()
    
    const option = e.target.elements.option.value
    
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderIndecisionApp()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderIndecisionApp()
}

const appRoot = document.getElementById('app')

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            {app.options.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}
        
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option, i) => <li key={option[i]}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();