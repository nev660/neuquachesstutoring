import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childName: '',
    dateTime: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("https://discord.com/api/webhooks/1227608813490929694/sZvCRYZB9tbIDEJvOMnz9VbqhLPM-EbP5RH7oaT2jgmhQ3yUnOK-ghLYE-Sonv96Jbs8", {
      method: 'POST',
      body: JSON.stringify({'content' : JSON.stringify(formData,null,2).replace(/"/g,'')}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  })
  .then(e => {
    document.querySelector(".alert-info").classList.add("d-none");
    if (e.ok)
      document.querySelector(".alert-success").classList.remove("d-none");
     else 
      document.querySelector(".alert-danger").classList.remove("d-none");
  });
  };

  return (
    <section id="about" className="section contact">
    <div className="container mt-5" style={{ maxWidth: '80%' }}>
      <div className="border border-primary p-4 rounded">
        <div class="alert alert-danger d-none" role="alert">
          Something went wrong! Instead, contact us directly at neuquachess@gmail.com.
        </div>
        <div class="alert alert-success d-none" role="alert">
          Success! Your message has been recieved, we will get back to you on the provided email!
        </div>
        <div class="alert alert-info" role="alert">
          Please fill this out if you are interested! This does not commit you to anything.
        </div>
        <h1 className = "text-align">Interest form</h1>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Child's Name"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Availability (dates, times)"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Anything else?"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <br/><br/>
    </div>
    </section>
  );
};

export default Contact;
