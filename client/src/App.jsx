import React, { Suspense } from 'react';
import Home from './pages/Home';

const Canvas = React.lazy(() => import('./canvas'));
const Customizer = React.lazy(() => import('./pages/Customizer'));

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
  <div className="loading loading-ring loading-lg text-success">Loading Canvas...</div>
</div>
}>
        <Canvas />
      </Suspense>
      <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
  <div className="loading loading-ring loading-lg text-success text-2xl">Loading Canvas...</div>
</div>}>
        <Customizer />
      </Suspense>
    </main>
  );
}

export default App;


