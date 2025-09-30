import React, { useState } from 'react'
import Linkedin from '../assets/Linkedin.png'
import github from '../assets/github.png'
import whatsapp from '../assets/whatsapp.png'
// import oval from '../assets/Oval.png'
import copy from '../assets/copy.png'
import Group from '../assets/Group.png'
import { motion } from "framer-motion";
import val from '../assets/val.png'
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import kayode from '../assets/kayode.png';


const Home = () => {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSending) return;

        setIsSending(true);

        emailjs.sendForm(
            "service_oisi574",
            "template_lhk6z4z",
            e.target,
            "PMMaWACpQQw-yMdNA"
        )
            .then(
                (result) => {
                    toast.success("Message sent successfully! ✅");
                    e.target.reset();
                    setIsSending(false);
                },
                (error) => {
                    toast.error("Oops! Something went wrong ❌");
                    console.log(error.text);
                    setIsSending(false);
                }
            );
    };

    const skills = [
        { name: "HTML", level: "98%" },
        { name: "CSS / Tailwind", level: "85%" },
        { name: "JavaScript", level: "80%" },
        { name: "React", level: "75%" },
        { name: "Sass", level: "70%" },
        { name: "Accessibility", level: "85%" },
    ];

    const fadeInVariants = {
        hiddenLeft: { opacity: 0, x: -100 },
        hiddenRight: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };



    return (
        <main className="bg-black min-h-screen w-full ">
            <div className="flex flex-col md:flex-row items-center md:justify-between px-5 md:px-20 py-3 relative">
                <div className="text-white text-center text-2xl font-semibold md:font-bold md:text-3xl">
                    <h1>OMONIYI KAYODE ISAAC</h1>
                </div>

                <div className="flex flex-wrap justify-center md:flex-nowrap md:absolute md:right-20 md:top-1/2 md:transform md:-translate-y-1/2 items-center gap-4 mt-5 md:mt-0 z-[100]">
                    <a href="https://www.linkedin.com/in/omoniyi-kayode" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="linkedin" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:shadow-lg" />
                    </a>
                    <a href="https://github.com/kaytech11/Repositories" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50" />
                    </a>
                    <a href="https://wa.me/2349033019846?text=Hello%20Kayode%2C%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="whatsapp" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50" />
                    </a>
                </div>
            </div>

            <section className="relative">
                <img src={copy} alt=" copy" className=' absolute  w-40 md:w-70 mt-3  ' />
                {/* <img src={oval} alt="oval" className='absolute bottom right-0 w-30 h-50 hidden' /> */}
                <div className='flex flex-col-reverse md:flex-row  justify-between md:px-20 md:py-10  mx-5 md:mx-1'>
                    <div>
                        <h1 className="text-gray-500 text-3xl md:text-5xl font-extrabold text-center leading-snug mt-10 md:text-start mb-5">
                            Nice to meet you! <br />
                            I'm <span className="underline decoration-green-500 text-white">Kayode Omoniyi.</span>
                        </h1>

                        <p className="text-white text-base md:text-xl font-serif leading-relaxed text-center md:pt-5 md:text-start mb-5 md:text-wrap">
                            Based in Nigeria, I'm a Front end developer passionate about building accessible web apps
                            that users love.
                        </p>

                        <a href="mailto:kayodeomoniyi319@gmail.com">
                            <h3 className="underline decoration-green-500 text-center leading-tight md:text-start md:mr-[100%] md:pt-5 text-nowrap
                             text-white text-lg cursor-pointer hover:text-amber-100 hover:underline hover:decoration-green-200">
                                Contact me
                            </h3>
                        </a>
                    </div>

                    <div className="md:w-1/2 flex justify-center ">
                        <img src={kayode} alt="kayode" className="max-w-sm md:max-w-md
                         lg:max-w-lg mt-[-18%] w-50 md:w-80 md:mt-[-30%]
                        "/>
                    </div>
                </div>
                <motion.div
                    className="border-b-2 border-b-gray-500 md:mx-20 mx-5 py-10 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                />
            </section>
            {/* SKILLS */}
            <section className="relative overflow-x-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 px-10 py-10 md:flex-nowrap">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="p-4 overflow-x-hidden "
                            variants={fadeInVariants}
                            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight" }
                            whileInView="visible"
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h1 className="text-white text-2xl md:text-3xl font-bold ">{skill.name}</h1>
                            <div className="w-full mt-2 ">
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-400 text-sm md:text-base font-semibold">
                                        Proficiency
                                    </span>
                                    <span className="text-gray-400 text-sm md:text-base font-semibold">
                                        {skill.level}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-3">
                                    <motion.div
                                        className="bg-gray-500 h-3 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <img src={val} alt=" val" className=' absolute bottom-0 right-0 w-40 md:w-70 ' />
            </section>

            {/* PROJECTS */}
            <section>
                <div className="flex justify-between items-center py-10 md:mx-10 px-10">
                    <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

                    <a href="mailto:kayodeomoniyi319@gmail.com" className="relative group"  >
                        <h1 className="text-lg md:text-2xl text-white font-semibold cursor-pointer">
                            Contact
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </h1>
                    </a>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-5 md:mx-10 px-10 py-10'>

                    <div className="relative group bg-red-500 p-5 text-white h-60 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center h-full">Item 1</div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" className="bg-green-500 text-white px-4 py-2 mb-2 rounded hover:bg-green-600">View Project</a>
                            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Code</a>
                        </div>
                    </div>

                    <div className="relative group bg-blue-500 p-5 text-white h-60 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center h-full">Item 2</div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" className="bg-green-500 text-white px-4 py-2 mb-2 rounded hover:bg-green-600">View Project</a>
                            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Code</a>
                        </div>
                    </div>

                    <div className="relative group bg-green-500 p-5 text-white h-60 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center h-full">Item 3</div>
                        <div className="absolute inset-0 bg-transparent  bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" className="bg-green-500 text-white px-4 py-2 mb-2 rounded hover:bg-green-600">View Project</a>
                            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Code</a>
                        </div>
                    </div>

                    <div className="relative group bg-yellow-500 p-5 text-white h-60 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center h-full">Item 4</div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" className="bg-green-500 text-white px-4 py-2 mb-2 rounded hover:bg-green-600">View Project</a>
                            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Code</a>
                        </div>
                    </div>

                    <div className="relative group bg-purple-500 p-5 text-white h-60 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center h-full">Item 5</div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" className="bg-green-500 text-white px-4 py-2 mb-2 rounded hover:bg-green-600">View Project</a>
                            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Code</a>
                        </div>
                    </div>

                    <div className="relative group bg-pink-500 p-5 text-white h-60 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center h-full">Item 6</div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" className="bg-green-500 text-white px-4 py-2 mb-2 rounded hover:bg-green-600">View Project</a>
                            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Code</a>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-gray-800 relative">
                <div className="flex flex-col lg:flex-row justify-between md:mx-10 px-10 py-10 gap-10">

                    {/* Left text */}
                    <div className="lg:w-1/2 text-center lg:text-start">
                        <h1 className="text-5xl text-white font-bold font-serif pt-10">
                            CONTACT
                        </h1>
                        <p className="text-md text-gray-200 font-medium pt-5 font-serif">
                            I would love to hear about your projects and how I <br />
                            could help. Please fill in the form, and I will get back <br />
                            to you as soon as possible.
                        </p>
                        <img src={copy} alt=" copy" className=' absolute  w-20 lg:w-90 mt-3 bottom-30 left-0 lg:pt-10' />
                    </div>

                    {/* Form */}
                    <div className="lg:w-1/2 pt-10">
                        <form onSubmit={handleSubmit} className="space-y-4 ">
                            <div>
                                <label htmlFor="name" className="block text-sm text-white mb-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full rounded-md border border-gray-600 bg-black text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-white mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full rounded-md border border-gray-600 bg-black text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-white mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full rounded-md border border-gray-600 bg-black text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-md bg-green-600 cursor-pointer text-white py-3 font-semibold hover:bg-green-500 transition"
                                disabled={isSending}
                            >
                                {isSending ? "Sending..." : "Send"}
                            </button>
                        </form>
                        {/* Toast notifications container */}
                        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
                    </div>
                </div>
                <motion.div
                    className="border-b-2 border-b-gray-500 md:mx-20 mx-5 py-10 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                />

                <div className="flex flex-col md:flex-row items-center md:justify-between px-20 py-10  ">
                    <div className="text-white text-center text-2xl font-semibold md:font-bold md:text-4xl items-center justify-center">
                        <h1> KAYODE </h1>
                    </div>
                    <div className="flex  items-center gap-5 mt-5 ">
                        <a href="https:www.linkedin.com/in/omoniyi-kayode" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="linkedin" className="w-10 h-10 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:shadow-lg 
          " /></a>
                        <a href="https://github.com/kaytech11/Repositories" target="_blank" rel="noopener noreferrer ">
                            <img src={github} alt="github" className="w-10 h-10 rounded-full cursor-pointer transition duration-300
                hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50" /></a>
                        <a href="https://wa.me/2349033019846?text=Hello%20Kayode%2C%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="whatsapp" className="w-10 h-10 rounded-full transition duration-300 
          hover:scale-110 hover:shadow-lg hover:shadow-green-500/50" /></a>
                    </div>
                </div>
            </section>
            <div>

            </div>

        </main >
    )
}

export default Home
