import React, { Component } from 'react';
import db  from '../firebase/firebase';

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      shown: false,
      validated: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

    if (e.target.name === 'email') {
       this.setState({validated: this.validateEmail(this.state.email)})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, message } = this.state

    const newMessagesRef = db.ref('messages').push()
    newMessagesRef.set({
      name,
      email,
      message
    })

    console.log(this.state.shown)
    this.setState({
      name: "",
      email: "",
      message: "",
      shown: !this.state.shown
    })

    setTimeout(
      function() {
        console.log(this.state.shown)
        this.setState({shown: !this.state.shown})
      }.bind(this),
      4000
    )

    
  }

  validateEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase())
  }

  render() {
    const { shown, name, email, message, validated } = this.state
    const messageTitle = "Your message has been sent!"
    const messageContent = "I will get back to you as soon as possible. Thank you!"
    const greetings = "Drop me a message :)"
    const disableBtn = validated || !name || !email || !message 

    return (
      <div className="container">
        <form className="form">
          <p className="form__title">{greetings}</p>
          <p className="form__container">
            <label htmlFor="name" className="form__label">Name</label>
            <input className="form__input" type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required/>
          </p>
          <p className="form__container">
            <label htmlFor="email" className="form__label">Email address</label>
            <input className="form__input" type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required/>
          {console.log(this.validateEmail(this.state.email))}
          {console.log("BTN " + disableBtn + " name " + !name + " email " + !email + " message " + !message)}
          </p>
          <p className="form__container">
            <label htmlFor="message" className="form__label">Your message</label>
            <textarea className="form__text-area" name="message" rows="7" value={this.state.message} onChange={this.handleChange}></textarea>
          </p>
          {
            shown && (
              <div className="form__message">
                <h4>{messageTitle}</h4>
                <p>{messageContent}</p>
              </div>
            )
          }
          <p className="form__container--btn">
            <button type="submit" className="form__button" disabled={disableBtn} onClick={this.handleSubmit}>Send</button>
          </p>
          
          
        </form>
        
      </div>
    );
  }
}

export default ContactMe;