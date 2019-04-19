import React from 'react';

function Contact() {
  const contactStyles = {
    display: 'flex',
    flexDirection: 'column',
    margin: '2% 20%'
  };
  return(
    <div>
      <style jsx>{`
          h1 {
            text-align: center;
          }

          `}</style>
      <h1>contact take us</h1>
      <div style={contactStyles}>
        <label for="firstName">first name:</label>
        <input type="text" name="firstName"></input>

        <label for="lastName">last name:</label>
        <input type="text" name="lastName"></input>

        <label for="email">email:</label>
        <input type="email" name="email"></input>

        <button type="submit">submit</button>
      </div>
    </div>
  );
}

export default Contact;
