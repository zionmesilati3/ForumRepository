import React from 'react'
import { withRouter } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:'',
        }
    }

    change=(e)=>{
        let id=e.target.id
        let value=e.target.value
        switch(id){
            case '0': this.setState({userName:value});break;
            case '1': this.setState({password:value});break;
            default:break;
        }
    }

    registration=()=>{
        this.props.history.push({
            pathname:'/registration'
        })
    }

    render(){
        const inputs=['User Name','Password']
        return(
            <div>
                <div>
                    {inputs.map((i,index)=>
                            <label key={index}>{i}: <input id={index} onChange={this.change} value={index===0?this.state.userName:this.state.password} /></label>
                    )}
                </div>
                <input type='button' onClick={()=>this.props.checkUser(this.state)} value='Login' />
                <input type='button' onClick={this.registration} value='Register' />
            </div>
        )
    }
}
export default withRouter(Login);