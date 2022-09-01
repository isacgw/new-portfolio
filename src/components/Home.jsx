import React from 'react'
import ProfileImage from '../assets/Profile-Image.png'
import '../styles/Home.css'
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFacebookMessenger } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import ObiWan from '../assets/obi-wan.png'
import CV from '../assets/CV-isacgw.pdf'

const Home = () => {
  return (
    <section id='header'>
    <header>
        <div className="content">
        <h2>Hello there!</h2>
        <img className='obi-wan' src={ObiWan} alt="" />
        <div className="mobile-img">
            <div className="mobile-img-container">
                <img src={ProfileImage} alt="" />
            </div>
            <div className="social-icons">
            <a href="https://github.com/isacgw" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/isac-geisewall-6a716b21b/" target="_blank"><FaLinkedin/></a>
                <a href="https://wa.me/+46722217972" target={'_blank'}><IoLogoWhatsapp /></a>
                <a href="https://m.me/isac.geisewall/" target={'_blank'}><FaFacebookMessenger /></a>
            </div>
        </div>
        <h4>I’m Isac Geisewall, Junior Frontend Developer, UX/UI-designer and Hyper Island student.</h4>
        <p>...and if you look closely in the background you’ll see the things I like outside of work!</p>
        <a href={CV} download className='cta'>Download CV</a>
        </div>
        <div className="img">
            <div className="img-container">
                <img src={ProfileImage} alt="" />
            </div>
            <div className="social-icons">
            <a href="https://github.com/isacgw" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/isac-geisewall-6a716b21b/" target="_blank"><FaLinkedin/></a>
                <a href="https://wa.me/+46722217972" target={'_blank'}><IoLogoWhatsapp /></a>
                <a href="https://m.me/isac.geisewall/" target={'_blank'}><FaFacebookMessenger /></a>
            </div>
        </div>
    </header>
    </section>
  )
}

export default Home