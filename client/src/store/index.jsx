import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#fc0313',
  // color: '#ffffff',
  isLogoTexture: false,
  isFullTexture: true,
  logoDecal: './perdesign.jpg',
  fullDecal: './perdesign.jpg',
});

export default state;