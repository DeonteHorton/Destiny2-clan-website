import React, {useState} from 'react'
import { Link,Redirect} from 'react-router-dom'
import { StateContext } from './helper/globalState'

class Login extends React.Component{
    static contextType = StateContext
    constructor(){
        super()
        this.state = {

           redirect:false
       }
    }
    componentDidMount(){
        const [{user}] = this.context;
    }

    check_info = (eve) =>{
        eve.preventDefault();

        let user_name = document.getElementById('login-username').value;
        let password = document.getElementById('login-password').value;

        const [{user},dispatch] = this.context;

        fetch(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_BACKEND_PORT}/api/accounts/search_account/${user_name}&${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0 || data === undefined) {
                window.alert('User Name or Password is incorrect')
            } else{
                user.loggedIn = true;
                dispatch({
                    type:'changeUser',
                    newUser:data[0]
                })
                this.setState(() => ({
                    redirect: true
                }))

            }
        })

    }
    render(){
        if (this.state.redirect === true) {
             return <Redirect to='/members'/>
        }

        return (
        <>
            <div className="login-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <form onSubmit={this.check_info} action="" method="get">
                                <div className="login-form">
                                    <p className="login-ptag">User Name:</p>
                                    <input type="text" name="User" id="login-username" placeholder="User"/>
                                    <p className="login-ptag">Password:</p>
                                    <input type="password" name="password" id="login-password" placeholder="Password" />
                                    <br/>
                                    <input id="login-button" type="submit" value="Login"/>

                                    <p className="login-ptag">Don't have an account? <Link to='/signup'>Create Account</Link></p>
                                    <Link className='btn btn-primary' to='/'>Back to home</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Login;
