import React from 'react'
import ReactDOM from 'react-dom';
import Action from './components/Action'
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header'

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
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
    
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch(e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
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

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map((option, i) =>   
                <Option    
                    key={i} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption} 
                />
            )
        }
    </div>
)

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))