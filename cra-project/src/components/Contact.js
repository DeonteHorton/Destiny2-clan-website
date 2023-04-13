import React,{Component} from 'react'
import Header from './Header'


 class Contact extends Component{

    post_form = (eve) =>{
        eve.preventDefault();
        let name = document.getElementById('contact-name').value;
        let email = document.getElementById('contact-email').value;
        let comment = document.getElementById('contact-comment').value;


        const data = {
        "name":name,
        "email":email,
         "comment":comment
        }


        if (name === '' || email === '' || comment === '') {
            window.alert('Missing Data in one or more input field')
        } else {
            fetch(`${process.env.REACT_APP_URL}/:${process.env.REACT_APP_BACKEND_PORT}/api/contacts/create`,{
                method:'POST',
                headers: {
                 'Content-Type': 'application/json',
               },
                body:JSON.stringify(data)
            })
            .then(repsonse => repsonse.json())
            .then(data)
            window.alert('Thank You for your support')
             document.getElementById('contact-name').value = ''
             document.getElementById('contact-email').value = ''
             document.getElementById('contact-comment').value = ''
        }
    }
    render(){
        return (
            <>
            <Header/>
            <div className="contact-wrap">
            <div className="container">
                <div className="row">
                    <h1>Contact Us</h1>
                    <div className="col-sm-6 col-xs-12">
                            <form onSubmit={this.post_form} action="" id='contact-form'>
                                <input type="text" className="space" id='contact-name' placeholder="Name*"/>
                                <br/>
                                <input type="text" className="space" id='contact-email' placeholder="Email*"/>
                                <br/>
                                <textarea name="comment" className="space" cols="20" rows="5" id='contact-comment' placeholder="Questions/Concerns...."/>
                                <br/>
                                <input className='btn btn-primary' type="submit" value="Submit"/>
                            </form>
                            </div>
                        <div className="col-sm-6 hidden-xs box">
                            <h1>Want to learn more?</h1>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2>Contact information Below</h2>
                                        <span className="contact-label">Email:</span>
                                        <p className="contact-info">deonte@nuya.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <span className="contact-label">Number:</span>
                                        <p className="contact-info">+601-1121-34527</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <span className="contact-label">Location:</span>
                                        <p className="contact-info">312 Sesame Street</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Contact
