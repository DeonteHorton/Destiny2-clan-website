import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import '../media/background.jpg'

const Home = () =>{
    return(
        <>
        <Header/>
        <div className="index-parallax">
            <div className="quotes">
                <div className="container">
                    <div className="row row-padding">
                        <div className="col-sm-12">
                    <p id="index-p">The Light lives in all places... In all things... you can block it... even try to trap it... but the Light always finds it's way.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome">
                <div className="container">
                    <div className="row row-padding">
                        <div className="col-sm-12">
                    <p id="index-p">What? What are you doing here&hellip; I guess you're here to join the clan huh? Or you're already in the clan hahaha! The links are below for the sign up and login in page.</p>
                    <Link className="null btn btn-primary" to='/signup'>Sign up</Link>
                   <Link className="null btn btn-primary" to='/login'>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home