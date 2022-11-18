import React, { useState } from "react";
import { validateEmail } from "../../utils/helper.js";

function Contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const {target} = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email) || !name) {
      setErr("Please enter a valid email");

      return;
    }
    setName("");
    setEmail("");
    setMessage("")
    setErr("")
  };

  return (
    <div>
      <form>
        <input
        className=""
          value={name}
          name="name"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="text"
          placeholder="Enter your name"
         
        />
        <input
        className=""
          value={email}
          name="email"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="email"
          placeholder="Enter your email"
          
        />
<textarea
          className="message"
          value={message}
          name="message"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {err && (
        <div>
          <p>{err}</p>
        </div>
      )}
    </div>
  );
}
export default Contact;
