import React from "react";
import resumeLink from '../downloads/Resume - Sam Hoare.pdf'

export default function Resume(){
  return(
    <div className="resume">
      <h2 className="text-center">Resume</h2>
      <a href={resumeLink} className="download-button" target="_blank" rel="noreferrer">Download Resume</a>
    </div>
  )
}