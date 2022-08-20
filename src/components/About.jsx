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
              <a href="https://github.com/isacgw" target="_blank"><FaGithub/></a>
              <a href="https://www.linkedin.com/in/isac-geisewall-6a716b21b/" target="_blank"><FaLinkedin/></a>
              <a href="https://wa.me/+46722217972" target={'_blank'}><IoLogoWhatsapp /></a>
              <a href="https://m.me/isac.geisewall/" target={'_blank'}><FaFacebookMessenger /></a>
            </div>
        </div>
        <div className="paragraphs">
          <article>
            <h3>A LITTLE HISTORY:</h3>
            <p>I've had a few years where I've been trying to figure out what I want to do with my life.
              I've been studying economics in Stockholm, 3D-visualization in Eksjö and working at a PWS
              care home. At the end of 2020 I was bored and tried an old hobby of mine - programming.
              <br/>
              <br/>
              I re-discovered my passion for it and in 2021 I applied to Hyper Island Stockholm and the 
              Frontend developer program and for the first time in my life really I felt that I was in the
              right place.
            </p>
          </article>
          <article>
            <h3>WHY FRONTEND?</h3>
            <p>When I found out that you could combine designing with programming it almost felt
              a little too good to be true. It's quite simple actually, I like designing and I enjoy
              programming and Frontend development is the best of both worlds. I see a lot of similarities
              between Frontend and Minecraft (on of my favorite games!). You know what you want to build, now
              you just have to figure out how to do it. 
              <br/>
              <br/>
              Talking from a personal perspective
              working in the Frontend field and the environment that comes with it would give me the opportunity to live the life I 
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