
import 'bootstrap/dist/css/bootstrap.min.css'
import image from "../assets/image.png"
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import './Home.css';
import Navbar from './Navbar'

const Home = ({ darkTheme, setDarkTheme }) => {

    const color = darkTheme ? "text-white" : "text-dark"
    const border = darkTheme ? "border-white" : "border-dark"
    const underlineColor = darkTheme ? "text-decoration-color-white" : "text-decoration-color-black"
    return (
        <div className={`${darkTheme ? "text-white" : "text-dark"} p-2`} >
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <div className='d-flex flex-column  flex-lg-row justify-content-between px-5 mt-5' style={{}}>
                <div className='d-flex order-2 order-lg-1 flex-column text-start mt-5 ms-5'>
                    <h2 className=' text-white fw-bold p-2 text-center' style={{
                        borderTopLeftRadius: "80px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px", width: "9rem",
                        background: 'linear-gradient(to right,  #32F6F6,#A6A79F)'
                    }}>Hello!</h2>
                    <h1 className={`fw-bold ${color}`} style={{ fontSize: '62px' }}>I'm <span className={`${underlineColor}`}
                        style={{
                            color: "gray"
                        }}>Anish</span>👋🏻</h1>
                    <p className='fs-1s fs-lg-1' style={{ width: '30rem', fontFamily: " " }}>UI/UX Designer, Front-End Developer & Thinker. Based in India.</p>
                    <div className=''>
                        <button className='border-0 rounded text-white fw-bold p-1' style={{
                            width: "8rem",
                            background: 'linear-gradient(to right,  #DF580C,#FD993D)'
                        }}>Download CV</button>
                        <button className='border-0 rounded text-white fw-bold p-1 ms-4' style={{
                            width: "8rem",
                            background: 'black'
                        }}>Get in Touch!</button>
                    </div>
                </div>
                <div className='order-1 order-lg-2 mt-0'
                >
                    <img src="https://res.cloudinary.com/dblomc9cr/image/upload/v1750925829/Image_ucsgji.png" alt="" style={{ width: '30rem' }} />
                </div>
            </div>
            <div className={`${darkTheme ? 'text-white' : "text-dark"} d-flex justify-content-between `}>
                <div className='d-grid gap-2 d-flex flex-column move-up ms-3'>
                    <div className='rounded-circle border border-2 border-dark p-2 d-flex '>
                        <FaFacebookF size={20} /></div>
                    <div className={`rounded-circle border border-2 ${border} p-2 d-flex `}><TiSocialInstagram size={20} /></div>

                    <div className={`rounded-circle border border-2 ${border} p-2 d-flex `}><FaTwitter size={20} /></div>
                    <div className={`rounded-circle border border-2 ${border} p-2 d-flex `}><FaLinkedinIn size={20} /></div>
                    <div className={`rounded-circle border border-2 ${border} p-2 d-flex `}><PiGithubLogoFill size={20} /></div>
                    <div className={`rounded-circle border border-2 ${border} p-2 d-flex `}><FaTelegramPlane size={20} /></div>
                    <div className={`rounded-circle border border-2 ${border} p-2 d-flex `}><FaTwitter size={20} /></div>
                </div>
                <div className=''>
                    <p className={`${darkTheme ? "border-white" : "border-dark"} move-up fw-bold border-start border-3 email ps-2`} >
                        sinhaanishkumar@outlook.com
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Home