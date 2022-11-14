import React from "react";
import Format from '../components/Welcome.module.css';
import penguin from '../images/penguin.png';
import {BrowserRouter as Router ,Link} from 'react-router-dom';

function WelcomeComponent(){
return(
<router><div>
<div className={Format.container}> Welcome to the Frosty Fitness Logger</div>
<p className={Format.picContainer}><img className={Format.pic}src={penguin} alt="this is a fit snowman"/></p>
<p className={Format.btn1}>
        <Link to="/excercises">
          <button>Get Started</button>
        </Link>
        </p>
</div>
</router>
)
}

export default WelcomeComponent;