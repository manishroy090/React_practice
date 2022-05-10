
import React, { useState } from 'react';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            userName:"",
            email:" ",
            passWord:" "

        }
    }
    handleusername=(event)=>{
      var value=event.target.value;
     this.setState({userName:value})
     console.log(this.state.userName)
    }
    handleEmail=(event)=>{
        var value=event.target.value;
        this.setState({email:value})
        console.log(this.state.email)

    }
    handleLogin=(event)=>{
        var value=event.target.value;
        this.setState({passWord:value})
         console.log(this.state.passWord)
    }
    render(){
       
        return(
            <div>
                <label>
                    username:
                <input type="text" placeholder="username" onChange={this.handleusername}/>
                </label>
                <label>
                    Email:
                    <input type="text" placeholder="Email" onChange={this.handleEmail}/>
                </label>
                <label>
                    Password:
                    <input type="text" placeholder="password" onChange={this.handleLogin}/>
                </label>
                <button>
                    LOGIN
                </button>
        
            {this.state.userName}
            {this.state.email}
            {this.state.passWord}
            </div>
        )
    }
   
}