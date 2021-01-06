import React from 'react'
import { Switch,Route,withRouter,Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Menu from './Menu'
import Borad from './Borad'
import Post from './Post'
import Single from './Single'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            borad:[],
            loggedUser:''
        }
    }

    checkUser=(user)=>{
        let us=this.state.users.find((u)=>u.userName===user.userName && u.password===user.password)
        if(us){
            this.setState({loggedUser:user})
            this.props.history.push({
                pathname:'/menu',
                state:us
            })
        }
    }

    addUser=(user)=>{
        this.setState((prev)=>({
            users:[...prev.users,user]
        }))
        this.props.history.push({
            pathname:'/'
        })
    }


    addPost=(post)=>{
        let obj={
            title:post.title,
            content:post.content,
            comments:[],
            creator:this.state.loggedUser.userName
        }
        this.setState((prev)=>({
            borad:[...prev.borad,obj]
        }))
        this.props.history.push({
            pathname:'/menu'
        })
    }

    addComment=(creator,title,comment)=>{
        let arr=this.state.borad
        let index=this.state.borad.findIndex(p=>p.creator===creator&&p.title===title)
        let post=arr.splice(index,1)
        post[0].comments.push({user:this.state.loggedUser.userName,comment:comment})
        this.setState({
            borad:[...arr,...post]
        })
    }

    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
                    <Switch>
                        <Route exact path='/' render={()=><Login checkUser={this.checkUser} />}/>
                        <Route path='/registration' render={()=><Register addUser={this.addUser} />} />
                        <Route path='/menu' render={()=><Menu />} />
                        <Route path='/post' render={()=><Post addPost={this.addPost} />} />
                        <Route path='/borad' render={()=><Borad borad={this.state.borad} />} />
                        <Route path='/view' render={()=><Single addComment={this.addComment} />} />
                    </Switch>
            </div>
        )
    }
}
export default withRouter(Main);