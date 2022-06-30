import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Portfolio from './Portfolio'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import Ranking from './Ranking'
import '../styles/Nav.scss'

const Nav = () => {

const [activeTab, setActiveTab] = useState("#");

  return (
    <div>
    <ul className='navbar'>
        <a href='#section-two' className={activeTab === 'projects' ? 'active' : ''}
        onClick={() => setActiveTab('projects')}>my projects</a>

        <a href='#section-two' className={activeTab === 'skills' ? 'active' : ''}
        onClick={() => setActiveTab('skills')}>skills</a>

      <a href='#section-two' className={activeTab === 'about' ? 'active' : ''}
        onClick={() => setActiveTab('about')}>about me</a>

        <a href='#section-two' className={activeTab === 'contact' ? 'active' : ''}
        onClick={() => setActiveTab('contact')}>contact</a>

<a href='#section-two' className={activeTab === 'ranking' ? 'active' : ''}
        onClick={() => setActiveTab('ranking')}>ranking stuff</a>

    </ul>
    { activeTab === 'projects' && <div id='section-two'>
              <Portfolio />
            </div> }

    { activeTab === 'skills' && <div id='section-two'>
              <Skills />
            </div> }

    { activeTab === 'about' && <div id='section-two'>
              <About />
            </div> }

    { activeTab === 'contact' && <div id='section-two'>
              <Contact />
            </div> }

    { activeTab === 'ranking' && <div id='section-two'>
              <Ranking />
            </div> }
    </div>
  )
}

export default Nav