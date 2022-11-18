import React, { useState, useEffect } from "react";
import { validateEmail } from "../../utils/helper.js";
import '../../styles/contact.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Contact() {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  });
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
      <p>To get in touch with me, please reach me at abduljabaresra0@gmail.com</p>
      <p>Phone: 6043387943</p>
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
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="Required"
         
        />
        <input
          className="form-control"
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="Required"
          
        />
<textarea
            className="form-control"
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="Required"
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
