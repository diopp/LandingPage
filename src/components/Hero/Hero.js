import './Hero.css'
import 'animate.css';



function Hero () {
    return (
        <div className=' hero border-l-4 '>
        <h1 id='h1'> Car Sharing Made Easy</h1>
        <p>Rent with style</p>
        <button className=" button-1"  >
        <a href="https://www.hyrecar.com/" target="_blank" >Book Now</a>
        </button>

        <button className='button-2'><a href="#one">About Us</a></button>



 
        </div>
    )
}

export default Hero;