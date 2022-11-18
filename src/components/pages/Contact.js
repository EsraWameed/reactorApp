import React, { useState } from "react";
import { validateEmail } from "../../utils/helper.js";
import '../../styles/contact.css';
function Contact() {

  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Invalid email");
        return;
      } else {
        setErrorMessage("");
        return;
      }
    } else if (inputType === "message") {
      if (!inputValue) {
        setErrorMessage("Message is required");
        return;
      } else {
        setErrorMessage("");
        return;
      }
    }
  };

  return (
    <div>
      <h1>To get in touch with me, please reach me at abduljabaresra0@gmail.com</h1>
      <h2>Phone: 6043387943</h2>
        {errorMessage && (
        <div className="errorHandle">
          <p>{errorMessage}</p>
        </div>
      )}
    <div className="formContainer">
      <form class="formTwo">
        <input
        className="form-control"
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
         
        />
        <input
          className="form-control"
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
          
        />
<textarea
            className="form-control"
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
     
    </div>
    </div>
    
  );
}
export default Contact;
