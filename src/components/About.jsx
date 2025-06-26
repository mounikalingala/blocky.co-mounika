import React from 'react'
import Navbar from './Navbar'
import handImage from '../assets/handImg.png'
import blob1 from '../assets/blob.svg'
import yellow1 from '../assets/Vector 3.png'
import yellow2 from '../assets/Vector 4.png'
import gray from '../assets/Vector 5.png'
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

import "./About.css"

const About = ({ darkTheme, setDarkTheme }) => {
    const underlineColor = darkTheme ? "border-white" : "border-dark"

    return (
        <div className='p-2' >
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <div className='d-flex justify-content-start'>
                <div className='bg-image d-flex' style={{ left: "-260px", position: "relative", }}  >
                    <img src={handImage} alt="" className='' style={{ transform: 'rotate(90deg) scaleX(-1)', display: 'inline-block', position: "relative", marginLeft: "100px", marginTop: "30px", width: "500px", height: "500px" }} />
                    <div className='' >
                        <div className='d-flex'>
                            <h2 className='fs-bold fs-3 text-start mb-4' style={{ marginTop: "7rem" }}> <span className='fs-1'>T</span>his is it. ;)</h2>
                            <div className={`border border-1 ${underlineColor}`} style={{ flexGrow: 1, marginLeft: "4rem", marginRight: "4rem", marginTop: "9rem", height: "0px", width: "20rem", borderBottom: "" }}></div>
                        </div>
                        <div className='text-width'>
                            <p className='fw-light' style={{ width: "700px", fontSize: "16px", lineHeight: '1.5' }}>Anish Kr. Sinha is an Indian <span className='fw-semibold'>UI/UX Designer & Front End Developer </span> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.<br />
                                He holds a  <span className='fw-semibold'>bachelor degree in Computer Applications.</span> During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative.</p>
                            <p className='fw-light' style={{ width: "700px", fontSize: "16px", lineHeight: '1.5' }}>His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <span className='fw-semibold'>3D floor plan.</span> </p>
                            <p className='fw-light' style={{ width: "700px", fontSize: "16px", lineHeight: '1.5' }}>When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
                            <div className={`border border-bottom  ${underlineColor}`} style={{ flexGrow: 1, marginLeft: "12rem", marginTop: "2rem", width: "20rem", }}></div>
                        </div>
                    </div>
                    <img src={yellow1} alt="" style={{ position: "relative", right: 0, height: '500px' }} />
                </div>
            </div>
            <div className={`${darkTheme ? 'text-white border-white' : "text-dark border-dark"} d-flex justify-content-between ms-2 `} style={{ marginTop: "8rem" }}>
                <div className='d-grid gap-2 d-flex flex-column move-up'>
                    <div className={`rounded-circle border border-2 ${underlineColor} p-2 d-flex `}>
                        <FaFacebookF size={20} /></div>
                    <div className={`rounded-circle border border-2 ${underlineColor} p-2 d-flex `}><TiSocialInstagram size={20} /></div>

                    <div className={`rounded-circle border border-2 ${underlineColor} p-2 d-flex `}><FaTwitter size={20} /></div>
                    <div className={`rounded-circle border border-2 ${underlineColor} p-2 d-flex `}><FaLinkedinIn size={20} /></div>
                    <div className={`rounded-circle border border-2 ${underlineColor} p-2 d-flex `}><PiGithubLogoFill size={20} /></div>
                    <div className={`rounded-circle border border-2 ${underlineColor} p-2 d-flex `}><FaTelegramPlane size={20} /></div>
                    <div className={`rounded-circle border border-2 ${underlineColor} p-2 d-flex `}><FaTwitter size={20} /></div>
                </div>
                <div className='d-flex justify-content-between'>
                    <img src={yellow2} alt="" />
                    <img src={gray} alt="" style={{ width: "20rem", marginLeft: "8rem" }} />
                </div>
                <div className=''>
                    <p className={`${darkTheme ? "border-white" : "border-dark"} move-up fw-bold border-start border-3 email ps-2`}  >
                        sinhaanishkumar@outlook.com
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About