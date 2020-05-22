import React, {Component } from 'react'
import Header from './Header'
import io from "socket.io-client";
import { StateContext } from './helper/globalState'

class Chat extends Component{
    _isMouted = false;
    static contextType = StateContext;
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],
            disabled:true,
            data:[]
        };

    this.socket = io('http://localhost:8080');

    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });
    
    const addMessage = data => {       
        this.setState({
            username:{},
            messages: [...this.state.messages, data]
        });
    };

    this.sendMessage = ev => {
        // ev.preventDefault();
        const [{user}] = this.context
        this.socket.emit('SEND_MESSAGE', {
            author: user.username,
            message: this.state.message
        });

        this.setState({message: ''});
        
        const data = {
            "user_name":user.username,
            "message":document.getElementById('chat-input').value,
             "timestamp":''
        }

        fetch('http://localhost:3006/api/chat/create',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        })
        
        .then(repsonse => repsonse.json())
        document.getElementById('chat-input').value = '';
    }
    
}
    Messages = (prop) =>{
        const Name = {
            fontSize:'24px',
            color:'#aaa'
        }
        const Message = {
            fontSize:'16px',
            paddingBottom:'10px',
            color:'white'
        }
        const {id,user_name,message} = prop.data;
        return(
            <>
            <p style={Name}>{user_name}</p>
            <p style={Message}>{message}</p>
            </>
        )

    }

    componentDidMount(){
        this._isMouted = true;
        const [{user}] = this.context
        if (this._isMouted) {
            if (user.username !== 'Guest') {
                this.setState({
                    disabled:false
                })
            }
        }
        fetch('http://localhost:3006/api/chat')
        .then(response => response.json())
        .then(data =>{
            this.setState({
                data: data
            })
        })
    }
    componentWillUnmount(){
        return this._isMouted = false;
    }
    

    render(){
    const handleKeyPress = (ev) => {
        if(ev.key === 'Enter'){
            this.sendMessage()
        }
    }
    
    const Name = {
        fontSize:'24px',
        color:'#aaa'
    }
    const Message = {
        fontSize:'16px',
        paddingBottom:'10px',
        color:'white'
    }

    const MemberData =  this.state.data.map(message => <this.Messages key={message.id} data={message}/>)
    const [{user}] = this.context

        return (
            <>
            <Header/>
            <div id="members">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Room 1 &dArr;</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div id="messaging-wrap">
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-sm-12"> 
                        { user.username === 'Guest' ?  <h1 style={Name}>You must Sign in First!!</h1> :  MemberData}

                            {user.username === 'Guest' ?  null : this.state.messages.map((message,idx) => {
                                return (
                                    <>
                                    <p style={Name}>{message.author}</p>
                                    <p style={Message}>{message.message}</p>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <input 
                            disabled={this.state.disabled} 
                            maxLength="500" 
                            id="chat-input" 
                            type="text" 
                            placeholder="Message" 
                            onChange={ev => this.setState({message: ev.target.value})} 
                            onKeyPress={handleKeyPress}
                            />

                            <input id="chat-button" type="submit" value="Send" onClick={this.sendMessage}/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Chat