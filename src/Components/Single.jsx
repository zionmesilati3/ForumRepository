import React from 'react'
import { withRouter } from 'react-router-dom'

class Single extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comment:''
        }
    }

change=(e)=>{
    let value = e.target.value
    this.setState({
        comment:value
    })
}

moveBack=()=>{
        this.props.history.push({
            pathname:'/borad'
        })
    }


    render(){
        return(
            <div>
                <input type='button' value='go to borad' onClick={this.moveBack} /><br/>
                <div>
                    <h4>{this.props.location.state.title}</h4>
                    <h6>{this.props.location.state.creator}</h6>
                    <p>{this.props.location.state.content}</p>
                </div>
                <br/>
                <div>
                    {this.props.location.state.comments.map((c,index)=>
                        <p key={index}>
                            {c.user} - {c.comment}
                        </p>
                    )}
                    <br/><input value={this.state.comment} onChange={this.change} /><br/>
                    <input type='button' value='add comment' onClick={()=>this.props.addComment(this.props.location.state.creator,this.props.location.state.title,this.state.comment)} />
                </div>
            </div>
        )
    }
}
export default withRouter(Single);