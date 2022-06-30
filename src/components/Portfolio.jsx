import React from 'react'
import '../styles/Portfolio.scss'

const data = [
  {
    id: "1",
    title: "Headphones Ecommerce",
    subTitle: "MERN Stack",
    techs: "React, Node JS, MongoDB, Express, Agile (Scrum)",
    preImg: "",
    repo: "",
    demo: ""
  },
  {
    id: "2",
    title: "Recipe App",
    subTitle: "Frontend",
    techs: "React, Styled Components, Open API",
    preImg: "",
    repo: "",
    demo: ""
  },
  {
    id: "3",
    title: "FootHopper App",
    subTitle: "UX/UI Design",
    techs: "Figma, Photoshop",
    preImg: "",
    repo: "",
    demo: ""
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h1>my projects</h1>
        <div className="flex-row-center">

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
            <a className='btn-primary' href={repo}>Repository</a>
            <a className='btn-primary' href={demo}>Live Demo</a>
            </div>
          </article>
          )})};
        </div>
    </section>
  )
}

export default Portfolio