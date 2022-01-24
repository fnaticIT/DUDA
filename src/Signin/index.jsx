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
          <h4 style={{color:"white"}}>Name</h4>
          <input type="text" name="user_name" className="i sp" style={{color:"black",padding:10,background:""}}/>
          <h4 style={{color:"white"}}>Your email</h4>
          <input type="email" name="user_email" className="i sp" style={{color:"black",padding:10,background:""}}/>
          <h4 style={{color:"white"}}>Message</h4>
          <textarea name="message" className="i sp" style={{color:"black",padding:10,background:""}}/>
          <h4 style={{color:"white"}}></h4>
          <input type="submit" value="Send" className="b bnew" style={{backgroundColor:"#2697d8", borderColor:"white",color:"white",padding:12,borderRadius:25,textDecoration:"none",width:"40%",marginBottom:40,cursor:"pointer",fontSize:15,fontWeight:"200"}} />
        </form>
      </div>
    </div>
    </div>
  );
}
