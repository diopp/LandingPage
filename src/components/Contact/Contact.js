import './Contact.css'


function Contact () {


            return (
<div className='bg-black'>
                <section id='contact' class="w-full max-w-xl px-6 py-1 mx-auto bg-black rounded-md shadow-md ">
                <h1 id='header2' class=" uppercase">Contact Us</h1>
                <h3 id='pr1' class="mt-2 text-2xl sm:text-left md:text-4xl text-center">GET IN TOUCH</h3>
               
                
                <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                    <a href="https://www.google.com/maps/place/1000+N+West+St+suite+1200+building,+Wilmington,+DE+19801/@39.7471677,-75.5521784,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6fd3ff6591c49:0x33e3770057b3e565!8m2!3d39.7471677!4d-75.5499897"  class=" info flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 ">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
        
                        <span class="mt-2 text-center">1000 N West St SUITE 1200 </span>
                    </a>
        
                    <a href='/' class="info flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200  " >
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
        
                        <span class="mt-2">(302) 295-4975</span>
                    </a>
        
                    <a href="/" class="info flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
        
                        <span class="mt-2">example@example.com</span>
                    </a>
                </div>
                
                <div class="mt-6 ">
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="leading-7 text-sm text-gray-400">Name</label>
        
                            <input class="input w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" />
                        </div>
        
                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="leading-7 text-sm text-gray-400">E-mail</label>
        
                            <input class="input w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="email" />
                        </div>
                    </div>
        
                    <div class="w-full mt-4">
                        <label class="leading-7 text-sm text-gray-400">Message</label>
        
                        <textarea class="input w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700   h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
        
                    <div class="flex justify-center mt-6">
                        <button id='button' >Send Message</button>
                    </div>
                </div>
            </section>
            </div>


          
            );
        }
        

export default Contact;