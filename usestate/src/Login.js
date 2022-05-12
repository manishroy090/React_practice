import React  from "react";
export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:' ',
            password:' '

        }
       
    }
    handleusername=(event)=>{
        
           var value=event.target.value;
           var name=event.target.name;
           this.setState({[name]:value})
    }
    render(){
        return (
            <div>
                <form>
                <label>
                Name:
            <input type="text" placeholder="username" onChange={this.handleusername} name="username"/>
            {this.state.username}
            </label>
            <label>
                Email:
                <input type="text" placeholder="email" onChange={this.handleusername} name="password"/>
                {this.state.password}
            </label>
                </form>
            


            </div>
            
        )
    }
}