import React from 'react'
import '../styles/Skills.scss'

const Skills = () => {
  return (
    <section>
        <h1>my dev skills</h1>
        <div className="flex-row-center">

          <article className="skill-card">
            <h3>FRONTEND</h3>
            <h5>What I Know:</h5>
            <ul className='skills'>
              <li>HTML, CSS JS</li>
              <li>React JS</li>
              <li>Sass/SCSS</li>
              <li>Next JS</li>
            </ul>
            <h5>What I want to learn:</h5>
            <ul className='skills'>
              <li>TypeScript</li>
              <li>CMS'es</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>BACKEND</h3>
            <h5>What I Know:</h5>
            <ul className='skills'>
              <li>Node JS</li>
              <li>MongoDB</li>
            </ul>
            <h5>What I want to learn:</h5>
            <ul className='skills'>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>DESIGN</h3>
            <h5>What I Know:</h5>
            <ul className='skills'>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
            <h5>What I want to learn:</h5>
            <ul className='skills'>
              <li>AdobeXD</li>
            </ul>
          </article>

        </div>
    </section>
  )
}

export default Skills