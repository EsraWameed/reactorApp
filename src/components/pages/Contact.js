import React, { useState } from "react";
import { validateEmail } from "../../utils/helper.js";

function Contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

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
  };

  return (
    <div>
      <form>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name"
         
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email"
          
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
