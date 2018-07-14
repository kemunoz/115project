//import React from 'react';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Chat.css';
import firebase from 'firebase';

import Message from './Message.js';

class Chat extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

            chats: [{
     			//nothing so far. updates each time.
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }


    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }








    submitMessage(e) {
        // var userID = firebase.auth().currentUser.uid;
     // var userRoomKey = firebase.database().ref('users/' + userID + '/roomKeys');


     

        e.preventDefault();
        var userMessage = document.getElementById("currentMessage").value;
        this.setState({


            chats: this.state.chats.concat([{


                
                username: "User",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,    
                
 
               
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";


        });



        var userID = firebase.auth().currentUser.uid;
        var userRoomKey = firebase.database().ref('users/' + userID + '/roomKeys');
        userRoomKey.once('value').then(function(snapshot) {
            console.log("userID: " + userID);
            var roomKey = snapshot.val().currentRoom;
            console.log("RoomKey: " + roomKey)
            var chatbase = firebase.database().ref('rooms/' + roomKey + '/chats');
            chatbase.push({
                message: userMessage,
                user: userID,
            })
        });
     
     
     
    }







    render() {

        var chat_visibility = "hide";

        if (this.props.menuVisibility) {
            chat_visibility = "show";
        }


        const username = "User";
        const { chats } = this.state;

        return (
 
	            <div id="chatroom" onMouseDown={this.props.handleMouseDown}
       className={chat_visibility}>
		                <h3>Chatroom</h3>
		                <ul className="chats" ref="chats">
		                    {
		                        chats.map((chat) => 
		                            <Message chat={chat} user={username} />
		                        )
		                    }
		                </ul>
		                
        





		      
		        
		        <div className="messagebox">
		        </div>

		        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
		                    <input id="currentMessage" type="text" ref="msg" />
		                    <input type="submit" value="Submit" />
		        </form>

		      







	            </div>
	        );
    }
}

export default Chat;

