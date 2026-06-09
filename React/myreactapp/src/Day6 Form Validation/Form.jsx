import React, { useState } from "react";
 
function SimpleFormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
 
  const [errors, setErrors] = useState({});
 
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
 
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  // Validation function
  const validateForm = () => {
    let newErrors = {};
 
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
 
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
 
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
 
    setErrors(newErrors);
 
    return Object.keys(newErrors).length === 0;
  };
 
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
 
      // Optional: clear form
      setFormData({
        name: "",
        email: "",
        password: ""
      });
      setErrors({});
    }
  };
 
  return (
    <div style={{ width: "300px", margin: "30px auto" }}>
      <h2>Simple Form Validation</h2>
 
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
 
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
 
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default SimpleFormValidation;