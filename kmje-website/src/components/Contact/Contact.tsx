import React from 'react';
import contactMemoji from './call.png'; // Import your memoji for the Contact page
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="body-container">
      <div className="content-container">
        <div className="content-container__left-div">
          <img src={contactMemoji} alt="Your memoji for the Contact page" />
        </div>
        <div className="content-container__right-div">
          <h1 className="contact-container__title">Get in touch!</h1>
          <form className="contact-container__form">
            <label className="contact-container__label">
              Name:
              <input type="text" name="name" className="contact-container__input" />
            </label>

            <label className="contact-container__label">
              Email:
              <input type="email" name="email" className="contact-container__input" />
            </label>

            <label className="contact-container__label">
              Subject:
              <input type="text" name="subject" className="contact-container__input" />
            </label>

            <label className="contact-container__label">
              Message:
              <textarea name="message" className="contact-container__textarea"></textarea>
            </label>

            <button type="submit" className="contact-container__button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
