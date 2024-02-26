// Importing the 'proxy' function from the 'valtio' library for state management.

import { proxy } from "valtio";

// Define the initial state of the application
const state = proxy({
  // Indicates whether the intro screen is displayed
  intro: true,
  // The current color of the logo
  color: "#ffffff",
  // Indicates whether the logo is displayed as a texture
  isLogoTexture: true,
  // Indicates whether the full logo is displayed as a texture
  isFullTexture: false,
  // The current logo decal image
  logoDecal: "./brand-logo.png",
  // The current full decal image
  fullDecal: "./brand-logo.png",
  // An array of available colors for the logo
  colors: ["#FFFF00", "#00FFFF", "#00FF00", "#FF69B4", "#FFA500", "#800080"],
  // An array of available decal images
  decals: ["react", "three2", "pmndrs"],
});

export default state;