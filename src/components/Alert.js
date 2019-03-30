import React from 'react';
import { useAlert } from 'react-alert'

const AlertMessage = (title, message) => (<div>
  <h4>{title}</h4>
  <p>{message}</p>
</div>)

//Alert for Contact Me form
const ContactAlert = () => {
  const alert = useAlert()

  const messageTitle = "Your message has been sent!"
  const messageContent = "I will get back to you as soon as possible. Thank you!"

  alert().show(<AlertMessage title={messageTitle} message={messageContent} />, {
    timeout: 2000,
  })
}

export { ContactAlert }