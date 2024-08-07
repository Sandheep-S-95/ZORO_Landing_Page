import React from "react";
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.css'; // Import Flowbite's CSS
import checkImage from '../assets/check1.png';
import zumImage from '../assets/aZ.png';
import doctorImage from '../assets/freedoc.png';


function Home() {
    return (
        <div className="bg-neutralSilver px-2 sm:px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen mt-0">
            <Carousel className="w-full mx-auto">
                {/* Check Image Slide */}
                <div className="my-2 sm:my-4 md:my-8 py-0 flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-6 lg:gap-12">
                    <div className="w-full lg:w-auto lg:flex-shrink-0 order-first lg:order-last">
                        <img 
                            src={checkImage} 
                            alt="Check Image" 
                            className="mx-auto lg:ml-auto lg:mr-0 max-h-[30rem] sm:max-h-[35rem] md:max-h-[40rem] lg:max-h-[52rem] max-w-full lg:max-w-[44rem] object-contain"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full text-center lg:text-left order-last lg:order-first mt-4 lg:mt-0">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-2 sm:mb-4 text-neutralDGrey leading-tight sm:leading-snug">
                        Designed to assist in reversal of <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-glowing">
                            Metabolic Diseases
                        </span>
                        </h1>
                        <p className="text-neutralDGrey text-base mb-8">Discover how our personalized approach can help you manage and potentially reverse diabetes.
                        </p>
                    </div>
                </div>
                {/* Heart Image Slide */}
                <div className="my-2 sm:my-4 md:my-8 py-0 flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-6 lg:gap-12">
                    <div className="w-full lg:w-auto lg:flex-shrink-0 order-first lg:order-last">
                        <img 
                            src={zumImage} 
                            alt="Heart Image" 
                            className="mx-auto lg:ml-auto lg:mr-0 max-h-[40rem] sm:max-h-[45rem] md:max-h-[50rem] lg:max-h-[60rem] max-w-full lg:max-w-[55rem] object-contain"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full text-center lg:text-left order-last lg:order-first mt-4 lg:mt-0">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-2 sm:mb-4 text-neutralDGrey leading-tight sm:leading-snug">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-glowing">
                                Zumba Classes<br/> 
                            </span>
                            for a Healthier You
                        </h1>
                        <p className="text-neutralDGrey text-base mb-8">Experience the joy of fitness with our exhilarating Zumba classes!
                        </p>
                        
                    </div>
                </div>
                {/* Doctor Image Slide */}
                {/* Doctor Image Slide */}
<div className="my-2 sm:my-4 md:my-8 py-0 flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-6 lg:gap-12">
    <div className="w-full lg:w-auto lg:flex-shrink-0 order-first lg:order-last">
        <img 
            src={doctorImage} 
            alt="Doctor Image" 
            className="mx-auto lg:ml-auto lg:mr-0 max-h-[30rem] sm:max-h-[40rem] md:max-h-[50rem] lg:max-h-[45rem] max-w-full lg:max-w-[45rem] object-cover"
        />
    </div>
    <div className="lg:w-1/2 w-full text-center lg:text-left order-last lg:order-first mt-4 lg:mt-0">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-2 sm:mb-4 text-neutralDGrey leading-tight sm:leading-snug">
            Expert Guidance with<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-glowing">
                Every Doctor Consultation
            </span>
        </h1>
        <p className="text-neutralDGrey text-base mb-8">Consult with experts and take charge of your health today!
        </p>
    </div>
</div>

            </Carousel>
        </div>
    );
}

export default Home;
