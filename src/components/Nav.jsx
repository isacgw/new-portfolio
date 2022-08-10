import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Portfolio from './Portfolio'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import Ranking from './Ranking'
import '../styles/Nav.css'

import { AiFillHome } from 'react-icons/ai'
import { HiBriefcase } from 'react-icons/hi'
import { FaUserTie } from 'react-icons/fa'
import { FaKeyboard } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'


const Nav = () => {

const [activeTab, setActiveTab] = useState("#");

  return (
    <div>
    <ul className='navbar'>
        <a href='#projects' className={activeTab === 'projects' ? 'active' : ''}
        onClick={() => setActiveTab('projects')}>my projects</a>

        <a href='#skills' className={activeTab === 'skills' ? 'active' : ''}
        onClick={() => setActiveTab('skills')}>skills</a>

      <a href='#about' className={activeTab === 'about' ? 'active' : ''}
        onClick={() => setActiveTab('about')}>about me</a>

        <a href='#about' className={activeTab === 'contact' ? 'active' : ''}
        onClick={() => setActiveTab('contact')}>contact</a>

    </ul>

    <ul className="mobile-nav">
        <a href='#projects' className={activeTab === 'projects' ? 'active' : ''}
        onClick={() => setActiveTab('projects')}><HiBriefcase/></a>

        <a href='#skills' className={activeTab === 'skills' ? 'active' : ''}
        onClick={() => setActiveTab('skills')}><FaKeyboard/></a>

      <a href='#about' className={activeTab === 'about' ? 'active' : ''}
        onClick={() => setActiveTab('about')}><FaUserTie/></a>

        <a href='#about' className={activeTab === 'contact' ? 'active' : ''}
        onClick={() => setActiveTab('contact')}><AiFillMessage/></a>
    </ul>

    { activeTab === 'projects' && <div id='projects'>
              <Portfolio />
            </div> }

    { activeTab === 'skills' && <div id='skills'>
              <Skills />
            </div> }

    { activeTab === 'about' && <div id='about'>
              <About />
            </div> }

    { activeTab === 'contact' && <div id='about'>
              <Contact />
            </div> }
    </div>
  )
}

export default Nav