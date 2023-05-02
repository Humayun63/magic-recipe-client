import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <main>
            <section className='text-center bg-orange-300 p-4'>
                <h3 className='magic-title'>Download All Questions and Answers</h3>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='magic-btn' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </section>

            <section className='my-12' ref={ref}>
                <h2 className='magic-title text-orange-400'>Blog Questions</h2>
                <article className='bg-orange-300 px-4 py-8 rounded-md my-8'>
                    <h3 className='magic-blog-title'>Tell us the differences between uncontrolled and controlled components.</h3>
                    <p className='text-lg tracking-wide text-justify'>
                        There are two different types of components in React, controlled and uncontrolled components. The controlled component is that which is controlled by React and in another hand, the Uncontrolled component is that which is controlled by itself (manages state internally). The basic differences between these two components are:
                        <li className='my-4 mx-6'>
                            For controlled components, value is managed by React state, and for uncontrolled components, it manages its value by its own internal state.
                        </li>
                        <li className='my-4 mx-6'>
                            For the controlled component, data flows from parent to children and for the uncontrolled component, data flows within the component.
                        </li>
                        <li className='my-4 mx-6'>
                            Controlled component is considered as best practice whereas an uncontrolled component is considered as an alternate approach.
                        </li>
                        <li className='my-4 mx-6'>
                            Uncontrolled component is more complex than controlled component.
                        </li>
                    </p>
                </article>
                <article className='bg-orange-300 px-4 py-8 rounded-md my-8'>
                    <h3 className='magic-blog-title'>How to validate React props using PropTypes</h3>
                    <p className='text-lg tracking-wide text-justify'>
                        PropTypes is a React package that is used to validate component props. First you have to install it using <span className='bg-slate-100 p-1 rounded-md text-slate-800 text-base'>'npm install prop-types'</span> command. Then you have to import it " <span className='bg-slate-100 p-1 rounded-md text-slate-800 text-base'>import PropTypes from 'prop-types'</span>"
                        Suppose, you have a component that has name, age and dress props that are string, number and object type. Then you have to code like this, <br />
                        <code className='bg-slate-100 p-1 rounded-md text-slate-800 text-base'>
                            {'{'}ComponentName.propTypes =
                            name: PropTypes.string,
                            age: PropTypes.number,
                            dress: PropTypes.object
                            {'}'}
                        </code>
                    </p>
                </article>
                <article className='bg-orange-300 px-4 py-8 rounded-md my-8'>
                    <h3 className='magic-blog-title'>Tell us the difference between nodejs and express js</h3>
                    <p className='text-lg tracking-wide text-justify'>
                        Node.js and Express.js both are used for building backend applications. But there are some differences like,
                        <li className="mx-6 my-4">Node.js is a Run-time platform or environemnt designed for server-side execution of Javascript. Express.js is a small framework based on Node.js</li>
                        <li className="mx-6 my-4">Node.js doesn't have any middleware, where as Express.js uses middleware.</li>
                        <li className="mx-6 my-4">Express.js is more simplified than Node.js</li>
                        <li className="mx-6 my-">Express.js has more features than Node.js</li>
                        <li className="mx-6 my-4">Express.js is written with JavaScript but Node.js is written with C, C++, JavaScript</li>
                    </p>
                </article>
                <article className='bg-orange-300 px-4 py-8 rounded-md my-8'>
                    <h3 className='magic-blog-title'>What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='text-lg tracking-wide text-justify'>
                        Custom hooks are a feature in React that allows developers to extract common logic into reusable functions. Hooks are basically just plain JavaScript functions that allow for state management in functional components. Custom hooks are named with a 'use' prefix and, like all functions, can accept arguments and return values. Using custom hooks can help follow the DRY (Don't Repeat Yourself) principle because they can be reused across different components. <br />
                        Some Uses of Custom hook:
                        <li className="my-4 mx-6">Reuse code logic</li>
                        <li className="my-4 mx-6">Share state between components</li>
                        <li className="my-4 mx-6">Handle complex thoughts</li>
                    </p>
                </article>
            </section>
        </main>
    );
};

export default Blog;