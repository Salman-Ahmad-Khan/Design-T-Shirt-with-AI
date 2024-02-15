import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  const handleFileSubmit = () => {
    if (!file) {
      // Instead of using alert, consider using a notification library or displaying a message in your UI
      alert("Please select a file");
      return;
    }
  };

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label hover:scale-90">
          Choose File
        </label>

        <p className="mt-2 text-xs truncate text-white">
          {file === "" ? "No file chosen" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => {
            handleFileSubmit();
            readFile("logo");
          }}
          customStyles="text-xs font-bold font-mono hover:scale-90 "
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => {
            handleFileSubmit();
            readFile("full");
          }}
          customStyles="text-xs font-bold font-mono hover:scale-90 "
        />
      </div>
    </div>
  );
};

export default FilePicker;
