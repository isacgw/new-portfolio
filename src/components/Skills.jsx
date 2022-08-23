import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <section>
        <h1>my skills</h1>
        <div className="cards-container">

          <article className="skill-card">
            <h3>FRONTEND</h3>
            <h5>What I Know:</h5>
            <ul className='skills'>
              <li>HTML, CSS, JS</li>
              <li>React JS</li>
              <li>Sass/SCSS</li>
              <li>Next JS</li>
            </ul>
            <h5>What I want to learn next:</h5>
            <ul className='skills'>
              <li>TypeScript</li>
              <li>Gatsby</li>
              <li>Tailwind CSS</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>BACKEND</h3>
            <h5>What I Know:</h5>
            <ul className='skills'>
              <li>Node JS</li>
              <li>MongoDB</li>
            </ul>
            <h5>What I want to learn next:</h5>
            <ul className='skills'>
              <li>Python</li>
              <li>MySQL</li>
            </ul>
          </article>

          <article className="skill-card last">
            <h3>DESIGN</h3>
            <h5>What I Know:</h5>
            <ul className='skills'>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>3D-modeling and visualization</li>
            </ul>
            <h5>What I want to learn next:</h5>
            <ul className='skills'>
              <li>Data visualization</li>
              <li>UX/UI principles</li>
            </ul>
          </article>

        </div>
    </section>
  )
}

export default Skills