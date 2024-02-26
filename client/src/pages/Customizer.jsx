import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";


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


// Customizer component
const Customizer = () => {




  // Get the current state snapshot
  const snap = useSnapshot(state);

  // State variables
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });
 

  // Reference to the tab content ref
  const tabContentRef = useRef(null);

  const [previewImage, setPreviewImage] = useState(null);
  // handlePreview function

  // const handlePreview = () => {
  //   const canvas = document.querySelector("canvas");
  //   if (canvas) {
  //     setPreviewImage(canvas.toDataURL());
  //   }
  // };
  const handlePreview = () => {
    const canvas = document.querySelector("canvas");
    setPreviewImage(canvas.toDataURL());
  };





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

   // generateTabContent function
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

    // handleSubmit function
  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch("https://fashionifyai.onrender.com/api/v1/dalle", {
        // const response = await fetch("http://localhost:8080/api/v1/dalle", {
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
  
// handleDecals function
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;


    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  // handleActiveFilterTab function
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

  // readFile function
  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };


  return (
    <AnimatePresence>
    {/* Conditional rendering based on state */}
      {!snap.intro && (
        <>
       


         <motion.div
  key="custom"
  className="absolute top-0 left-0 z-10"
  {...slideAnimation("up")}
>

{/* Brand logo */}
<motion.div
  className="flex items-center "
  {...slideAnimation("down")}
>
  <img
    src="./brand-logo.png"
    alt="logo"
    loading="lazy"
    className="absolute top-1 left-1 w-10 object-contain rounded bg-white"
  />
  <a
    onClick={() => {
        state.intro = true;
      }} 
    className="logo absolute z-10 top-2 left-12 cursor-pointer font-extrabold text-2xl"
    style={{ color: snap.color }}
  >
    Fashionify.ai
  </a>
</motion.div>



{/* Custom editor tabs */}
  <div className="flex items-center min-h-screen">
    <div className="editortabs-container tabs" ref={tabContentRef}>
     {/* Mapping through editor tabs and rendering each */}
      {EditorTabs.map((tab) => (
        <Tab
          key={tab.name}
          tab={tab}
          handleClick={() => setActiveEditorTab(tab.name)}
        />
      ))}
      {/* Generating tab content based on active editor tab */}
      {generateTabContent()}
    </div>
  </div>
</motion.div>

{/* Default colors */}
<div className="customizer" >
 {/* Color options */}
  <motion.div className="color-options" {...slideAnimation("down")}>
    {snap.colors.map((color) => (
      <div
        key={color}
        className="circle"
        style={{ background: color }}
        onClick={() => (state.color = color)}
      ></div>
    ))}
  </motion.div>

  
  {/* <div className="decals">
  <div className="decals--container">
    {snap.decals.map((decal) => (
      <div key={decal} className="decal">
        <img src={decal + '.png'} alt="brand" onClick={() => handleDecalClick(decal)} />
      </div>
    ))}
  </div>
</div> */}


  



</div>








<motion.div
  className="absolute z-10 top-2 right-2"
  {...fadeAnimation}
>
 {/* Go Back button */}
  <CustomButton
    type="filled"
    title="Go Back"
    handleClick={() => (state.intro = true)}
    customStyles="w-fit px-4 py-2.5 font-bold text-sm hover:scale-90 bg-gradient-to-tr from-red-500 to-pink-500 inline-block hover:text-indigo-500 font-mono"
  />

 {/* Preview button */}
<button
        className="w-10 absolute top-0 right-28 hover:scale-90  text-white tooltip tooltip-success tooltip-bottom"  data-tip="Preview"
        
        onClick={() => {
    document.getElementById('my_modal_5').showModal();
    handlePreview();
  }}
      >
       <img
    src="./preview.png"
    alt="preview"
    loading="lazy"
    className="object-contain "
    
  />
      </button>

 {/* Preview modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Fashionify Preview</h3>
          <button
            className=" btn-sm btn-circle btn-ghost absolute top-6 right-4 btn bg-slate-600"
            onClick={() => document.getElementById('my_modal_5').close()}
          >
            ✕
          </button>
          <div className="modal-content">
            {previewImage && (
              <img src={previewImage} alt="Preview" />
            )}
          </div>
        </div>
      </dialog>


</motion.div>

{/* Filter tabs */}
<motion.div
  className="filtertabs-container mb-4"
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
      tooltip={tab.tooltip}
    />
  ))}

   {/* Download button */}
  <button
    className="download-btn hover:scale-95 tooltip tooltip-success" data-tip="Download"
    onClick={downloadCanvasToImage}
    
  >



    <span className="inline-block relative">
      <img
        src={download}
        alt="download"
        loading="lazy"
        className="object-contain w-10"
      />
    </span>
   
  </button>
</motion.div>







 {/* Footer */}

<motion.footer
  className="fixed bottom-0 right-0 flex justify-end items-center bg-gradient-to-r from-transparent via-yellow-500 to-transparent mr-2"
  {...fadeAnimation}
>
  <span className="text-xs text-gray-500 dark:text-gray-200">
    <a
      onClick={() => { state.intro = true; }}
      className="hover:underline"
    >
      Fashionify.ai
    </a>
    © 2024 All Rights Reserved
    <a
      href="mailto:connect.celman@gmail.com"
      className="hover:text-blue-400 ml-2"
      target="_blank"
      title="Send email to connect.celman@gmail.com"
      rel="nofollow"
      aria-label="Contact us via email"
      id="emailLink2"
    >
      Contact
    </a>
  </span>
</motion.footer>









        </>
      )}
    </AnimatePresence>
  );
  
};

export default Customizer;

