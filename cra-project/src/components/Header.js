import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import nav_logo from "../media/nav-log.png"
import {StateContext} from './helper/globalState'


class Header extends Component{
    static contextType = StateContext
    state = {
        user:{}
    }

    componentDidMount(){
        const [{user}] = this.context
        this.setState({
            user:user
        })

    }

    render(){
        const style = {
            fontWeight:' 900',
            borderRaduis:'20%',
            color:'white'
        }
        return(
            <>
            <header>
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2 hidden-xs">
                                <h1 className="sr-only">Destiny 2 clan</h1>
                                <img id="logo" src={nav_logo} alt="Destiny 2 logo"/>
                            </div>
                            <div className="col-sm-10 nav-links col-xs-12">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/members'>Members</Link></li>
                                    <li><Link to='/chat'>clan chat</Link></li>
                                    <li><Link to='/contact'>contact support</Link></li>
                                    <li style={style}>{this.state.user.username}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            </>
        )
    }
}
export default Header