import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const classes = [
    {
        guardian_id:'1',
        guardian:'hunter',
        class:'Arc Strider',
        value:'1'
    },
    {
        guardian_id:'1',
        guardian:'hunter',
        class:'Gunslinger',
        value:'2',
    },
    {
        guardian_id:'1',
        guardian:'hunter',
        class:'Night Stalker',
        value:'3'
    },
    {
        guardian_id:'2',
        guardian:'titan',
        class:'Sentinel',
        value:'4'
    },
    {
        guardian_id:'2',
        guardian:'titan',
        class:'Striker',
        value:'5'
    },
    {
        guardian_id:'2',
        guardian:'titan',
        class:'Sunbreaker',
        value:'6'
    },
    {
        guardian_id:'3',
        guardian:'warlock',
        class:'Dawn Blade',
        value:'7'
    },
    {
        guardian_id:'3',
        guardian:'warlock',
        class:'Void Walker',
        value:'8'
    },
    {
        guardian_id:'3',
        guardian:'warlock',
        class:'Storm Caller',
        value:'9'
    },
];

class Sign_Up extends React.Component{
    state = {
        classes:[],
        redirect:false
    }

    handleChange = (e) =>{

        let options = classes.filter((subclass) => {
            if (subclass.guardian_id === e.target.value) {
                return <option value={subclass.value}>{subclass.class}</option>
            }
        });
        this.setState({
            value: e.target.value,
            classes:options
        })
    }

     post_form = (eve) =>{
        eve.preventDefault();

        let first_name = document.getElementById('first-name').value;
        let last_name = document.getElementById('last-name').value;
        let user = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let confirm_password = document.getElementById('confirm-password').value;
        let email = document.getElementById('email').value;
        let age = document.getElementById('age').value;
        let guardian_select = document.getElementById("guardians");
        let g_value = guardian_select.options[guardian_select.selectedIndex].value;
        let class_select = document.getElementById("classes");
        let c_value = class_select.options[class_select.selectedIndex].value;

        const data = {
         "email":email,
         "username":user,
         "password":password,
         "fname": first_name,
         "lname":last_name,
         "age":age,
         "guardian_id":g_value,
         "class_id":c_value,
         "rank_id":'',
         "created_on":''
        }


        if(email === '' ||  user === '' || password === '' || first_name === '' || last_name === '' || age === '' || g_value === 'Guardian' || c_value === 'Class' ){
            window.alert('Missing Data in one or more input field')
        }
        else if (password.length < 8 || password.length > 20 ){
            window.alert(`Password must be at least 8 characters and no more than 20 characters `)
        }
        else if (!password.match(/[A-Z]/g)){
            window.alert('Password must contain atleast one uppercase letter')
        }
        else if (!password.match(/[a-z]/g)){
            window.alert('Password must contain atleast one lowercase letter')
        }
        else if (!password.match(/[0-9]/g)){
            window.alert('Password must contain atleast one number')
        }
        else if (!password.match(/[!@#$%^&*_:?|]/g)){
            window.alert('Password must contain at least one special character')
        }
        else if (password !== confirm_password){
            window.alert('Password does not match confirm password')
        }
        else{
            window.alert('Thank you for joining us!')
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/accounts/create`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
            })
            .then(repsonse => repsonse.json())
            .then(data)
            this.setState(() => ({
                redirect: true
            }))

        }
    }

    render(){
        const options = this.state.classes.map(( subclass, idx) => <option key={idx} value={subclass.value}>{subclass.class}</option>)

        if (this.state.redirect === true) {
            return <Redirect to='/login'/>
       }
        return (
            <>
            <div className="sign-up-wrapper">
                <form onSubmit={this.post_form} action="" id='sign-up'>
                    <div className="signup-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <p className="signup-ptag">Enter email:</p>
                                    <input type="text" name="email" id="email" placeholder='destiny@nuya.com' />

                                    <p className="signup-ptag">Enter First Name:</p>
                                    <input type="text" name="fname" id="first-name" />

                                    <p className="signup-ptag">Enter Last Name:</p>
                                    <input type="text" name="lname" id="last-name" />

                                    <p className="signup-ptag">Enter Age:</p>
                                    <input type="number" name="lname" id="age" />

                                    <p className="signup-ptag">Create user Name:</p>
                                    <input maxLength='24' type="text" name="User" id="username" placeholder="User"/>

                                    <p className="signup-ptag">What guardian do you use?</p>
                                    <select id='guardians' onChange={this.handleChange}>
                                        <option defaultValue>Guardian</option>
                                        <option value='1' >Hunter</option>
                                        <option value='2' >Titan</option>
                                        <option value='3' >Warlock</option>
                                    </select>

                                    <p className="signup-ptag">What class do you use?:</p>
                                    <select id='classes'>
                                    <option defaultValue>Class</option>
                                    {options}
                                    </select>

                                    <p className="signup-ptag">Create Password:</p>
                                    <input maxLength='20' type="password" name="password" id="password" placeholder="Password"
                                    />

                                    <p className="signup-ptag">Confirm Password:</p>
                                    <input maxLength='20' type="password" name="confirm-pass" id="confirm-password"
                                    placeholder='Confirm Password'
                                    />

                                    <br/>
                                    <button id="signup-button" >Create Account</button>
                                </div>
                                <div className="col-sm-8 col-xs-12">
                                    <ul id="signup-list">
                                            <li id="limit">Password must have at least 8 characters but no more than 20</li>
                                            <li id="SC">Must contain at least one special charcter(!, @, #, $, %, ^, &, *,  _ , :, ?, |).</li>
                                            <li id="upper">Must contain at least one uppercase letter</li>
                                            <li id="lower">Must contain at least one lowercase letter</li>
                                            <li id="number">Must contain at least one number.</li>
                                            <li id="space"> Can't contain spaces.</li>
                                    </ul>
                                    <p className="signup-ptag">Already have an account? <Link to='/login'>Log in</Link></p>
                                    <Link className='btn btn-primary' to='/'>Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Sign_Up;
