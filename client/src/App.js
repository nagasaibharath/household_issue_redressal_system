import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './index.css';
import TopBar from './Components/NavBar/TopBar';
import Home from './Components/Home/Home';
import FormLogin from './Components/Login/FormLogin';
import FormRegister from './Components/Register/FormRegister';
import Profile from './Components/profiled/ProfilePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "Profile",
      signinStatus: false,
    };
  }

  setView = (viewName) => {
    this.setState({ currentView: viewName });
  }

  render() {
    let view;
    let currentView = this.state.currentView;
    switch(currentView) {
      case "Register" : view = <FormRegister />;break;
      case "Login"    : view = <FormLogin setView={this.setView} />;break;
      case "Home"     : view = <Home setView={this.setView} />;break;
      case "Profile"  : view = <Profile />;break;
      default         : alert("No Page To Load (case:default:App.js)");
    }

    return (
      <div className="App">
        <TopBar setView={this.setView} signinStatus={this.state.signinStatus} />
        {view}
      </div>
    );
  }
}

export default App;
