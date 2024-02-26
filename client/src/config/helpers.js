export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  // Generate the file name with your brand name, current date, and time
  const currentDate = new Date();
  const dateString = currentDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  const timeString = currentDate.toLocaleTimeString().replace(/:/g, "-"); // Format: HH-MM-SS
  const fileName = `Fashionify_Tshirt_${dateString}_${timeString}.png`;

  link.href = dataURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



// export const reader = (file) =>
//   new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.onload = () => resolve(fileReader.result);
//     fileReader.readAsDataURL(file);
//   });

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsDataURL(file);
  });


export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
