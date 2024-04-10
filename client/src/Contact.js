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
    alert(name + " changed to " + value)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  })
  .then(e => {
    if (e.ok)
      alert("Success!")
     else 
      alert("Something went wrong!")
  });
  };

  return (
    <section id="about" className="section contact">
    <div className="container mt-5" style={{ maxWidth: '80%' }}>
      <div className="border border-primary p-4 rounded">
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
                placeholder="Date/Time"
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
                placeholder="Additional Information"
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
