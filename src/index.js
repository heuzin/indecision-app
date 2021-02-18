import React from 'react'
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }))
    }
    handleDeleteOption(optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1)  {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

const Action = (props) => (
    <div>
        <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What Should I Do?
        </button>
    </div>
)


const Options = (props) => (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {
        props.options.map((option, i) => <Option handleDeleteOption={props.handleDeleteOption} key={i} optionText={option} />)
    }
    </div>
)

const Option = (props) => (
    <div>
        <p>Option: {props.optionText}</p>
        <button onClick={(() => {
            props.handleDeleteOption(props.optionText)
        })}>Delete</button>
    </div>
)

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        
        this.setState(() => ({
            error
        }))
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        ) 
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))