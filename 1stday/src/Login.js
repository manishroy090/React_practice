import React from 'react';
export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            userName:" ",
            password:" "
        }
    }
    handleusername=(event)=>{
        var value=event.target.value;
        this.setState({userName:value})
    
    }
    handleemail=(event)=>{
        var value=event.target.value;
        this.setState({password:value})

    }
    render(){
        return(
            <div>
                <label>
                    username:
                <input type="text" placeholder='username' onChange={this.handleusername}/>
                {this.state.userName}
                </label>
            
            <label>
                email:
            <input type="text" placeholder='email' onChange={this.handleemail}/>
                  {this.state.password}
            </label>
            <button>
                LOgin
            </button>

            </div>
            
        )
    }
}