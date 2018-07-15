import React, { Component } from 'react'
// import ReactPlayer from 'react-player'
import './App.css';
import Sidenav from './Sidenav'
import Main from './Main'
import Chat from './Chat'


class App extends Component {
  constructor(){
    super();
  }
  myFunction(){
    alert("This works");
  }
  render () {
    return (
      <div className="app">
        <div className="banner">
          <div className="flexbox">
            <div className="title">Qvinyl</div>
            <div className="settings">Settings</div>
          </div>
        </div>
        <div className="flexbox">
          <Sidenav />
          <Main />
          <Chat />
<i id="plus" onClick={()=> this.myFunction()}></i>
        </div>
      </div>
    );
  }
}

export default App;
