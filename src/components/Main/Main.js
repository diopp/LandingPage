import './Main.css'

function Main () {
    return (
<section class="py-25 bg-black">
    <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">

        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div id= 'bg' class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img class="" src="https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-6 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <h1 id='header1' class="mb-1 text-sm font-semibold leading-none text-left  uppercase">Who We Are</h1>
                <h3 id='pr' class="mt-2 text-2xl sm:text-left md:text-4xl">Carsharing service.</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">Crafting your user experience has never been easier, with our intuitive drag'n drop interface you will be creating beatiful designs in no time.
                Crafting your user experience has never been easier, with our intuitive drag'n drop 
                
                interface you will be creating beatiful designs in no time
               .</p>
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