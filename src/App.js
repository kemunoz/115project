import React, { Component } from 'react'
// import ReactPlayer from 'react-player'
import './App.css';
import Sidenav from './Sidenav'
import Main from './Main'
import Chat from './Chat'
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDG-IPOENqC8cDOdsm683gz-MGQUYroero",
    authDomain: "qvinyl-d222d.firebaseapp.com",
    databaseURL: "https://qvinyl-d222d.firebaseio.com",
    projectId: "qvinyl-d222d",
    storageBucket: "qvinyl-d222d.appspot.com",
    messagingSenderId: "912092441416"
};
firebase.initializeApp(config);



// function logout(){

              
// }



// const preObject = document.getElementById('object');
//
// const dbRefObject = firebase.database().ref().child('URLS');
//
// dbRefObject.on('value', snap => console.log(snap.val()));

class App extends Component {
  render () {
    return (








<div className="app">
        <div className="banner">
          <div className="flexbox">
            <div className="title">Qvinyl</div>
            <pre id="object"></pre>


            
            
            
            <a href="login.html" className="button"><span class="glyphicon glyphicon-log-in"></span> Logout</a>
            
          </div>
        </div>
        <div className="flexbox">
          <Sidenav />
          <Main />
          <Chat />
        </div>
</div>









      
    );
  }
}

export default App;

//<button onClick="logout" className="settings" id="signOut">Logout</button>


