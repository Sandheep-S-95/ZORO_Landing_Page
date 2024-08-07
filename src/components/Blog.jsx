import React from 'react';

const Card = ({ name, image, title }) => (
    <div className="w-full max-w-sm bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-xl overflow-hidden transition-transform duration-[2000ms] ease-in-out hover:rotate-[360deg]">
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shine"></div>
            <div className="p-6">
                <div className="flex justify-center">
                    <div className="relative">
                        <img className="w-32 h-32 rounded-full border-4 border-white shadow-lg" src={image} alt={`${name} image`} />
                    </div>
                </div>
                <div className="text-center mt-6">
                    <h5 className="mb-2 text-2xl font-bold text-white shadow-text">{name}</h5>
                    <span className="text-sm font-medium text-teal-900">{title}</span>
                </div>
            </div>
        </div>
    </div>
);






function Blog() {
    const cards = [
        {
            name: "Pranjal Borah",
            image: "path_to_image1.jpg",
            title: "Level-4 Certified Fitness Trainer",
        },
        {
            name: "Kamali",
            image: "path_to_image2.jpg",
            title: "Prehab & Rehab Specialist",
        },
        {
            name: "Priyanka",
            image: "path_to_image2.jpg",
            title: "Zumba Instructor",
        },
        {
            name: "Karthi",
            image: "path_to_image3.jpg",
            title: "Physiotherapist",
        },
        {
            name: "Rajan",
            image: "path_to_image4.jpg",
            title: "Yoga Instructor",
        },
        {
            name: "Deepak",
            image: "path_to_image4.jpg",
            title: "Diabetes Specialist",
        },
    ];

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className="text-center md:w-1/2 mx-auto">
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>
                    Our Team
                </h2>
                <p className="text-xl text-neutralDGrey mb-8 md:w-3/4 mx-auto">
                At Zorro , our team is the heart of everything we do. Comprised of passionate, innovative, and 
                talented individuals, we are dedicated to driving forward the vision and goals of our company. Meet the 
                people who make it all happen :
                </p>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
