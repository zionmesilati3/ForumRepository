import React from 'react'
import { withRouter } from 'react-router-dom'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:'',
            confirm:''
        }
    }

    change=(e)=>{
        let id=e.target.id
        let value=e.target.value
        console.log(id)
        switch(id){
            case '0': this.setState({userName:value});break;
            case '1': this.setState({password:value});break;
            case '2': this.setState({confirm:value});break;
            default:break;
        }
    }

    addUser=(user)=>{
        if(this.state.userName!==''&&this.state.password===this.state.confirm){
            console.log('create user')
            this.props.addUser(user)
        }
        else{
            console.log('fields arent filled as suppose to be')
        }
    }

    render(){
        const inputs=['User Name','Password','Confirm']
        return(
            <div>
                <div>
                    {inputs.map((i,index)=>
                            <label key={index}>{i}: <input id={index} onChange={this.change} value={index===0?this.state.userName:(index===1?this.state.password:this.state.confirm)} /></label>
                    )}
                </div>
                <input type='button' onClick={()=>this.addUser({userName:this.state.userName,password:this.state.password})} value='Register' />
            </div>
        )
    }
}
export default withRouter(Register);