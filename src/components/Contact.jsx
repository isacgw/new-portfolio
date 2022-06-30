import React from 'react'
import '../styles/Contact.scss'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
        <h1>Contact</h1>
        <div className="contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>isacgwall@gmail.com</h5>
            <a href="mailto:isacgwall97@gmail.com" target={'_blank'}>Send me an email!</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>Isac Geisewall</h5>
            <a href="https://m.me/isac.geisewall/" target={'_blank'}>Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+46722217972</h5>
            <a href="https://wa.me/+46722217972" target={'_blank'}>Whatsapp me!</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact