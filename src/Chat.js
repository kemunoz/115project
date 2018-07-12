import React from 'react';
import ReactDOM from 'react-dom';
import './Chat.css';

import Message from './Message.js';

class Chat extends React.Component {
    constructor(props) {
        super(props);

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
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "User",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "User";
        const { chats } = this.state;

        return (
	            <div className="chatroom">
		                <h3>Chilltime</h3>
		                <ul className="chats" ref="chats">
		                    {
		                        chats.map((chat) => 
		                            <Message chat={chat} user={username} />
		                        )
		                    }
		                </ul>
		                






		        <div className="chatbar">
		        
		        <div className="messagebox">
		        </div>

		        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
		                    <input type="text" ref="msg" />
		                    <input type="submit" value="Submit" />
		        </form>

		      </div>







	            </div>
	        );
    }
}

export default Chat;

