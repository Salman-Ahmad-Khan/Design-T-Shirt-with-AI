import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: false,
    stylishShirt: true,
  });
  const [showTooltip, setShowTooltip] = useState(false);

  const tabContentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tabContentRef.current && !tabContentRef.current.contains(event.target)) {
        setActiveEditorTab(""); // Clicked outside the active tab content, close the active tab
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeEditorTab]);

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs" ref={tabContentRef}>
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>

            {/* <div className="flex items-center min-h-screen">
  <div className="editortabs-container tabs" ref={tabContentRef}>
    {EditorTabs.map((tab) => (
      <div key={tab.name} className="icon-container" title={tab.name}>
        <Tab
          tab={tab}
          handleClick={() => setActiveEditorTab(tab.name)}
        />
      </div>
    ))}
    {generateTabContent()}
  </div>
</div> */}

          </motion.div>

          {/* Logo and Logo Name */}
          <motion.div
            className="flex items-center absolute z-10 top-2 left-2"
            {...fadeAnimation}
          >
            {/* <img
              src="./threejs.png"
              alt="logo"
              className="w-12 h-12 object-contain mr-2"
            /> */}
            <a
              href="#"
              className="font-mono font-semibold text-xl"
              style={{ color: snap.color }}
            >
              Fashionify.ai
            </a>
          </motion.div>
{/* welcome  */}
          {/* <p
            className="container absolute top-1 text-center font-bold text-zinc-100 font-mono"
            {...slideAnimation("down")}
          >
             Welcome to the T-shirt customization editor! 
          </p> */}

          <motion.div
            className="absolute z-10 top-8 right-2"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm hover:scale-90 bg-gradient-to-tr from-yellow-300 to-red-500 inline-block animate-pulse"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
                title={tab.name}
              />
            ))}

            {/* {FilterTabs.map((tab) => (
  <div key={tab.name} className="icon-container" title={tab.name}>
    <Tab
      tab={tab}
      isFilterTab
      isActiveTab={activeFilterTab[tab.name]}
      handleClick={() => handleActiveFilterTab(tab.name)}
    />
  </div>
))} */}

            
            <button
              className="download-btn hover:scale-95"
              onClick={downloadCanvasToImage}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span className="inline-block relative">
                <img
                  src={download}
                  alt="download"
                  className="object-contain"
                />
              </span>
              {showTooltip && (
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/10 bg-green-500 text-white p-1 font-mono rounded-md opacity-100 animate-none">
                  Download
                </span>
              )}
            </button>
          </motion.div>

          <motion.footer
            className="absolute bottom-0 right-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            {...fadeAnimation}
          >
            <motion.div>
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-200 p-1 mr-1">
                © 2024{" "}
                <a href="#" className="hover:underline">
                  Fashionify.ai
                </a>
                . All Rights Reserved.{" "}
                {/* <a
                  href="mailto:connect.celman@gmail.com"
                  className="underline decoration-1"
                >
                  Contact
                </a> */}

                <a
  href="mailto:connect.celman@gmail.com"
  className="hover:text-blue-400"
  target="_blank"
  title="Send email to connect.celman@gmail.com"
  rel="nofollow"
  aria-label="Contact us via email"
  id="emailLink"
>
  Contact
</a>

              </span>
            </motion.div>
          </motion.footer>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
