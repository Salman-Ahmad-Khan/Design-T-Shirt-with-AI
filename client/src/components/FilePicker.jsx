import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  const [previewImage, setPreviewImage] = useState(localStorage.getItem("filePreview"));

  const handleFileSubmit = () => {
    if (!file) {
      alert("Please select a file");
      return;
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      localStorage.setItem("filePreview", reader.result); // Store preview in localStorage
    };
    reader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    // Clear preview image if file is cleared
    if (!file) {
      setPreviewImage(null);
      localStorage.removeItem("filePreview"); // Remove preview from localStorage
    }
  }, [file]);

  return (
    <div className="filepicker-container">
      <div className="flex items-center">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="filepicker-label hover:scale-90 flex items-center">
          Choose File
          <img
            src="./add-file.png"
            alt="add-file"
            loading="lazy"
            className="w-6 object-contain ml-4"
          />
        </label>
      </div>

      <p className="mt-2 text-xs truncate text-white">
        {file === "" && !previewImage ? "No file chosen" : file.name}
      </p>

      {(file !== "" || previewImage) && (
        <img src={previewImage || file} alt="" className="w-20 h-20 mt-2 rounded-xl" />
      )}

      <div className="flex-grow"></div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="As Logo"
          handleClick={() => {
            handleFileSubmit();
            readFile("logo");
          }}
          customStyles="text-xs font-bold font-mono hover:scale-90"
        />
        <CustomButton
          type="filled"
          title="As Full"
          handleClick={() => {
            handleFileSubmit();
            readFile("full");
          }}
          customStyles="text-xs font-bold font-mono hover:scale-90"
        />
      </div>
    </div>
  );
};

export default FilePicker;
