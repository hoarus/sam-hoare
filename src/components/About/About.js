import React from "react";

// images
import programmingIcon from '../images/about-icons/programming_icon.svg'
import writingIcon from '../images/about-icons/writing_icon.svg'
import travellingIcon from '../images/about-icons/travelling_icon.svg'
import hikingIcon from '../images/about-icons/hiking_icon.svg'
import scubaIcon from '../images/about-icons/scuba_icon.svg'


export default function About(){

  return(
    <div className="about flex-container">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, natus officia ipsum quia temporibus
        pariatur consectetur nostrum dignissimos qui voluptatibus! Odit fugiat voluptatibus quas expedita, excepturi
        nulla maiores corrupti praesentium.</p>
      <h3>Programming</h3>
      <img src={programmingIcon}className="icon"/>
      <p>I recently taught myself to program and build increasingly complex websites. 
        This demonstrates my drive, autonomy, and problem-solving abilities.</p>
      <h3>Writing</h3>
      <img src={writingIcon} className="icon"/>
      <p>Writing short stories and redrafting novels again and again has taught me determination, 
        communication, and the importance of listening to people's stories.</p>
      <h3>Travelling</h3>
      <img src={travellingIcon}className="icon"/>
      <p>Two years of backpacking around the world has taught me how to empathize and communicate 
        with people from all walks of life.</p>
      <h3>Hiking</h3>
      <img src={hikingIcon} className="icon"/>
      <p>Hiking for two weeks through the Himalayas while battling a nasty parasite has taught 
          me that determination pays dividends.</p>
      <h3>Diving</h3>
      <img src={scubaIcon} className="icon"/>
      <p>Lastly, spending three months as a dive guide in Borneo has taught me that through patience, 
        listening, and empathizing, you can empower people to accomplish a lot more than they might initially believe.</p>
    </div>
  )
}