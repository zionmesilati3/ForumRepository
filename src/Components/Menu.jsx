import React from 'react'
import { withRouter } from 'react-router-dom'

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

post=()=>{
    this.props.history.push({
        pathname:'/post'
    })
}

borad=()=>{
    this.props.history.push({
        pathname:'/borad'
    })
}

    render(){
        return(
            <div>
                <div className="menu">
                    <h2>Create Post</h2>
                    <input type='button' value='Move to Post creation' onClick={this.post} />
                </div>
                <br/><br/>
                <div>
                    <h2>Post Borad</h2>
                    <input type='button' value='Move to Post Borad' onClick={this.borad} />
                </div>
            </div>
        )
    }
}
export default withRouter(Menu);