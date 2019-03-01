import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './index.css';
import TopBar from './Components/NavBar/TopBar';
import Home from './Components/Home/Home';
import Feed from './Components/Feed/Feed';
import FormLogin from './Components/Login/FormLogin';
import FormRegister from './Components/Register/FormRegister';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "Home",
      signinStatus: false,
      email: ""
    };
  }

  setView = (viewName) => this.setState({ currentView: viewName });

  setSigninStatus = (boolValue,userEmail) => this.setState({ signinStatus: boolValue, email: userEmail });

  render() {
    let view;
    let currentView = this.state.currentView;
    switch(currentView) {
      case "Register" : view = <FormRegister />;break;
      case "Login"    : view = <FormLogin setView={this.setView} setSigninStatus={this.setSigninStatus} />;break;
      case "Home"     : view = <Home setView={this.setView} setSigninStatus={this.setSigninStatus} />;break;
      case "Feed"     : view = <Feed setView={this.setView} email={this.state.email} />;break;
      default         : alert("No Page To Load (case:default:App.js)");
    }

    return (
      <div className="App">
        <TopBar setView={this.setView} signinStatus={this.state.signinStatus} setSigninStatus={this.setSigninStatus} />
        {view}
      </div>
    );
  }
}

export default App;
