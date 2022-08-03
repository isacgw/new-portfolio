import React from 'react'
import '../styles/Ranking.scss'

const data = [

  {
    id: 1,
    title: "Top 5 movies of the year so far",
    items: ['Top Gun Maverick', 'The Batman', 'Thor: Love and Thunder', 'Dr Strange']
  },
];

const Ranking = () => {
  return (
    <section id="ranking">
        <h1>i'm ranking stuff</h1>
        <p>I like to rank stuff so here is a section of me ranking different things.
          Feel free to reach out and discuss any agreements or disagreements! 🤓
        </p>
        <div className="card-wrapper">
        {data.map(({id, title, items}) => {
          return (
            <article key={id} className="card">
               <div className="preview-img">
            <img src="" alt="" />
          </div>
          <h3>{title}</h3>
          <ol>
            <li>test</li>
          </ol>
        </article>
          )})}
        </div>
    </section>
  )
}

export default Ranking