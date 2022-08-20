import React from 'react'
import '../styles/Portfolio.css'
import Ecommerce from '../assets/Ecommerce3.png'
import Recipe from '../assets/recipe.png'
import Quiz from '../assets/quiz1.png'
import Footygram from '../assets/Footygram1.png'


const data = [
  {
    id: "1",
    title: "Headphones Ecommerce",
    subTitle: "MERN Stack",
    techs: "React, Node JS, MongoDB, Express, Agile (Scrum)",
    preImg: Ecommerce,
    repo: "https://github.com/IanWallenberg/e-commerce-website",
    demo: "https://github.com/IanWallenberg/e-commerce-website"
  },
  {
    id: "2",
    title: "Recipe App",
    subTitle: "Frontend",
    techs: "React, Styled Components, Open API",
    preImg: Recipe,
    repo: "https://github.com/isacgw/recipe-website",
    demo: "https://recipe-website-seven.vercel.app/"
  },
  {
    id: "3",
    title: "Footygram App Concept",
    subTitle: "UX/UI Design",
    techs: "Figma, Photoshop",
    preImg: Footygram,
    repo: "https://www.behance.net/gallery/150739745/Footygram?",
    demo: "https://www.behance.net/gallery/150739745/Footygram?"
  },
  {
    id: "4",
    title: "Simple Quiz",
    subTitle: "Frontend",
    techs: "Typescript, React, Styled Components",
    preImg: Quiz,
    repo: "https://github.com/isacgw/typescript-quiz",
    demo: "https://typescript-quiz-psi.vercel.app/"
  },
  {
    id: "5",
    title: "Minecraft Blog",
    subTitle: "Frontend",
    techs: "NextJS, GraphQL, Tailwind CSS",
    preImg: Quiz,
    repo: "https://github.com/isacgw/bj-minecraft-blog",
    demo: "https://bj-minecraft-blog.vercel.app/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h1>my projects</h1>
        <div className="cards-container">

         {data.map(({id, title, subTitle, techs, preImg, repo, demo}) => {
          return (
            <article key={id} className="card">
               <div className="preview-img">
            <img src={preImg} alt="" />
          </div>
          <h3>{title}</h3>
          <h5>{subTitle}</h5>
          <p>{techs}</p>
          <div className='buttons'>
            <a className='btn-primary' href={repo} target={'_blank'}>Repository</a>
            <a className='btn-primary' href={demo} target={'_blank'}>Live Demo</a>
            </div>
          </article>
          )})}
        </div>
    </section>
  )
}

export default Portfolio