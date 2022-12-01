import React, {Fragment, useState} from "react";


export default function Contact() {

  const [phoneDisplay, setPhoneDisplay] = useState("Phone")
  const [emailDisplay, setEmailDisplay] = useState("Email")
  function togglePhone() {
    switch(phoneDisplay) {
      case "Phone":
        setPhoneDisplay("617 467 8921")
        break;
      case "617 467 8921":
        setPhoneDisplay("Phone")
        break;
      default:
        return
    }
  };

  function toggleEmail() {
    switch(emailDisplay) {
      case "Email":
        setEmailDisplay("samuel.peter.hoare@gmail.com")
        break;
      case "samuel.peter.hoare@gmail.com":
        setEmailDisplay("Email")
        break;
      default:
        return
    }
  };

  return(
    <Fragment>
      <h2 className="text-center">Contact Details</h2>
      <div className="contact-details">
        <h2 onMouseOver={() => togglePhone()} onMouseLeave={() => togglePhone()} className={`prevent-select`}>{phoneDisplay}</h2>
        <a 
        href="mailto:samuel.peter.hoare@gmail.com" 
        target="_blank" 
        rel="noreferrer"
        onMouseOver={() => toggleEmail()} 
        onMouseLeave={() => toggleEmail()}
        >
          <h2>{emailDisplay}</h2>
        </a>
        <a href="https://www.linkedin.com/in/samuel-hoare-332291124/" target="_blank" rel="noreferrer"><h2>LinkedIn</h2></a>
      </div>
    </Fragment>
    
  )
}