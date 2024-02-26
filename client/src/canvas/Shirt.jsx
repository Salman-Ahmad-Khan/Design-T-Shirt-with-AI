import React, { useMemo, Suspense } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";


const Shirt = () => {
  const snap = useSnapshot(state);

  // Load the GLTF model and textures
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  // Destructure properties for cleaner code
  const { logoDecal, fullDecal, color, isFullTexture, isLogoTexture } = snap;

  // Memoize textures
  const logoTexture = useTexture(logoDecal);
  const fullTexture = useTexture(fullDecal);

  // UseFrame hook for animation
  useFrame((_, delta) =>
    easing.dampC(materials.lambert1.color, color, 0.85, delta)
  );

  // Generate a unique key based on state
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {isFullTexture && (
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />
        )}
        {isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

const ShirtWithSuspense = () => (
  <Suspense fallback={null}>
    <Shirt />
  </Suspense>
);


export default ShirtWithSuspense;
