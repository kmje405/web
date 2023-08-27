import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-container__title">Contact Me</h1>
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
  );
};

export default Contact;
