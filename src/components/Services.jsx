import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

import plan from '../assets/traits/plan.png';
import diet from '../assets/traits/diet.png';
import zumba from '../assets/traits/zumba.png';
import skipRope from '../assets/traits/skip-rope.png';
import doctor from '../assets/traits/doctor.png';
import glucosemeter from '../assets/traits/glucosemeter.png';

function Services() {
    const services = [
        { id: 1, title: "Facebook", icon: FaFacebookF, gradient: "from-blue-400 to-blue-600", hoverGradient: "hover:from-blue-500 hover:to-blue-700", link: "https://www.facebook.com/share/5682FWT6BfCf2vfK/?mibextid=qi2Omg" },
        { id: 2, title: "Instagram", icon: FaInstagram, gradient: "from-pink-500 to-purple-500", hoverGradient: "hover:from-pink-600 hover:to-purple-600", link: "https://www.instagram.com/zorro_tamil?igsh=N2t0ZXZkdnNhbmI1" },
        { id: 3, title: "YouTube", icon: FaYoutube, gradient: "from-red-500 to-red-600", hoverGradient: "hover:from-red-600 hover:to-red-700", link: "https://www.youtube.com/@Zorrohealthtech" }
    ];

    const handleClick = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Social Media</h2>
                <p className="text-neutralGrey">Connect with us on various platforms</p>
            </div>

            <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                <img src={plan} alt="Plan" className="w-16 h-16" />
                <img src={diet} alt="Diet" className="w-16 h-16" />
                <img src={zumba} alt="Zumba" className="w-16 h-16" />
                <img src={skipRope} alt="Skip Rope" className="w-16 h-16" />
                <img src={doctor} alt="Doctor" className="w-16 h-16" />
                <img src={glucosemeter} alt="Glucosemeter" className="w-16 h-16" />
            </div>

            {/* Cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className={`px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg overflow-hidden relative group`}
                        onClick={() => handleClick(service.link)}
                    >
                        {/* Glowing background effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-lg`}></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <div className={`h-20 w-20 mx-auto rounded-full bg-gradient-to-r ${service.gradient} ${service.hoverGradient} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                                <service.icon className="text-white text-3xl" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mt-4 mb-2">{service.title}</h4>
                            <p className="text-sm text-white px-4">Connect with us on {service.title}</p>
                        </div>
                        
                        {/* Radial gradient animation */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;