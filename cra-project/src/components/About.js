import React from 'react'
import Header from './Header'
import video from '../media/background-vid.mp4'

const About = () =>{
    return (
        <>
        <Header/>
        <video id="video" muted autoPlay loop>
            <source src={video} type="video/mp4"/>
        </video> 
        <div className="trials">
            <div className="container about-q ">
                <div className="row ">
                    <div className="col-sm-12">
                        <p id="about-a">What is so special about us?</p>
                        <p id="about-a">Well im glad you asked! We are always active and love to help everyone that apart of our clan (the community as well&hellip;).We are a mix of Pvp and PvE clan ,So that means we do everything in game... Raid, Trials, Crucible, and more .We host give aways and tournaments as well. So if your in lucky, you can get a special prize! </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About