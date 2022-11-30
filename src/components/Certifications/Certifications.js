import React from "react";
import awsCert from '../images/aws_developer.png';
import azureCert from '../images/azure-security-engineer-associate600x600.png';
import lumaCert from '../images/luma_badge.png';
import scrumCert from '../images/professional_scrum_master.webp';


export default function Certifications(){
  return(
    <div className="certifications">
      <h2>Certifications</h2>
      <div className="certification-icons">
        <a href="https://aws.amazon.com/certification/certified-developer-associate/" target="_blank" rel="noreferrer">
          <img src={awsCert} className='certification-icon'/>
        </a>
        <a href="https://learn.microsoft.com/en-us/certifications/azure-security-engineer/" target="_blank" rel="noreferrer">
          <img src={azureCert} className='certification-icon'/>
        </a>
        <a href="https://www.luma-institute.com/our-offerings/training/facilitator-certification-program/" target="_blank" rel="noreferrer">
          <img src={lumaCert} className='certification-icon'/>
        </a>
        <a href="https://www.scrum.org/assessments/professional-scrum-master-i-certification" target="_blank" rel="noreferrer"><
          img src={scrumCert} className='certification-icon'/>
        </a>

        
        
        
      </div>
    </div>
  )
}