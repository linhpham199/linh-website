import React, { Component } from 'react';

class ContactMe extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <p className="form__container">
            <label for="name" className="form__label">Name</label>
            <input className="form__input" type="text" name="name" id="name" required/>
          </p>
          <p className="form__container">
            <label for="email" className="form__label">Email address</label>
            <input className="form__input" type="email" name="email" id="email" required/>
          </p>
          <p className="form__container">
            <label for="message" className="form__label">Leave me a message</label>
            <textarea className="form__input" name="message" rows="5"></textarea>
          </p>
          <p className="form__container">
            <button type="submit" className="form__button">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default ContactMe;