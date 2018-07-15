import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Chat.css';
import firebase from 'firebase';

import Message from './Message.js';

class Chat extends React.Component {
    constructor(props, context) {
        super(props,context);

        this.state = {

            chats: [{
     			//nothing so far. updates each time.
            }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {   	
   	//this creates an array with all the messages in the -LHQiZWhNuteNS8kms8A room
    var testRef = firebase.database().ref('/rooms/-LHQiZWhNuteNS8kms8A/chats/');
    console.log('Testref: '+testRef);
  	   testRef.on('value', (snapshot)=>{
       let chats = snapshot.val();
       console.log(chats);
       var keys = Object.keys(chats);
       console.log(keys);
       let newState = [];
       this.setState({
       		chats: newState
       });
       for(var i =0; i<keys.length; i++){
       	var k = keys[i];
       	var message = chats[k].message;
       	var user = chats[k].user;
       	console.log(message);
       	this.setState({
       		chats: this.state.chats.concat([{
       			username:"",
       			content: <p>{message}</p>,
       		}])
       	}, ()=>{
       		ReactDOM.findDOMNode(this.refs.msg).value = "";
       	});
       }
   });
  }
    componentDidUpdate() {
        this.scrollToBot();
    }
    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }








    submitMessage(e) {
        e.preventDefault();
        var userMessage = document.getElementById("currentMessage").value;
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

    handleChange(e){
    	this.setState = {
    		[e.target.name]: e.target.value
    	}
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

