import React from 'react'
import './contact.css'
import{MdOutlineMarkEmailUnread} from 'react-icons/md'
import{SiMessenger} from 'react-icons/si'
import{RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h1>Contact Me</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMarkEmailUnread className='conatct__option-icon'/>
            <h4>Email</h4>
            <h5>madhuriudutha2000@gmail.com</h5>
            <a href="mailto:madhuriudutha2000@gmail.com" target='_blank' rel="noopener noreferrer"> Send a Email</a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='conatct__option-icon'/>
            <h4>Messenger</h4>
            <h5>Madhuri Udutha</h5>
            <a href="https://www.facebook.com/messenger/" target='_blank' rel="noopener noreferrer"> Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='conatct__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 850****474</h5>
            <a href="https://web.whatsapp.com/" target='_blank' rel="noopener noreferrer"> Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='text' placeholder='Your Full Name'className='field' required />
          <input type="email" name='email' placeholder='Enter Your Email' className='field' required/>
          <textarea name="Message" cols="30" rows="10" required placeholder='Your Message' className='field'></textarea>
          <button type='submit'  className='btn btn-primary'> Send a Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact;