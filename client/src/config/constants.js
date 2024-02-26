import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    tooltip: " Choose Colors",
  },
  {
    name: "filepicker",
    icon: fileIcon,
    tooltip: "Upload File",
  },
  {
    name: "aipicker",
    icon: ai,
    tooltip: "Apply AI",
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    tooltip: "Apply as logo",
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    tooltip: "Apply as full",
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
