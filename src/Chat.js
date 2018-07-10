import React, { Component } from 'react'
// import ReactPlayer from 'react-player'
import './Chat.css';
class Chat extends Component {
	  constructor(props, context) {
    super(props, context);

  };
  render () {

    var chat_visibility = "hide";

    if (this.props.menuVisibility) {
      chat_visibility = "show";
    }

    return (
      <div id="chatbar"
       onMouseDown={this.props.handleMouseDown}
       className={chat_visibility}>
        <div className="chattitle">Chat Room</div>
        <div className="messagebox">
        </div>
      </div>
    );
  }
}

export default Chat;

