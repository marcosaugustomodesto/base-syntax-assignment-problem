import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {lista: [
                    {userName: 'MARCOS_MODESTO', telefone:'(11)99771-3333'},
                    {userName: 'AUGUSTO_MODESTO', telefone:'(11)99771-3333'}
                  ]}
  newList =  {lista: [
                    {userName: 'MARCOS_MODESTO_2', telefone:'(11)99771-3333'},
                    {userName: 'AUGUSTO_MODESTO_2', telefone:'(11)99771-3333'}
                  ]};
              

  handleInput = (event) => {
    this.newList.lista[0].userName = event.target.value;
    this.newList.lista[1].userName = event.target.value;
    this.setState({...this.newList});
  }                
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput changed={this.handleInput} currentName={this.newList.lista[0].userName}/>
        <UserOutput userName={this.state.lista[0].userName} telefone={this.state.lista[0].telefone}></UserOutput>
        <UserOutput userName={this.state.lista[1].userName} telefone={this.state.lista[1].telefone}></UserOutput>
      </div>
    );
  }
}

export default App;
