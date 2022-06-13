import './Hero.css'
import 'animate.css';


function Hero () {
    return (
        <div className=' hero border-l-4 '>
        <h1 id='h1'> Car Sharing Made Easy</h1>
        <p>Rent with style</p>
        <a className=" button-1"  >
        Book Now
        </a>

        <a className=" button-2"    >
About Us
        </a>
 
        </div>
    )
}

export default Hero;