import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  const handleFullButtonClick = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent closing the active content
    handleSubmit("full");
  };

  return (
    <div className="aipicker-container">
     {/* Textarea for user input */}
      <textarea
        placeholder={`A futuristic cityscape with vibrant colors on a T-shirt`}
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea placeholder:italic placeholder:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
       {/* Label for textarea */}
      <label
        className={`absolute top-0 left-1/2 font-mono text-nowrap text-xs transform -translate-x-1/2 -translate-y-1/2 p-1 text-gray-100 pointer-events-none ${
          prompt ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {/* Ask AI... */}
        {/* Imagine & Design */}
        Describe your dream T-shirt design
      </label>

 {/* Buttons for generating AI-based designs */}
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="filled"
            // title="Generating..."
            title={<>Generating <span className="relative top-1.5 loading loading-dots loading-sm"></span></>}
            customStyles="text-base animate-pulse"
            // customStyles={'<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>' }
          />
        ) : (
          <>
          {/* Button for generating AI-based logo */}
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs font-bold font-mono hover:scale-90 bg-gradient-to-tl"
            />
  {/* Button for generating AI-based full design */}
            <CustomButton
              type="filled"
              title="AI Full"
              // handleClick={() => handleSubmit('full')}
              handleClick={handleFullButtonClick}
              customStyles="text-xs font-bold font-mono hover:scale-90 bg-gradient-to-l"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
