import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

import { IoIosArrowForward } from "react-icons/io";

import { CustomButton } from "../components";
import {
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  useEffect(() => {
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

  const faqData = [
    {
      question: "Is the service currently free?",
      answer:
        "Yes, our service is currently offered for free. Take advantage of the opportunity to explore and create personalized T-shirt designs at no cost.",
    },
  ];

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          {/* logo  */}
          <motion.header {...slideAnimation("down")}>
            {/* <img
              src="./threejs.png"
              alt="logo"
              className="absolute top-8 left-8 w-8 h-8 object-contain"
            /> */}
            {/* <a
              href="#"
              className="absolute top-14 left-4 font-mono font-semibold text-xl text-white"
            >
              Fashionify.ai

            </a>  */}
            <a
    href="#"
    className="absolute top-12 left-2 sm:top-10 sm:left-10 md:left-8 md:top-8 xl:left-8 xl:top-8 font-mono font-semibold text-xl text-white"
  >
    Fashionify.ai
  </a>
            
          </motion.header>

          {/* feature section */}

          <motion.div {...headContainerAnimation}>
            <img
              src="./hero.jpg"
              alt="logo"
              className="absolute left-6 top-56 rounded-lg w-96 object-contain hidden md:block lg:block xl:block"
            />
          </motion.div>

          <motion.div
            className="home-content relative flex w-full flex-col items-center sm:mt-24"
            {...headContainerAnimation}
          >
            <a
              onClick={() => {
                state.intro = false;
              }}
              className="mx-auto fixed top-4 flex max-w-fit items-center justify-center overflow-hidden rounded-lg glassmorphism px-3 py-1 transition-all hover:scale-95 cursor-pointer text-white hover:text-gray-100"
            >
              <span className="flex rounded bg-gradient-to-r from-red-500 via-red-500 to-red-500 uppercase px-2 py-1 text-xs font-bold mr-1 font-mono text-white">
                New
              </span>

              <p className="text-xs font-semibold text-bg-grey-300">
                Introducing our brand new tool here
              </p>
              {/* <svg
                className="fill-current text-bg-grey-100 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg> */}
              <span className="text-xl"> <IoIosArrowForward /></span>
             

            </a>

          


            <motion.div {...headTextAnimation}>
              <h1 className="head-text max-w-sm bg-gradient-to-b from-white to-gray-400 bg-clip-text text-center text-5xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
                <span className="text-transparent bg-clip-text text-6xl">
                  From Imagination to Fashion
                </span>{" "}
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-1"
            >
              <span className="mt-8 max-w-lg text-center text-2xl leading-relaxed text-gray-200">
                Fashionify transforms your creative ideas into stylish,
                wearable designs with cutting-edge{" "}
                <span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                  <span className="relative text-white">AI-driven 3D</span>{" "}
                </span>{" "}
                customization. Discover fashion that's uniquely yours.
              </span>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0 sm:gap-x-4"
              {...headContentAnimation}
            >
              <a
                onClick={() => {
                  state.intro = false;
                }}
                className="flex flex-row items-center justify-center gap-x-2 rounded-2xl text-white px-10 py-3 hover:scale-95 bg-gradient-to-r from-red-200 via-pink-500 to-purple-500 cursor-pointer text-xl"
              >
               
                Get Started
              </a>
              <a
                href="#whyus"
                className="flex flex-row items-center justify-center gap-x-2 rounded-2xl border border-grey-500 px-10 py-3 bg-gradient-to-tr from-red-950/30 to-transparent text-white text-xl hover:scale-95"
              >
                Learn More →
              </a>
            </motion.div>


          </motion.div>










          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div>
              {/* features  */}
              {/* why us */}

              <div className="bg-transparent pt-80">
                <section
                  id="features"
                  className="relative block px-6 py-10 md:py-20 md:px-10     bg-neutral-950/30 bg-gradient-to-l from-green-950/30 to-transparent"
                >
                  <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-400 my-3 flex items-center justify-center font-bold uppercase tracking-wider">
                      Why choose us
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                      Create Customized T-shirt Designs You Adore
                    </h2>
                    <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                      Our AI-powered 3D platform offers unparalleled
                      customization. Zero technical expertise needed – our
                      user-friendly design tools streamline the process
                      effortlessly.
                    </p>
                  </div>
                  <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-md border border-neutral-800 bg-gradient-to-br from-yellow-950/30 to-transparent p-8 text-center shadow hover:bg-opacity-50 hover:bg-black transition duration-1000 cursor-pointer">
                      <div className="button-text mx-auto flex items-center justify-center rounded-md ">
                        <img
                          src="./prompt.jpg"
                          alt="logo"
                          className=" w-48 object-contain rounded-full"
                        />
                      </div>
                      <h3 className="mt-6 font-semibold text-gray-300 text-xl">
                        Provide your prompt
                      </h3>
                      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        Simply type a short description of what you want on your
                        t-shirt.
                      </p>
                    </div>
                    <div className="rounded-md border border-neutral-800 bg-gradient-to-tl from-blue-950/30 to-transparent p-8 text-center shadow hover:bg-opacity-50 hover:bg-black transition duration-1000 cursor-pointer">
                      <div className="button-text mx-auto flex  items-center justify-center rounded-md ">
                        <img
                          src="./perdesign.jpg"
                          alt="logo"
                          className=" w-48 object-contain rounded-full"
                        />
                      </div>
                      <h3 className="mt-6 font-semibold text-gray-300 text-xl ">
                        Fashion Designed by AI
                      </h3>
                      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        Our AI at Fashionify converts your concepts into
                        personalized t-shirt designs, prepared for wear.
                      </p>
                    </div>
                    <div className="rounded-md border border-neutral-800 bg-gradient-to-tr from-transparent to-lime-950/30 p-8 text-center shadow hover:bg-opacity-50 hover:bg-black transition duration-1000 cursor-pointer">
                      <div className="button-text mx-auto flex  items-center justify-center rounded-md  ">
                        <img
                          src="./printing.jpg"
                          alt="logo"
                          className=" w-48 object-contain rounded-full"
                        />
                      </div>
                      <h3 className="mt-6 font-semibold text-gray-300 text-xl">
                        Preview & Save
                      </h3>
                      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        Select your desired colors and style. Save it instantly
                        for your use.
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
                      borderColor: "rgba(92, 79, 240, 0.2)",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
                      borderColor: "rgba(92, 79, 240, 0.2)",
                    }}
                  ></div>
                </section>
              </div>

              <a
                onClick={() => {
                  state.intro = false;
                }}
                className="mt-10 w-fit flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 hover:scale-95 bg-gradient-to-r from-red-200 via-pink-500 to-purple-500 cursor-pointer text-xl"
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

              {/* How it works */}
              <section
                id="whyus"
                className="will-change-scroll pt-10"
                {...slideAnimation("left")}
              >
                <p className="font-bold italic text-5xl text-gray-300 font-mono">
                  How it works
                </p>

                <motion.section className="whyus bg-transparent rounded-2xl text-white body-font">
                  <motion.div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <motion.div className="flex relative pt-5 pb-20 sm:items-center md:w-2/3 mx-auto">
                      <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                      </motion.div>
                      <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-pink-500  to-yellow-500 text-white relative z-10 title-font font-bold text-lg">
                        1
                      </motion.div>
                      <motion.div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <motion.div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                          <svg
                            width="87px"
                            height="87px"
                            viewBox="0 0 512.00 512.00"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="#0011ff"
                            stroke="#0011ff"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              
                              <g
                                id="Page-1"
                                strokeWidth="0.00512"
                                fill="none"
                                fillRule="evenodd"
                              >
                                {" "}
                                <g
                                  id="icon"
                                  fill="#2b00ff"
                                  transform="translate(64.000000, 64.000000)"
                                >
                                  {" "}
                                  <path
                                    d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                                    id="Combined-Shape"
                                  >
                                    {" "}
                                  </path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </motion.div>
                        <motion.div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2
                            className="font-extrabold title-font text-gray-300 mb-1 text-2xl"
                            {...headTextAnimation}
                          >
                            AI-Generated Designs
                          </h2>

                          <p
                            className="leading-relaxed text-gray-400"
                            {...slideAnimation("right")}
                          >
                            Let our AI create personalized designs based on your
                            prompts. Simply enter your preferences, and watch
                            the magic unfold.
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                      <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                      </motion.div>
                      <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-pink-500  to-yellow-500 text-white relative z-10 title-font font-bold text-lg">
                        2
                      </motion.div>
                      <motion.div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <motion.div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                          <svg
                            width="71px"
                            height="71px"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth="3"
                            stroke="#004cff"
                            fill="none"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M34.07,50.93S53.86,44.38,45.68,26.6c0,0-4.8-11.46-19.31-13.27S8.3,20.8,8.3,20.8,1.81,33.68,13.1,35c1.62.19,5-.56,6.4,1.33s.29,4.2,0,8.8C19.34,47.69,21.27,53.87,34.07,50.93Z"
                                strokeLinecap="round"
                              ></path>
                              <circle
                                cx="17.2"
                                cy="24.01"
                                r="3.59"
                                strokeLinecap="round"
                              ></circle>
                              <circle
                                cx="38.02"
                                cy="28.02"
                                r="2.43"
                                strokeLinecap="round"
                              ></circle>
                              <circle
                                cx="38.02"
                                cy="39.04"
                                r="2.43"
                                strokeLinecap="round"
                              ></circle>
                              <circle
                                cx="28.14"
                                cy="44.38"
                                r="2.43"
                                strokeLinecap="round"
                              ></circle>
                              <path
                                d="M54,12.62c-.69,3.31-2.07,10.9-2.18,27a.41.41,0,0,0,.41.41h4.91a.41.41,0,0,0,.41-.42c-.1-2.82-.74-18.12-2.75-27A.41.41,0,0,0,54,12.62Z"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M57.48,43.8c0,1.53-1.92,7.37-2.78,7.37s-2.78-5.84-2.78-7.37a2.78,2.78,0,1,1,5.56,0Z"
                                strokeLinecap="round"
                              ></path>
                            </g>
                          </svg>
                        </motion.div>
                        <motion.div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-extrabold title-font text-gray-300 mb-1 text-2xl">
                            Choose Your Colors
                          </h2>
                          <p className="leading-relaxed text-gray-400">
                            Select or experiment with a wide range of colors to
                            set the perfect tone for your T-shirt.
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                      <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                      </motion.div>
                      <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-pink-500  to-yellow-500 text-white relative z-10 title-font font-bold text-lg">
                        3
                      </motion.div>
                      <motion.div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <motion.div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                          <svg
                            width="75px"
                            height="75px"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth="3"
                            stroke="#002aff"
                            fill="none"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <polygon
                                points="25.15 6.32 50.81 6.32 50.81 54.84 13.19 54.84 13.19 19.18 25.15 6.32"
                                strokeLinecap="round"
                              ></polygon>
                              <polyline points="25.17 6.32 25.15 19.18 13.19 19.18"></polyline>
                              <path d="M40.26,34v7.4a.82.82,0,0,1-.82.81H24.56a.82.82,0,0,1-.82-.81V34"></path>
                              <polyline points="36.08 30.87 32 26.79 27.93 30.87"></polyline>
                              <line
                                x1="32"
                                y1="26.79"
                                x2="32"
                                y2="38.74"
                              ></line>
                            </g>
                          </svg>
                        </motion.div>
                        <motion.div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-extrabold title-font text-gray-300 mb-1 text-2xl">
                            Upload Your Own Design
                          </h2>
                          <p className="leading-relaxed text-gray-400">
                            Have a special design in mind? Upload your own
                            artwork and see it seamlessly integrated into your
                            T-shirt.
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                      <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <motion.div className="h-full w-1 bg-gray-200 pointer-events-none"></motion.div>
                      </motion.div>
                      <motion.div className="flex-shrink-0 w-10 h-10 rounded mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-pink-500  to-yellow-500 text-white relative z-10 title-font font-bold text-lg">
                        4
                      </motion.div>
                      <motion.div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <motion.div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                          <svg
                            width="77px"
                            height="77px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"
                                fill="#004cff"
                              ></path>
                              <path
                                d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"
                                fill="#004cff"
                              ></path>
                            </g>
                          </svg>
                        </motion.div>
                        <motion.div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-extrabold title-font text-gray-300 mb-1 text-2xl">
                            Save Your Masterpiece
                          </h2>
                          <p className="leading-relaxed text-gray-400">
                            Once you're satisfied with your creation, hit the
                            download button to save your custom-designed
                            T-shirt.
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.section>
              </section>

              {/* carousal */}

              <p className="mt-4 mb-8 font-mono text-xl text-gray-200  ">
                {/* Let the canvas be your playground, and the possibilities,
                endless. */}
                Explore the 3D preview to see how your design looks on an actual
                T-shirt. Get started now and make a statement with your
                one-of-a-kind T-shirt!
              </p>

              {/* <CustomButton
                type="filled"
                title="Get Started For Free →"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-5 py-2.5 font-bold text-sm hover:scale-95  mb-10 font-sans bg-gradient-to-tr from-yellow-300 to-red-500 inline-block animate-pulse"
              /> */}
              <a
                onClick={() => {
                  state.intro = false;
                }}
                className="w-fit flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 hover:scale-95 bg-gradient-to-r from-red-200 via-pink-500 to-purple-500 cursor-pointer text-xl"
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
                Get Started Free
              </a>
            </motion.div>
          </motion.div>

          {/* faqs */}

          <section
            id="faq"
            className="faq bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-md p-2"
          >
            <div className="faq-heading">
              <h2 className="text-3xl font-bold mb-4 text-white font-mono">
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
                    <span className="text-base font-bold pl-2 font-mono text-gray-100">
                      {item.question}
                    </span>
                  </label>
                  <div className="faq-content font-mono text-gray-300">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}

              <input type="checkbox" id="faq2" className="hidden" />
              <label htmlFor="faq2" className="faq-label">
                <div className="arrow text-gray-100">&#9654;</div>{" "}
                <span className="text-base font-bold pl-2 font-mono text-gray-100">
                  Are subscription plans offered?
                </span>
              </label>
              <div className="faq-content font-mono text-gray-300">
                <p>
                  While the service is currently free, we are planning to
                  introduce subscription-based plans in the future. Stay tuned
                  for more details on premium features and benefits.
                </p>
              </div>

              <input type="checkbox" id="faq3" className="hidden" />
              <label htmlFor="faq3" className="faq-label">
                <div className="arrow text-gray-100">&#9654;</div>{" "}
                <span className="text-base font-bold pl-2 font-mono text-gray-100">
                  How does AI assist in design?
                </span>
              </label>
              <div className="faq-content font-mono text-gray-300">
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
                <span className="text-base font-bold pl-2 font-mono text-gray-100">
                  Can I upload my own designs?
                </span>
              </label>
              <div className="faq-content font-mono text-gray-300">
                <p>
                  Yes, the File Picker allows you to upload your own designs,
                  logos, or images to customize your T-shirt. This feature gives
                  you the flexibility to showcase your creativity.
                </p>
              </div>

              <input type="checkbox" id="faq5" className="hidden" />
              <label htmlFor="faq5" className="faq-label">
                <div className="arrow text-white">&#9654;</div>{" "}
                <span className="text-base font-bold pl-2 font-mono text-gray-100">
                  How can I visualize my design?
                </span>
              </label>
              <div className="faq-content font-mono text-gray-300">
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
                <span className="text-base font-bold pl-2 font-mono text-gray-100">
                  How Color Picker works?
                </span>
              </label>
              <div className="faq-content font-mono text-gray-300">
                <p>
                  {" "}
                  The Color Picker allows you to select or manipulate colors for
                  different parts of the T-shirt, giving you complete control
                  over the design's color scheme.
                </p>
              </div>
              <input type="checkbox" id="faq7" className="hidden" />
              <label htmlFor="faq7" className="faq-label">
                <div className="arrow text-white">&#9654;</div>{" "}
                <span className="text-base font-bold pl-2 font-mono text-gray-100">
                  Can I get assistance if needed?
                </span>
              </label>
              <div className="faq-content font-mono text-gray-300">
                <p>
                  {" "}
                  If you have any questions, concerns, or need assistance,
                  please visit our Help Center or contact our customer support
                  team. We are here to help you make the most of your T-shirt
                  design experience.
                </p>
              </div>
            </div>
          </section>

          <CustomButton
            type="filled"
            title="Launch Editor, it's free →"
            handleClick={() => (state.intro = false)}
            customStyles="w-fit px-5 py-2.5 font-bold text-sm hover:scale-95 mb-10 font-sans bg-gradient-to-tr from-yellow-300 to-red-500 inline-block animate-pulse"
          />
          {/* <span className="h-0.5 w-full bg-blue-300 rounded"></span> */}
          <div className="relative divider"></div> 

          <br></br>
          <br></br>
          <br></br>
          

          {/* Footer Section */}
          <footer className="footer bg-transparent ">
  <div className="py-4 text-gray-400 mt-6  bg-gradient-to-tr from-red-950/30 to-transparent">
    <div className="container px-4 mx-auto">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 my-4 w-full xl:w-1/5">
          <a href="/" className="block w-56 mb-10">
            <svg
              version="1.1"
              viewBox="0 0 3368 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(0 -75)">
                  <g transform="translate(0 75)">
                    <rect width={512} height={512} rx={128} fill="#3D5AFE" />
                    <rect
                      x={149}
                      y={176}
                      width={220}
                      height={220}
                      fill="#fff"
                    />
                    <circle cx={259} cy={156} r={40} fill="#fff" />
                    <circle cx={369} cy={286} r={40} fill="#2962FF" />
                  </g>
                  <text
                    fill="white"
                    fontFamily="Nunito-Bold, Nunito"
                    fontSize={512}
                    fontWeight="bold"
                  >
                    <tspan x={654} y={450}>
                      Fashionify
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </a>
          <p className="text-justify">
            Fashionify revolutionizes your creative concepts into fashionable,
            personalized designs using advanced AI technology. Explore clothing
            that reflects your individual style, crafted effortlessly.
          </p>
        </div>
        <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
              Quick Links
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#whyus" className="hover:text-blue-400">
                How it works
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-400">
                FAQs
              </a>
            </li>
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
  Contact Us 
</a>
              
            </li>
          </ul>
        </div>
        <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
              Contact With Us
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <a href="#" className="hover:text-blue-400">
                contact@Fashionify.ai
              </a>

            </li>
          </ul>
        </div>
        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
              Connect With Us
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

 <div className="py-4 mb-4 text-gray-100 bg-gradient-to-b from-green-950/30 to-transparent ">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          Copyright © 2024. All Rights Reserved.
        </div>
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          Made with <span className="text-red-500">❤️</span> by Fashionify.
        </div>
      </div>
    </div>
  </div>

  </div>
 
</footer>

        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
