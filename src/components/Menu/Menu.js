import React, { Fragment, useState } from "react";

export default function Menu(props){
  const selectSection = props.selectSection;
  const selectedSection = props.selectedSection;
  const [displayMobileMenuItems, setDisplayMobileMenuItems] = useState(false)

  function toggleMobileMenuItems() {
    console.log(displayMobileMenuItems);
    switch(displayMobileMenuItems) {
      case false:
        setDisplayMobileMenuItems(true);
        break;
      case true:
        setDisplayMobileMenuItems(false);
      default:
        setDisplayMobileMenuItems(false);
    }
  }


  return(
    <Fragment>
    <div className="menu prevent-select">
      <div className={`tab first-tab ${selectedSection==="About" && "selected-tab"}`} onClick={() => selectSection("About")}>About Me</div>
      <div className={`tab ${selectedSection==="Projects" && "selected-tab"}`}onClick={() => selectSection("Projects")}>Projects</div>
      <div className={`tab ${selectedSection==="Certifications" && "selected-tab"}`}onClick={() => selectSection("Certifications")}>Certifications</div>
      <div className={`tab ${selectedSection==="Resume" && "selected-tab"}`}onClick={() => selectSection("Resume")}>Resume</div>
      <div className={`tab ${selectedSection==="Contact" && "selected-tab"}`}onClick={() => selectSection("Contact")}>Contact</div>
    </div>
    <div className={`menu-mobile ${displayMobileMenuItems===true && "visible-mobile-menu"}`} onClick={() => toggleMobileMenuItems()}>Menu
      <div className={`tab first-tab ${displayMobileMenuItems===true && "visible-mobile-tab"}`} onClick={() => selectSection("About")}>About Me</div>
      <div className={`tab ${displayMobileMenuItems===true && "visible-mobile-tab"}`}onClick={() => selectSection("Projects")}>Projects</div>
      <div className={`tab ${displayMobileMenuItems===true && "visible-mobile-tab"}`}onClick={() => selectSection("Certifications")}>Certifications</div>
      <div className={`tab ${displayMobileMenuItems===true && "visible-mobile-tab"}`}onClick={() => selectSection("Resume")}>Resume</div>
      <div className={`tab ${displayMobileMenuItems===true && "visible-mobile-tab"}`}onClick={() => selectSection("Contact")}>Contact</div>
    </div>
    </Fragment>
  )
}