import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
export default function SignIn() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4tsd069", "template_boygw1t", form.current, "user_u8odb2oxLi7U0bJf1GSnF").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    window.alert("Email sent");
  };

  return (
    <div className="bodyx">
    <div className="login-box">
     
      <div className="" style={{display:"flex",justifyContent:"center"}}>
        <form ref={form} onSubmit={sendEmail} style={{padding:20}} >
          <h3 style={{ color: "white" ,padding:30}}>Share your Feedback and Queries</h3>
          <h4 style={{color:"wheat"}}>Name</h4>
          <input type="text" name="user_name" className="i sp" />
          <h4 style={{color:"wheat"}}>Email</h4>
          <input type="email" name="user_email" className="i sp" />
          <h4 style={{color:"wheat"}}>Message</h4>
          <textarea name="message" className="i sp" />
          <h4 style={{color:"wheat"}}></h4>
          <input type="submit" value="Send" className="b bnew" style={{backgroundColor:"wheat",padding:10,borderRadius:15,textDecoration:"none",width:"50%",marginBottom:40}} />
        </form>
      </div>
    </div>
    </div>
  );
}
