import React from 'react'
import logo from "../assets/Logo.svg"
import moon from "../assets/Moon Black.svg"
import light from "../assets/Group 15.png"
import { MdLightMode } from "react-icons/md";

const Navbar = ({ darkTheme, setDarkTheme }) => {

    const toggleThemeDark = () => {
        setDarkTheme(false)
    }
    const toggleThemeLight = () => {
        setDarkTheme(true)
    }
    return (
        <nav className={`navbar navbar-expand-lg ${darkTheme ? 'bg-dark navbar-dark' : 'bg-body-white'
            }`}>
            <div className="container-fluid d-flex justify-content-between">
                <div className='d-flex'>
                    {darkTheme ? <img src={light} alt='' style={{ width: "40px", height: "40px", marginTop: "18px" }} /> : <img src={logo} alt='' />}

                    <h1 className='m-4 fw-bold fs-4 mt-4'>ANISH KUMAR SINHA</h1>
                </div>
                <div className="d-flex align-items-center">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    {darkTheme ? <button onClick={toggleThemeDark} className="d-lg-none border-0 bg-transparent ms-4 "
                        style={{ width: '24px', cursor: 'pointer', color: "yellow" }}><MdLightMode size={30} />
                    </button> :
                        <button onClick={toggleThemeLight} className='border-0 bg-transparent'><img
                            src={moon}
                            alt="Toggle Theme"
                            className="d-lg-none ms-4 "
                            style={{ width: '24px', cursor: 'pointer' }}
                        /></button>
                    }

                </div>
                <div className="collapse navbar-collapse text-primary" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex justify-content-between  align-items-center">
                        <a className="nav-link active" href="/">Home</a>
                        <a className="nav-link" href="/about">About</a>
                        <a className="nav-link" href="#">Resume</a>
                        <a className="nav-link " href="#">Skills</a>
                        <a className="nav-link " href="#">Projects</a>
                        <a className="nav-link " href="#">Contact</a>

                        {darkTheme ? <button onClick={toggleThemeDark} className=" border-0 bg-transparent ms-3 "
                            style={{ width: '24px', cursor: 'pointer', color: "yellow" }}><MdLightMode size={30} />
                        </button> :
                            <button onClick={toggleThemeLight} className='border-0 bg-transparent'>
                                <img
                                    src={moon}
                                    alt="Toggle Theme"
                                    className="d-none d-lg-inline ms-3"
                                    style={{ width: '24px', cursor: 'pointer' }}
                                />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar