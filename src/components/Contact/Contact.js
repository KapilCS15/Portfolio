import React from 'react';
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import '../Contact/Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d6e8382-5705-49e1-959c-a74d19dbc1f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success"
      });
    }
  };

  return (
    <div>
      <section className='contact'>
        <form onSubmit={onSubmit}>
        <h2>Contact <strong className="purple">Form </strong></h2> 
          <div className="input-box purple">
            <label>Full Name</label>
            <input type="text" className="field" placeholder='Enter your name' name='name' required />
          </div>
          <div className="input-box purple">
            <label>Email Address</label>
            <input type="email" className="field" placeholder='Enter your email' name='email' required />
          </div>
          <div className="input-box purple">
            <label>Your Message</label>
            <textarea name="message" className="field mess" id="" placeholder='Enter your Message' required></textarea>
          </div>
          <Button type='submit'>Send Message</Button>
        </form>
      </section>
      <Particle/>
    </div>
  )
}

export default Contact
