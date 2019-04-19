import React from 'react';

function Contact() {
  return(
    <div>
      <h1>contact take us</h1>
      <label for="firstName">first name:</label>
      <input type="text" name="firstName"></input>

      <label for="lastName">last name:</label>
      <input type="text" name="lastName"></input>

      <label for="email">email:</label>
      <input type="email" name="email"></input>

      <button type="submit">submit</button>
    </div>
  );
}

export default Contact;
