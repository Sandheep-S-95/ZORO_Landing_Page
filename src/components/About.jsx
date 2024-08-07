import React from "react";
import compImage from "../assets/ZorroWood.jpg";

import patient from '../assets/Extra/patient.png';
import physio from '../assets/Extra/people.png';
import yoga from '../assets/Extra/lotus.png';
import sport from '../assets/traits/sport.png';


function About() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* about text */}
      <div className="px-4 lg:px-14 my-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={compImage} 
                  alt="" 
                  className="w-64 h-64 object-cover rounded-full transform transition-transform duration-500 hover:scale-110 animate-float"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 animate-fade-in-down">
              Zorro
            </h2>
            <p className="text-xl text-neutralGrey mb-8 animate-fade-in-up">
              Zorro was founded with the mission to raise awareness and educate people about lifestyle diseases and how to reverse them naturally. We are a team of experienced and educated professionals dedicated to providing high-quality service through both theoretical and practical approaches, while adhering to global standards.
            </p>
            <button className="inline-flex items-center justify-center text-white px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Learn More
            </button>


          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 bg-neutralSilver py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-6xl text-neutralDGrey font-semibold mb-4 animate-fade-in-left">
            Spearheading a <br className="hidden lg:block" /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
                healthy society
              </span> 
            </h2>
            <p className="text-sm text-neutralGrey animate-fade-in-left">We are dedicated to spearheading a healthy society through our comprehensive yoga classes, expert physiotherapy services, and patient-centered wellness programs.</p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { img: patient, phrase: "Trusted by" , text: "Patients" },
              { img: physio, phrase: "Expertise in" ,text: "Physiotherapy" },
              { img: yoga, phrase: "Rejuvenating" ,text: "Yoga Sessions" },
              { img: sport, phrase: "Entrusted" ,text: "Team" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in-up">
                <img src={item.img} alt="" className="w-12 h-12" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">{item.phrase}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;