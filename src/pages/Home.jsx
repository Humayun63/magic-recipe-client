import React from 'react';
import bannerImg from '../assets/2.png'

const Home = () => {
    return (
        <main>
            {/* Banner Section */}
            <section className='md:flex items-center justify-between bg-orange-300 px-6 py-8 rounded-md'>
                <div className='md:w-1/3'>
                    <img src={bannerImg} alt="" className='w-full object-contain' />
                </div>
                <div className='md:w-1/2 mt-4'>
                    <h2 className='font-bold text-4xl mb-6'>Welcome to Magic Recipe</h2>
                    <p className='text-justify text-lg'>
                        Magic Recipe is a culinary hub that offers a diverse range of easy-to-follow recipes from around the world. Our site is designed for cooking enthusiasts of all levels, providing detailed instructions, ingredients lists, cooking tips, and nutritional information to make meal preparation a breeze. In addition to our recipe collection, we also offer cooking-related content, such as kitchen hacks and cooking techniques, to help you become a better cook. Let Magic Recipe inspire you to create unforgettable dishes that will delight your family and friends.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;