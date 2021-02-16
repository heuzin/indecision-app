import React from 'react'
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Puut your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render () {
        return (
            <div>
                <button>What Should I Do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>This is the options component</p>
            </div>
        ) 
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>This is the add options component</p>
            </div>
        ) 
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))