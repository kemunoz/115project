import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Queue from './Queue'
import Info from './Info'
import Sidenav from './Sidenav'
import Chat from './Chat'
import './Main.css';
class Main extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    menuVisible: false,
    chatVisible: false
  };
 
  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);

 }

 handleMouseDown(e) {
  this.toggleMenu();

  console.log("toggle side Nav");
  e.stopPropagation();
}
 
 toggleMenu() {
  this.setState({
      menuVisible: !this.state.menuVisible
  })
}

  toggleChat() {
  this.setState({
      chatVisible: !this.state.chatVisible
  })
  }



  render () {
    return (
      <div className="main">
        <div className="mainTitle">Audio Room</div>

      {/*Toggle the Rooms and Chat tabs*/}
          <button className="navButton" onClick={this.toggleMenu.bind(this)}>
            Room Selection
          </button>
          <Sidenav menuVisibility={this.state.menuVisible}/> 
          <button className="button chatButton" onClick={this.toggleChat.bind(this)}>
            Chat Room
          </button>
           <Chat menuVisibility={this.state.chatVisible}/>

           
        <div className="trackplayinginfo"> 
        <div className="flexbox2">  
            <div className="videoplayer">
              <ReactPlayer url='https://www.youtube.com/watch?v=fYn5-tW6y7o&start_radio=1&list=RDfYn5-tW6y7o' playing />
            </div>
            <Info />
          </div>
        </div>
        <div className="inputcontainer">
          <form>
            <label className="linkT">
              Music Link:
            </label>
            <input className="inputL" type="text" name="name" />
            <input className="inputB" type="submit" value="Submit" />
          </form>
        </div>
          <Queue />
      </div>
    );
  }
}

export default Main;
