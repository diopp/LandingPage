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
            <AnimationOnScroll animateIn="animate__fadeInDown">
                <h1 id='header1' class="mb-1 text-sm font-semibold leading-none text-left  uppercase">Who We Are</h1>
                <h3 id='pr' class="mt-2 text-2xl sm:text-left md:text-4xl">Carsharing service.</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">Crafting your user experience has never been easier, with our intuitive drag'n drop interface you will be creating beatiful designs in no time.
                Crafting your user experience has never been easier, with our intuitive drag'n drop 
                
                interface you will be creating beatiful designs in no time
               .</p>
               </AnimationOnScroll>
                <button id='button' className="button">
        Learn More
        </button>
            </div>

            
        </div>
     


    </div>
</section>



    )
}

export default Main;