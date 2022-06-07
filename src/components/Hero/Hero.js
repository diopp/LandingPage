import './Hero.css'

function Hero () {
    return (
        <div className=' hero border-l-4 border-indigo-500'>
        <h1> Car Sharing Made Easy</h1>
        <p>Rent with style</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Book Now
        </button>
      
        </div>
    )
}

export default Hero;