import React from 'react';
import Lottie from "lottie-react";
import aboutPageAnimation from '../assets/aboutPageAnimation.json'

const About = () => {
    return (
        <main>
            <section className='md:flex gap-4'>
                <div className='md:w-1/2 mt-12'>
                    <Lottie animationData={aboutPageAnimation} loop={true} className='md:w-11/12'/>;
                </div>
                <article className='md:w-1/2 mx-auto '>
                    <h2 className='magic-title'>About Us</h2>
                    <p className='text-lg tracking-wide text-justify'>
                        At Magic Recipe, we are passionate about bringing the joy of cooking to everyone. Our mission is to provide our community with easy-to-follow recipes from around the world, coupled with helpful tips and tricks to make meal preparation a breeze. Whether you're a seasoned chef or just starting out, our site is designed to cater to all skill levels, providing you with everything you need to create delicious and memorable dishes. We believe that cooking should be enjoyable, and our team is dedicated to making the process as simple and stress-free as possible. Join us on our culinary journey and let's discover the magic of food together!
                    </p>
                </article>
            </section>
        </main>
    );
};

export default About;