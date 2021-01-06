import React from 'react'
import { withRouter } from 'react-router-dom'

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            content:''
        }
    }

    change=(e)=>{
        let id=e.target.id
        let value=e.target.value
        switch(id){
            case '0': this.setState({title:value});break;
            case '1': this.setState({content:value});break;
            default:break;
        }
    }


    render(){
        const inputs=['Title','Content']
        return(
            <div>
                {inputs.map((i,index)=>
                    <label key={index}>
{i}: <input id={index} onChange={this.change} value={index===0?this.state.title:this.state.content} />
                    </label>
                )}<br/>
                <input type='button' value='add post' onClick={()=>this.props.addPost(this.state)} />
            </div>
        )
    }
}
export default withRouter(Post);