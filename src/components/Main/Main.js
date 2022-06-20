import './Main.css';
import Image from '../../Images/picture.gif'
import { AnimationOnScroll } from 'react-animation-on-scroll';



function Main () {
    return (
<section id='one' class="py-10 bg-black">
    <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">

        <div id='' class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div id= 'bg' class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last ">
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <img class="" src={Image} alt="" />
                </AnimationOnScroll>

            </div>
            <div id='div2' class="flex flex-col justify-center mt-5 mb-6 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <h1 id='header1' class=" uppercase">About us</h1>
                <h3 id='pr' class="mt-2 text-2xl sm:text-left md:text-4xl">WHO WE ARE</h3>
                <p id='p' class="mt-5 text-lg text-gray-700 text md:text-left">Ziko Group is a Management Consulting Firm providing solutions
                 powered by digital platforms to rideshare, automotive, and financial industries.</p>
                 <p id='p' class="mt-5 text-lg text-gray-700 text md:text-left">Ziko Motorsports is a division of Ziko Group specialized in providing on-demand car rentals that are efficient and reliable to the growing rideshare community.
</p>


               </AnimationOnScroll>
                <button id='button' className="button" href=''>
                <a href="#contact">Contact Us </a>
        </button>
            </div>

            
        </div>
     


    </div>




    
</section>



    )
}

export default Main;