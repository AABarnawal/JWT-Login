import React, { useState } from 'react'
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
const handleChangeLogin = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmitLogin = async (e)=>{
    e.preventDefault();
    console.log(e);
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      console.log('Form data submitted successfully:', response.data);
      // You can add additional logic here, such as displaying a success message
    } catch (error) {
      console.error('Error submitting form data:', error);
      // You can add error handling logic here, such as displaying an error message
    }
    
}
  return (
    <div style={{width:"50%", padding:"15px", border:"2px solid black", borderRadius:"8px", margin:"auto" }} >
    <form onSubmit={handleSubmitLogin}>
      <h1>Login form</h1>
      <input
        style={{width:"100%", padding:"10px", margin:"auto" }}
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChangeLogin}
      />
      <input
        style={{width:"100%", padding:"10px", margin:"auto" }}
        type="password"
        name="password"
        placeholder="enter your password"
        value={formData.password}
        onChange={handleChangeLogin}
      />
      {/* <textarea
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
      /> */}
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Login