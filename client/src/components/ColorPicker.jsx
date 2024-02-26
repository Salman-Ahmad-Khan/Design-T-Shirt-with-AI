import React, { useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  // Get the current state snapshot
  const snap = useSnapshot(state);

  // Initialize a ref for the hex value input
  const hexValueRef = useRef(null);

  // Initialize the state for the copy button text
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  // Define the copyToClipboard function for copying the hex value to clipboard
  const copyToClipboard = async () => {
    try {
      // Check if the ref has a value
      if (hexValueRef.current) {
        // Write the hex value to clipboard
        await navigator.clipboard.writeText(hexValueRef.current.value);
        // Update the copy button text to "Copied"
        setCopyButtonText('Copied');

        // Reset the copy button text to "Copy" after 2 seconds
        setTimeout(() => {
          setCopyButtonText('Copy');
        }, 2000); // Reset to "Copy" after 2 seconds
      }
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div className="absolute left-full ml-3">
      {/* Render the SketchPicker component with necessary props */}
    

      <SketchPicker
        color={snap.color}
        title="colorpicker"
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />


  

      {/* Render the input and button elements for displaying and copying the hex value */}
      <div className="w-full absolute top-full mt-2 rounded-md glassmorphism p-1 flex items-center text-xs">
        <input
          ref={hexValueRef}
          type="text"
          value={snap.color}
          readOnly
          className="bg-transparent border-none outline-none text-sm text-gray-100 p-1"
        />
<button
  className={`absolute right-1 ${
    copyButtonText === 'Copied' ? 'bg-gray-900 text-gray-100' : 'bg-gray-800'
  } px-2 py-1 text-white rounded-md flex items-center focus:outline-none`}
  onClick={copyToClipboard}
>
  {/* Conditionally render the appropriate icon based on copyButtonText */}
  {copyButtonText === 'Copy' ? (
    <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
    </svg>
  ) : (
    <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
    </svg>
  )}
  {/* Display the copy button text */}
  {copyButtonText}
</button>

      </div>
    </div>
  );
};

export default ColorPicker;
