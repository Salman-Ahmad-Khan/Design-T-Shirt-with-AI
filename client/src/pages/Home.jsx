import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { FaXTwitter } from "react-icons/fa6";

// Import script, styles and initialize AOS:
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

// Import custom components and animations
import { CustomButton } from "../components";
import {
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";


/* ------------------- Component Home ------------------- */

const Home = () => {


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initialize state and effects
  useEffect(() => {
    // Handle checkboxes for FAQ section
    const checkboxes = document.querySelectorAll(
      '.accordion input[type="checkbox"]'
    );
    if (checkboxes.length > 0) {
      checkboxes[0].checked = true;
      checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", function () {
          if (this.checked) {
            checkboxes.forEach((cb, idx) => {
              if (idx !== index) {
                cb.checked = false;
              }
            });
          }
        });
      });
    }
  }, []);

  // Define 1st FAQ data
  const faqData = [
    {
      question: "Is the service currently free?",
      answer:
        "Yes, our service is currently offered for free. Take advantage of the opportunity to explore and create personalized T-shirt designs at no cost.",
    },
  ];
  // Get current state snapshot
  const snap = useSnapshot(state);


  

  return (
    <AnimatePresence>
      {/* Render components based on state */}
      {snap.intro && (
        <section className="home" id="home">
          {/* Header section */}
          <header {...slideAnimation("down")}>
            {/* Logo image */}
            <img
              src="./brand-logo.png"
              alt="logo"
              loading="lazy"
              className="absolute top-1 left-1 w-10 object-contain bg-white rounded"
            />
            {/* Link to home page */}
            <a
              onClick={() => {
                state.intro = true;
              }}
              className="logo absolute top-2 left-12 text-2xl font-extrabold text-white cursor-pointer"
            >
              Fashionify.ai
            </a>
          </header>

        
        




          {/* Announement, visible only for large screens*/}
          <div className="hidden sm:block md:block lg:block xl:block">
            <a
              onClick={() => {
                state.intro = false;
              }}
              className="mx-auto fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center overflow-hidden rounded-full glassmorphism px-4 py-2 transition-all hover:scale-95 cursor-pointer text-blue-100 glass hover:text-blue-200 hover:glass"
            >
              <span className="flex rounded-full bg-gradient-to-r from-red-500 via-red-500 to-red-500 uppercase px-2 py-1 text-xs font-bold mr-1 font-mono text-white">
                New
              </span>
              <svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 18 19"
>
  <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
</svg>

              <p className="text-sm  text-nowrap">&nbsp;
              Introducing our brand new tool,&nbsp; 
              <span className="text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">check it out here</span>.

              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>



          {/* Main content section */}
          <motion.div
            className="home-content relative flex w-full flex-col items-center sm:mt-16"
            {...headContainerAnimation}
          >
            {/* Title text */}
             <motion.div {...headTextAnimation} >
              <h1 className="head-text text-center font-extrabold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
               From Imagination to Fashion
               </h1>
            </motion.div>

            {/* Mockup section */}
            <div
              className="bg-gradient-to-br from-transparent via-orange-950 to-transparent absolute left-0 mockup-code hidden lg:block xl:block -translate-x-16 translate-y-12 transition duration-1000 cursor-pointer hover:glass"
              {...slideAnimation("left")}
            >
              <pre data-prefix="" className="text-opacity-60  text-white">
                <code>Key Design Features</code>
              </pre>
              <pre data-prefix="✅" className="text-green-400">
                <code>AI infused style</code>
              </pre>
              <pre data-prefix="✅" className="text-warning">
                <code>Fully unique designs</code>
              </pre>

              <pre data-prefix="✅" className="text-accent">
                <code>Create your style with Fashionify.ai</code>
              </pre>
              <pre data-prefix="✅" className="text-secondary">
                <code>Select all over or front </code>
              </pre>
              <pre data-prefix="✅" className="text-success">
                <code>Design with just few clicks</code>
              </pre>

              <pre data-prefix="✅" className="base-content">
                <code>Upload your own artwork</code>
              </pre>

              <pre data-prefix="✅" className="text-indigo-500">
                <code>Choose your colors</code>
              </pre>
              <pre data-prefix="✅" className="text-error">
                <code>Preview design in 3D & save it</code>
              </pre>
              {/* Divider */}
              <div className="divider"></div>
              {/* Try Fashionify call-to-action button*/}
              <pre data-prefix="" className="text-info">
                <code>
                  Try{" "}
                  <a
                    className="link hover:text-blue-500"
                    onClick={() => {
                      state.intro = false;
                    }}
                  >
                    Fashionify
                  </a>{" "}
                  and
                </code>
              </pre>
              <pre data-prefix="" className="text-orange-500">
                <code>Apply your own design decisions!</code>
              </pre>
            </div>

            {/* Main content text */}
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-1"
            >
              {/* Main content text paragraph */}

              <span className=" max-w-lg text-center text-2xl  text-gray-400">
                Fashionify transforms your creative ideas into stylish, wearable
                T-Shirt designs with cutting-edge{" "}
                <span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                  <span className="relative text-gray-300">AI-driven 3D</span>{" "}
                </span>{" "}
                customization. Discover fashion that's uniquely yours.
                <p className="text-blue-500 md:text-green-400 text-base font mt-4 text-nowrap xs:text-blue-500">
                  Free, no signups, no credit cards.
                </p>
              </span>
            </motion.div>

            {/* Try Fashionify call-to-action button*/}
            <motion.div
              className="mt-10 mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0 sm:gap-x-4"
              {...headContentAnimation}
            >
              <a
                onClick={() => {
                  state.intro = false;
                }}
                className="card shadow-2xl flex flex-row items-center justify-center gap-x-2 rounded-2xl text-white px-10 py-3 hover:scale-95 cursor-pointer text-xl text-nowrap"
              >
                {/* Get Started Free */}
                Start Designing Free
              </a>

              <a
                // href="#how-it-works"
                onClick={() => scrollToSection('how-it-works')}
                className="flex flex-row items-center justify-center rounded-2xl border px-10 py-3 text-white text-xl hover:scale-95 text-nowrap cursor-pointer"
              >
                Learn More
                {/* Arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

         
 
 





          {/* Carousel section, only visible to sm */}
 {/* <section className="carousel carousel-center  p-4 space-x-4  rounded-box">

  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
  </div>


</section> */}


          {/* Features section */}
          <div className="home-content mt-10">
            <div className="bg-transparent mt-32" id="whywe">
              <section id="features" className="relative block ">
                <div className="relative mx-auto max-w-5xl text-center">
                  {/* Title text */}
                  <span data-aos="zoom-in" data-aos-duration="1000" className="text-green-500 my-3 flex items-center justify-center font-bold uppercase tracking-wider text-2xl overflow-x-hidden">
                    Why choose us
                  </span>
                  <h2 data-aos="fade-down" data-aos-duration="1500" className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl overflow-x-hidden">
                    Create Customized T-shirt Designs You Adore
                  </h2>
                  {/* Description text */}
                  <p data-aos="fade-up-left" data-aos-duration="1200" className="mx-auto my-4 w-full max-w-xl bg-transparent text-center tracking-wide text-gray-400 overflow-x-hidden">
                    Our AI-powered 3D platform offers unparalleled
                    customization. Zero technical expertise needed – our
                    user-friendly design tools streamline the process
                    effortlessly.
                  </p>
                </div>
                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Feature card 1 */}
                  <div data-aos="zoom-in-right" data-aos-duration="3000" className="rounded-md border border-neutral-500 bg-gradient-to-bl from-transparent via-pink-900 to-transparent overflow-x-hidden p-8 text-center shadow transition duration-1000 cursor-pointer hover:glass hover:-translate-y-3">
                    <div className="button-text mx-auto flex items-center justify-center rounded-md ">
                      {/* Feature image */}
                      <img
                        src="./prompt.jpg"
                        alt="prompt"
                        loading="lazy"
                        className=" w-48 object-contain rounded-full"
                      />
                    </div>
                    {/* Feature title */}
                    <h3 className="mt-6 font-semibold text-white text-xl">
                      Provide your prompt
                    </h3>
                    {/* Feature description */}
                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
                      Simply type a short description of what you want on your
                      t-shirt.
                    </p>
                  </div>
                  {/* Feature card 2 */}
                  <div data-aos="zoom-out-down" data-aos-duration="3000" className="rounded-md border border-neutral-500 bg-gradient-to-br from-transparent via-orange-900 to-transparent p-8 text-center shadow transition duration-1000 cursor-pointer overflow-x-hidden hover:glass hover:-translate-y-3">
                    <div className="button-text mx-auto flex  items-center justify-center rounded-md ">
                      {/* Feature image */}
                      <img
                        src="./perdesign.jpg"
                        alt="perdesign"
                        loading="lazy"
                        className=" w-48 object-contain rounded-full"
                      />
                    </div>
                    {/* Feature title */}
                    <h3 className="mt-6 font-semibold text-white text-xl ">
                      Fashion Designed by AI
                    </h3>
                    {/* Feature description */}
                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
                      Our AI at Fashionify converts your concepts into
                      personalized t-shirt designs, prepared for wear.
                    </p>
                  </div>
                  {/* Feature card 2 */}
                  <div data-aos="zoom-in-left" data-aos-duration="3000" className="rounded-md border border-neutral-500 bg-gradient-to-br from-transparent via-green-700 to-transparent p-8 text-center shadow transition duration-1000 cursor-pointer overflow-x-hidden hover:glass hover:-translate-y-3">
                    <div className="button-text mx-auto flex  items-center justify-center rounded-md  ">
                      {/* Feature image */}
                      <img
                        src="./printing.jpg"
                        alt="printing"
                        loading="lazy"
                        className=" w-48 object-contain rounded-full"
                      />
                    </div>
                    {/* Feature title */}
                    <h3 className="mt-6 font-semibold text-white text-xl">
                      Preview & Save
                    </h3>
                    {/* Feature description */}
                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
                      Select your desired colors and style. Save it instantly
                      for your use.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Try Fashionify call-to-action button*/}
          
            <a data-aos="fade-right"
              onClick={() => {
                state.intro = false;
              }}
              className="card mt-30 w-fit flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 hover:scale-95  cursor-pointer text-xl mt-20"
              
            >
              <svg
                className="h-[30px] text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                strokeWidth={3}
                fill="none"
              >
                <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z" />
                <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52" />
                <circle cx="39.46" cy="24.56" r="6.2" />
                <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38" />
                <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59" />
                <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67" />
              </svg>
              Launch Editor
            </a>
           
           
            <img
            data-aos="zoom-in-down" data-aos-duration="3000"
              src="./work.svg"
              alt="working"
              loading="lazy"
              className="hidden md:block lg:block absolute right-24 w-96 h-96 rounded-badge object-contain bg-transparent"
            />

            {/* Section for explaining how the service works in steps*/}
            <section id="how-it-works" className=" mt-52">
              {/* Title for the section */}
              <p data-aos="zoom-in" data-aos-duration="2000" className="font-bold italic text-4xl text-green-500">
                How it works
              </p>
              {/* Container for the steps */}
              <motion.section className="how-it-works bg-transparent rounded-2xl ">
                <motion.div className="container px-5 py-10 mx-auto flex flex-wrap">
                  {/*  Individual step container */}
                  <motion.div className="flex relative pt-5 pb-20 sm:items-center md:w-2/3 mx-auto">
                    {/* Vertical line  */}
                    <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                    </motion.div>
                    {/* Step number */}
                    <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 inline-flex items-center justify-center bg-gradient-to-br from-transparent via-green-500 to-transparent text-white relative z-10 font-bold text-2xl">
                      1
                    </motion.div>
                    {/* Step content  */}
                    <motion.div className="flex-grow pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      {/* Icon for the step  */}
                      <motion.div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center mr-4">
                        <img
                          src="./aiprompt.png"
                          alt="aiprompt"
                          loading="lazy"
                          className="object-contain overflow-x-hidden"
                          data-aos="zoom-in"
                          data-aos-duration="2000"
                        />
                      </motion.div>

                      <motion.div className="flex-grow mt-6">
                        {/* Step title  */}
                        <h2
                          className="font-semibold text-gray-300 mb-1 text-xl overflow-x-hidden"
                          data-aos="zoom-in-up" data-aos-duration="1000"
                        >
                          AI-Generated Designs
                        </h2>
                        {/* Step description  */}
                        <p
                          className=" text-gray-400 overflow-x-hidden"

                          data-aos="zoom-out-up" data-aos-duration="3000"
                        >
                          Let AI create personalized designs based on your
                          prompts. Simply enter your preferences, and watch the
                          magic unfold.
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    {/* Vertical line  */}
                    <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                    </motion.div>
                    {/* Step number */}
                    <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-bl from-transparent via-green-500 to-transparent text-white relative z-10 title-font font-bold text-2xl">
                      2
                    </motion.div>
                    <motion.div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      {/* Icon for the step  */}
                      <motion.div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center mr-4">
                        <img
                          src="./color.png"
                          alt="color"
                          loading="lazy"
                          className="object-contain overflow-x-hidden"
                          data-aos="zoom-in"
                          data-aos-duration="2000"
                        />
                      </motion.div>
                      <motion.div className="flex-grow mt-6">
                        {/* Step title  */}
                        <h2 className="font-semibold overflow-x-hidden text-gray-300 mb-1 text-xl" data-aos="zoom-in-up" data-aos-duration="1000">
                          Choose Your Colors
                        </h2>
                        {/* Step description  */}
                        <p className=" text-gray-400 overflow-x-hidden"  data-aos="zoom-out-down" data-aos-duration="3000">
                          Select or experiment with a wide range of colors to
                          set the perfect tone for your T-shirt.
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    {/* Vertical line  */}
                    <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                    </motion.div>
                    {/* Step number */}
                    <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-br from-transparent via-green-500 to-transparent text-white relative z-10 title-font font-bold text-2xl">
                      3
                    </motion.div>
                    <motion.div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      {/* Icon for the step  */}
                      <motion.div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center mr-4">
                        <img
                          src="./file-upload.png"
                          alt="file-upload"
                          loading="lazy"
                          className="object-contain overflow-x-hidden"
                          data-aos="zoom-in"
                          data-aos-duration="2000"
                        />
                      </motion.div>
                      <motion.div className="flex-grow mt-6">
                        {/* Step title  */}
                        <h2 className="font-semibold overflow-x-hidden text-gray-300 mb-1 text-xl" data-aos="zoom-in-up" data-aos-duration="1000">
                          Upload Your Own Design
                        </h2>
                        {/* Step description  */}
                        <p className=" text-gray-400 overflow-x-hidden"  data-aos="zoom-out-right" data-aos-duration="3000">
                          Have a special design in mind? Upload your own artwork
                          and see it seamlessly integrated into your T-shirt.
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    {/* Vertical line  */}
                    <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                    </motion.div>
                    {/* Step number */}
                    <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-bl from-transparent via-green-500 to-transparent text-white relative z-10 title-font font-bold text-2xl">
                      4
                    </motion.div>
                    <motion.div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      {/* Icon for the step  */}
                      <motion.div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center mr-4">
                        <img
                          src="./download.png"
                          alt="download"
                          loading="lazy"
                          className="object-contain overflow-x-hidden"
                          data-aos="zoom-in"
                          data-aos-duration="2000"
                        />
                      </motion.div>
                      <motion.div className="flex-grow mt-6">
                        {/* Step title  */}
                        <h2 className="font-semibold overflow-x-hidden text-gray-300 mb-1 text-xl" data-aos="zoom-in-up" data-aos-duration="1000">
                          Save Your Masterpiece
                        </h2>
                        {/* Step description  */}
                        <p  data-aos="zoom-out-left" data-aos-duration="3000" className="overflow-x-hidden text-gray-400">
                          Once you're satisfied with your creation, hit the
                          download button to save your custom-designed T-shirt.
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.section>
            </section>


            {/* Text encouraging users to utilize the 3D preview feature */}
            <p data-aos="fade-up-left" data-aos-duration="3000" className="overflow-x-hidden mt-4 mb-8 text-xl text-gray-200">
              Explore the 3D preview to see how your design looks on an actual
              T-shirt. Get started now and make a statement with your
              one-of-a-kind T-shirt!
            </p>

            {/* Try Fashionify call-to-action button*/}
            <a
            data-aos="fade-right" data-aos-duration="2500"
              onClick={() => {
                state.intro = false;
              }}
              className="card w-fit flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 hover:scale-95  cursor-pointer text-xl"
            >
              Get Started Free
            </a>
          </div>
          


         

          {/*  Frequently Asked Questions */}
          <section id="faq" className="faq bg-transparent rounded-md mt-52 p-2">
            <div className="faq-heading">
              <h2 data-aos="zoom-in" data-aos-duration="3000" className="overflow-x-hidden text-3xl font-bold mb-4 text-green-500 font-mono">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="accordion">
              {faqData.map((item, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`faq${index}`}
                    className="hidden"
                  />
                  <label
                    htmlFor={`faq${index}`}
                    className="faq-label text-balance"
                  >
                    <div className="arrow text-gray-100">&#9654;</div>
                    <span className="text-base pl-2 text-gray-100 text-nowrap">
                      {item.question}
                    </span>
                  </label>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}

              <input type="checkbox" id="faq2" className="hidden" />
              <label htmlFor="faq2" className="faq-label">
                <div className="arrow text-gray-100">&#9654;</div>{" "}
                <span className="text-base pl-2 text-gray-100 text-nowrap">
                  Are subscription plans offered?
                </span>
              </label>
              <div className="faq-content">
                <p>
                  While the service is currently free, we are planning to
                  introduce subscription-based plans in the future. Stay tuned
                  for more details on premium features and benefits.
                </p>
              </div>

              <input type="checkbox" id="faq3" className="hidden" />
              <label htmlFor="faq3" className="faq-label">
                <div className="arrow text-gray-100">&#9654;</div>{" "}
                <span className="text-base pl-2 text-gray-100 text-nowrap">
                  How does AI assist in design?
                </span>
              </label>
              <div className="faq-content">
                <p>
                  The AI Picker utilizes artificial intelligence to generate
                  unique T-shirt designs based on prompts provided by users.
                  Simply input your preferences, and let the AI create a
                  personalized design for you.
                </p>
              </div>

              <input type="checkbox" id="faq4" className="hidden" />
              <label htmlFor="faq4" className="faq-label">
                <div className="arrow text-white">&#9654;</div>{" "}
                <span className="text-base pl-2 text-gray-100 text-nowrap">
                  Can I upload my own designs?
                </span>
              </label>
              <div className="faq-content">
                <p>
                  Yes, the File Picker allows you to upload your own designs,
                  logos, or images to customize your T-shirt. This feature gives
                  you the flexibility to showcase your creativity.
                </p>
              </div>

              <input type="checkbox" id="faq5" className="hidden" />
              <label htmlFor="faq5" className="faq-label">
                <div className="arrow text-white">&#9654;</div>{" "}
                <span className="text-base pl-2 text-gray-100 text-nowrap">
                  How can I visualize my design?
                </span>
              </label>
              <div className="faq-content">
                <p>
                  Our website integrates a 3D T-shirt model, allowing you to see
                  a realistic preview of your design on an actual T-shirt. This
                  enhances the user experience and ensures you get an accurate
                  representation of the final product.
                </p>
              </div>
              <input type="checkbox" id="faq6" className="hidden" />
              <label htmlFor="faq6" className="faq-label">
                <div className="arrow text-white">&#9654;</div>{" "}
                <span className="text-base pl-2 text-gray-100 text-nowrap">
                  How Color Picker works?
                </span>
              </label>
              <div className="faq-content">
                <p>
                  {" "}
                  The Color Picker allows you to select or manipulate colors for the T-shirt, giving you complete control
                  over the design's color scheme.
                </p>
              </div>
              <input type="checkbox" id="faq7" className="hidden" />
              <label htmlFor="faq7" className="faq-label">
                <div className="arrow text-white">&#9654;</div>{" "}
                <span className="text-base pl-2 text-gray-100 text-nowrap">
                  Can I get assistance if needed?
                </span>
              </label>
              <div className="faq-content">
                <p>
                  {" "}
                  If you have any questions, concerns, or need assistance,
                  please visit{" "}
                  <a
                    href="mailto:connect.celman@gmail.com"
                    className="hover:text-blue-400 text-blue-700 underline"
                    target="_blank"
                    title="Send email to connect.celman@gmail.com"
                    rel="nofollow"
                    aria-label="Contact us via email"
                    id="emailLink"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Try Fashionify call-to-action button*/}
          <a
          data-aos="fade-left" data-aos-duration="3000"
            onClick={() => {
              state.intro = false;
            }}
            className="card shadow-2xl flex flex-row items-center justify-center gap-x-2 rounded-2xl text-white px-10 py-3 hover:scale-95 cursor-pointer text-xl text-nowrap"
          >
            {/* Get Started Free */}
            Start Designing Free
          </a>

         

          {/* Divider */}
          <div className="relative divider mt-24"></div>

        
          {/* Footer section */}
          <footer>
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap justify-between">
                {/* Column for logo and company info */}
                <div className="px-4 my-4 w-full xl:w-1/5">
                  {/* Logo and company name  */}
                  <img
                    src="./brand-logo.png"
                    alt="brand-logo"
                    loading="lazy"
                    className="w-16 object-contain bg-white rounded"
                  />
                  <a href="/" className="logo block w-56 mb-5 text-3xl">
                    Fashionify
                  </a>
                  {/* Company description */}
                  <p className="text-justify">
                    Fashionify revolutionizes your creative concepts into
                    fashionable, personalized designs using advanced AI
                    technology. Explore clothing that reflects your individual
                    style, crafted effortlessly.
                  </p>
                </div>
                {/* Column for quick links */}
                <div className="px-4 my-4 w-full sm:w-auto">
                  {/* Quick links section */}
                  <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                      Quick Links
                    </h2>
                  </div>
                  <ul className="leading-8">
                    <li>
                      <a onClick={() => scrollToSection('home')} className="hover:text-blue-400 cursor-pointer">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a onClick={() => scrollToSection('how-it-works')} className="hover:text-blue-400 cursor-pointer">
                        How it works
                      </a>
                    </li>
                    <li>
                      <a onClick={() => scrollToSection('faq')} className="hover:text-blue-400 cursor-pointer">
                        FAQs
                      </a>
                    </li>
                    <li>
                    <a onClick={() => scrollToSection('features')} className="hover:text-blue-400 cursor-pointer">
                        Features
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Column for contact information */}
                <div className="px-4 my-4 w-full sm:w-auto">
                  <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                      Contact With Us
                    </h2>
                  </div>
                  <ul className="leading-8">
                    <li>
                      <a
                        href="mailto:connect.celman@gmail.com"
                        className="hover:text-blue-400"
                        target="_blank"
                        title="Send email to connect.celman@gmail.com"
                        rel="nofollow"
                        aria-label="Contact us via email"
                        id="emailLink"
                      >
                        contact@Fashionify.ai
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Social media links section */}
                <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                  <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                      Connect With Us
                    </h2>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center hover:text-blue-400 hover:border-blue-400 mr-4"
                  >
                    <span className="text-4xl">
                      {" "}
                      <FaXTwitter />
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center  hover:border-blue-400 hover:text-blue-400"
                  >
                    <svg
                      className="w-10 h-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*  Container for copyright and credits */}
            <div className="container mx-auto mb-10">
              <div className="-mx-4 flex flex-wrap justify-between">
                <div className="px-4 w-full text-center sm:w-auto sm:text-left text-xs">
                  Copyright © 2024 | All Rights Reserved.
                </div>
                <div className="px-4 w-full text-center sm:w-auto sm:text-left text-xs">
                  Made with ❤️ by
                  Fashionify.
                </div>
              </div>
            </div>
          </footer>
        </section>






      )}
    </AnimatePresence>
  );
};

export default Home;
