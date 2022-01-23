import React, { useRef, useState } from "react";
import "./Form.css";
import axios from "axios";
import { FaWindows } from "react-icons/fa";
import { useHistory } from "react-router";
import Navbar from "../Navbar";
//import emailjs from "emailjs-com";
const Forms = () => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const college = useRef();
  const by = useRef();
  const topic = useRef();
  const desc = useRef();
  const history = useHistory();
  const submitForm = async (e) => {
    e.preventDefault();
    const form = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      college: college.current.value,
      by: by.current.value,
      topic: topic.current.value,
      desc: desc.current.value,
    };
    console.log(form);
    await axios.post("http://localhost:5000/form", form);
    document.getElementById("one").reset();
    window.alert("Your form has been submitted");
    
  


    history.push("/");
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{background:"black"}}>
    
    <p  style={{color:"white",paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,opacity:"0.8",borderRadius:35,borderWidth:8,marginLeft:"2%",marginRight:"2%"}}>You won't be chargeed anything now , after filling the form we will find the right mentor and contact you and if you are satisfied and we can proceed with the payment and your session will be booked. Don't worry its completely safe and secure.</p>
    <div className="bodyx">
      <div id="signup" className="login-box" style={{marginTop:"50px"}}>
        <h2>Book</h2>
        <form id="one">
          <div className="user-box">
            <input type="text" name="" required="" ref={name}></input>
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" ref={email}></input>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" ref={phone}></input>
            <label>Mobile no.</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" ref={college}></input>
            <label>College</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" ref={by}></input>
            <label>Year and Branch</label>
          </div>
          <div className="user-box">
            <input placeholder="mention the topic related to your doubt for eg:- Computer science" type="text" name="" required="" ref={topic}></input>
            <label>Topic</label>
          </div>
          <div className="user-box">
            <textarea placeholder="please try to give detail description of your doubt" rows="2" type="text" name="" required="" ref={desc}></textarea>
            <label>Description</label>
          </div>
          {/* <div className="user-box">
          <input type="password" name="" required=""></input>
          <label>Password</label>
        </div> */}
          <div onClick={submitForm} className="submit">
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Forms;
