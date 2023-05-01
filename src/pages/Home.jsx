import React from 'react';
import bannerImg from '../assets/2.png'
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../componets/chefCard';


const Home = () => {
    const chefInfo = useLoaderData()
    return (
        <main>
            {/* Banner Section */}
            <section className='md:flex items-center justify-between bg-orange-300 px-6 py-8 rounded-md my-8'>
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
            {/* Chef Section */}
            <section className='my-12'>
                <h3 className='magic-title text-orange-500'>Our Honorable Chefs</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        chefInfo.map(chef => (
                            <ChefCard
                                key={chef.id}
                                chef={chef}
                            ></ChefCard>
                        ))
                    }
                </div>
            </section>
            {/* Subscription section */}
            <section className='my-12 bg-orange-300 px-2 py-6 rounded-md'>
                <h3 className="magic-title">Subscribe For Latest Updates</h3>
                <div className=''>
                    <form className='md:flex items-center justify-center pb-4'>
                        <input type="email" name="email" id="email" placeholder='Your Email Address' className='outline-none border border-orange-400 rounded-md md:mx-4 w-full md:w-1/3 px-4 py-2 text-xl' />
                        <input type="submit" value="Subscribe" className='magic-btn cursor-pointer block  mt-4 w-full md:w-auto md:mt-0' />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Home;