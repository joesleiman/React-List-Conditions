import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        userInput: ''
    }

    inputChangeHandler = (event) => {
        this.setState({
            userInput: event.target.value
        });
    }
    deleteCharacter = (index) => {
        const arrayCharacters = this.state.userInput.split('');
        arrayCharacters.splice(index, 1);
        const updatedCharacters = arrayCharacters.join('');
        this.setState({
            userInput: updatedCharacters
        })
    }

    render() {
        const listChars = this.state.userInput.split('').map((c, index) => {
            return <CharComponent character={c} delete={this.deleteCharacter.bind(this, index)} key={index}/>
        });
        return (
            <div className="App">
                <input type="text"
                       onChange={this.inputChangeHandler}
                       value={this.state.userInput}/>
                <ValidationComponent inputLength={this.state.userInput.length}/>
                {listChars}
            </div>
        );
    }
}

export default App;
