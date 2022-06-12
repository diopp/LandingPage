import './Hero.css'
import 'animate.css';
import { Link } from "react-router-dom";


function Hero () {
    return (
        <div className=' hero border-l-4 '>
        <h1> Car Sharing Made Easy</h1>
        <p>Rent with style</p>
        <button className=" button-1  ">
        Book Now
        </button>

        <button className=" button-2" href='/about' alt=''    >
        <Link to="about">About Us</Link>
        </button>
 
        </div>
    )
}

export default Hero;