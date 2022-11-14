import React from "react";
import Formatting from "./AboutMe.module.css";
import Toast from '../images/Toast.jpg';

function AboutMe(){
  return(  <div className={Formatting.div}>
    <div className={Formatting.picContainer}>
<img className={Formatting.pic} src={Toast} alt="Rick with his cat"/>
</div>
<p className={Formatting.p}> My name is Rick Frausto. I'm a 6 year veteran of the Air Force with a life-long interest in technology and how it all works. My background is in aerospace ground equipment maintenance,
    but I've happily made the leap over into software development. I created this tool, the Frosty Fitness Logger, as a way to track the excercises
    and workouts excecuted in a session at the gym. I am an avid gym goer and health enthusiast and what I have found is that these loggers either are not a polished end product,
    or the price tag is not worth the product. That is why I took it upon myself to create my own version of this tool. An early work in progress, I intend to add a
    few key features before I am satisfied with its progress. Thanks for checking it out!</p>
   
</div>
  )
}

export default AboutMe;