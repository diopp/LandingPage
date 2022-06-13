import './Hero.css'
import 'animate.css';
import { Link } from "react-router-dom";


function Hero () {
    return (
        <div className=' hero border-l-4 '>
        <h1 id='h1'> Car Sharing Made Easy</h1>
        <p>Rent with style</p>
        <a className=" button-1" href='https://www.hyrecar.com/howitworks' target="_blank" >
        Book Now
        </a>

        <a className=" button-2" href="#one"  alt=''    >
About Us
        </a>
 
        </div>
    )
}

export default Hero;