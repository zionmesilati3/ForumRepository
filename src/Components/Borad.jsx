import React from 'react'
import { withRouter } from 'react-router-dom'

class Borad extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }

    change=(e)=>{
        let value=e.target.value
        this.setState({search:value})
    }

    menu=()=>{
        this.props.history.push({
            pathname:'/menu'
        })
    }

    viewSingle=(post)=>{
        this.props.history.push({
            pathname:'/view',
            state:post
        })
    }

    render(){
        return(
            <div>
                <h1>Borad</h1>
                <input onChange={this.change} value={this.state.search} />
                {this.props.borad.filter((p)=>p.title.includes(this.state.search)).map((post,index)=>
                    <div key={index} onClick={()=>this.viewSingle(post)}>
                        {post.title}
                    </div>
                )}
                <input type='button' onClick={this.menu} value='go to menu' />
            </div>
        )
    }
}
export default withRouter(Borad);