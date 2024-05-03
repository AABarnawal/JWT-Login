import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    // const [state, setState] = useState ({ name: "", email: "", password:"" })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(e);
        try {
          const response = await axios.post('http://localhost:8080/api/signup', formData)
          .then((res)=>{
            console.log(res.data.message)
            toast.success(
                <div>{res.data.message}</div>
            )
          });
          // console.log('Form data submitted successfully:', response.data);
          // toast.success(
          //   response.message
          // )
          // You can add additional logic here, such as displaying a success message
        } catch (error) {
          console.error('Error submitting form data:', error);
          toast.error(
            <div>Email already exist</div>
          )
          // You can add error handling logic here, such as displaying an error message
        }
        
    }
  return (
    <div style={{width:"50%", padding:"15px", border:"2px solid black", borderRadius:"8px", margin:"auto" }} >
    <ToastContainer />
    <form onSubmit={handleSubmit}>
      <h1>Signup form</h1>
      <input
        style={{width:"100%", padding:"10px", margin:"auto" }}
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        style={{width:"100%", padding:"10px", margin:"auto" }}
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        style={{width:"100%", padding:"10px", margin:"auto" }}
        type="password"
        name="password"
        placeholder="enter your password"
        value={formData.password}
        onChange={handleChange}
      />
      {/* <textarea
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
      /> */}
      <button type="submit">Submit</button>
    </form>
    <ToastContainer />
    </div>
  );
}


export default Signup;