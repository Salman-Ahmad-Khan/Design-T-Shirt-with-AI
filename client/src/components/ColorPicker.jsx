import React, { useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const hexValueRef = useRef(null);
  const [copyButtonText, setCopyButtonText] = useState('Copy');


  const copyToClipboard = async () => {
    try {
      if (hexValueRef.current) {
        await navigator.clipboard.writeText(hexValueRef.current.value);
        setCopyButtonText('Copied');
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
      <SketchPicker
        color={snap.color}
        title="colorpicker"
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
      <div className="w-full absolute top-full mt-2 rounded-md glassmorphism p-1 flex items-center text-xs">
        
        <input
          ref={hexValueRef}
          type="text"
          value={snap.color}
          readOnly
          className=" bg-transparent border-none outline-none text-sm text-gray-100 p-1"
        />
        <button
          className={`absolute right-1 ${
            copyButtonText === 'Copied' ? 'bg-green-600 text-gray-500' : 'bg-blue-700'
          } px-2 py-1 text-white rounded-md hover:bg-blue-900 focus:outline-none`}
          onClick={copyToClipboard}
        >
          {copyButtonText}
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
