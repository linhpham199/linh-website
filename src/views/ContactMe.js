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
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
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
      3000
    )

    
  }

  render() {
    const { shown } = this.state
    const messageTitle = "Your message has been sent!"
    const messageContent = "I will get back to you as soon as possible. Thank you!"

    return (
      <div>
        <form className="form">
          <p className="form__container">
            <label htmlFor="name" className="form__label">Name</label>
            <input className="form__input" type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required/>
          </p>
          <p className="form__container">
            <label htmlFor="email" className="form__label">Email address</label>
            <input className="form__input" type="email" name="email" id="email" value={this.state.emal} onChange={this.handleChange} required/>
          </p>
          <p className="form__container">
            <label htmlFor="message" className="form__label">Leave me a message</label>
            <textarea className="form__input" name="message" rows="7" value={this.state.message} onChange={this.handleChange}></textarea>
          </p>
          <p className="form__container">
            <button type="submit" className="form__button" onClick={this.handleSubmit}>Send</button>
          </p>
          {
            shown && (
              <div className="form__message">
                <h4>{messageTitle}</h4>
                <p>{messageContent}</p>
              </div>
            )
          }
          
        </form>
        
      </div>
    );
  }
}

export default ContactMe;