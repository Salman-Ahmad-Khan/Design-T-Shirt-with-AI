import React, { Suspense } from 'react';
import Home from './pages/Home';

const Canvas = React.lazy(() => import('./canvas'));
const Customizer = React.lazy(() => import('./pages/Customizer'));

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
  <div className="text-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <linearGradient id="a9">
    <stop offset={0} stopColor="#FF156D" stopOpacity={0} />
    <stop offset={1} stopColor="#FF156D" />
  </linearGradient>
  <circle
    fill="none"
    stroke="url(#a9)"
    strokeWidth={15}
    strokeLinecap="round"
    strokeDasharray="0 44 0 44 0 44 0 44 0 360"
    cx={100}
    cy={100}
    r={70}
    transform-origin="center"
  >
    <animateTransform
      type="rotate"
      attributeName="transform"
      calcMode="discrete"
      dur={2}
      values="360;324;288;252;216;180;144;108;72;36"
      repeatCount="indefinite"
    />
  </circle>
</svg>
Loading Canvas...</div>
</div>
}>
        <Canvas />
      </Suspense>
      <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
  <div className=" text-success text-2xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <linearGradient id="a9">
    <stop offset={0} stopColor="#FF156D" stopOpacity={0} />
    <stop offset={1} stopColor="#FF156D" />
  </linearGradient>
  <circle
    fill="none"
    stroke="url(#a9)"
    strokeWidth={15}
    strokeLinecap="round"
    strokeDasharray="0 44 0 44 0 44 0 44 0 360"
    cx={100}
    cy={100}
    r={70}
    transform-origin="center"
  >
    <animateTransform
      type="rotate"
      attributeName="transform"
      calcMode="discrete"
      dur={2}
      values="360;324;288;252;216;180;144;108;72;36"
      repeatCount="indefinite"
    />
  </circle>
</svg>
Loading Canvas...</div>
</div>}>
        <Customizer />
      </Suspense>
    </main>
  );
}

export default App;


