import React, { useState } from 'react';
import {validateEmail} from '../utils/formHelper';

function Form() {
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email address is not valid.');

    }
  }

  return (
    <div>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email address"
        />
        <br />
        <input
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br />
        <input type="textarea" placeholder="message here"></input>
        <br />
        <button type="Submit" onChange={handleInputChange} onSubmit={handleFormSubmit} className="btn btn-dark">Contact me.</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default Form;