import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ntlbm7r', 'template_uccbfwk', form.current, 'ZBmrXXM3a-L-8mz3V')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Entre em contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contanct__header">
              <MdOutlineMail className='contact__option-icon' />
              <h4>Email</h4>
            </div>
            <h5>douglas.grs@icloud.com</h5>
            <a href="mailto:douglas.grs@icloud.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <div className="contanct__header">
              <RiWhatsappFill className='contact__option-icon' />
              <h4>WhatsApp</h4>
            </div>
            <h5>+55 51 98332-0944</h5>
            <a href="https://api.whatsapp.com/send?phone=5551983320944" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact