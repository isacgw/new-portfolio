import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFacebookMessenger } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import ProfileImage from '../assets/Profile-Image.png'
import '../styles/About.css'

const About = () => {
  return (
    <section id="about">
        <h1>about me</h1>
        <div className="about">
        <div className="info">
          <div className="img-container">
            <img src={ProfileImage} alt="" />
          </div>
          <div className="social-icons">
                <FaGithub className='github' />
                <FaLinkedin className='linkedin' />
                <IoLogoWhatsapp className='whatsapp' />
                <FaFacebookMessenger className='messenger' />
            </div>
        </div>
        <div className="paragraphs">
          <article>
            <h3>A LITTLE HISTORY:</h3>
            <p>I've been studying both economics and 3D-visualization but realized nothing of
              that was for me. During the pandemic I experimented with an old hobby of mine - programming.
              Then I knew this is what I want to do - finally!
            </p>
          </article>
          <article>
            <h3>WHY FRONTEND?</h3>
            <p>When I found out that you could combine designing with programming it almost felt
              a little too good to be true. It's quite simple actually, I like designing and I enjoy
              programming and Frontend development is the best of both worlds. From a personal perspective
              working in the Frontend field and environment that comes with it would give me the opportunity to live the life I 
              want to live - at work but also outside of it.
            </p>
          </article>
          <article>
            <h3>THE FUTURE:</h3>
            <p>I want to come up with smart UX/UI-designs and solutions and then making it 
              come to life by writing better, cleaner and more efficient code. In my dream role I get
              to be part of designing the UI and then building it with todays and tomorrows frameworks
              and libraries. I hope to also in some way work with sports and data visualization.</p>
          </article>
        </div>
        </div>
    </section>
  )
}

export default About