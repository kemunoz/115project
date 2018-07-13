import React from 'react';
import ReactDOM from 'react-dom';
import './Chat.css';

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
		                    <input type="text" ref="msg" />
		                    <input type="submit" value="Submit" />
		        </form>

		      







	            </div>
	        );
    }
}

export default Chat;

