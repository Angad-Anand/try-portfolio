import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form submitted:", formData);
  // };
  // return (
  //   <div className="contact_container">
  //     <div className="contact_title">
  //       <h1>Contact</h1>
  //       <p>LET'S TALK</p>
  //     </div>
  //     <div className="details">
  //       <div className="contact_form">
  //         <form className="contact-form" onSubmit={handleSubmit}>
  //           <div className="form-group">
  //             <label htmlFor="fullName">Full Name</label>
  //             <input
  //               type="text"
  //               id="fullName"
  //               name="fullName"
  //               value={formData.fullName}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="email">Email</label>
  //             <input
  //               type="email"
  //               id="email"
  //               name="email"
  //               value={formData.email}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="message">Message</label>
  //             <textarea
  //               id="message"
  //               name="message"
  //               value={formData.message}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>

  //           <button type="submit">Submit</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact</h1>
        <h3>Let's Talk</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="ej.: Genoveva Lian Hultt"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="To Write"
              value={formData.message}
              onChange={handleChange}

            />
          </div>
          <button type="submit" className="flip-3d" data-splitting>
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Angad<span class="fancy">Anand</span></h2>
        <h3>Developer and Designer</h3>
        <ul>
          <li>
            <strong>AGE:</strong> 22
          </li>
          <li>
            <strong>RESIDENCE:</strong> India
          </li>
          <li>
            <strong>FREELANCE:</strong> Available
          </li>
          <li>
            <strong>ADDRESS:</strong> Bokaro Steel City
          </li>
          <li>
            <strong>PHONE:</strong> +91 9939178265
          </li>
          <li>
            <strong>E-MAIL:</strong> angadanandishu@gmail.com
          </li>
        </ul>
        <p className="signature">Angad An.</p>
      </div>
    </div>
  );
}

export default Contact;
