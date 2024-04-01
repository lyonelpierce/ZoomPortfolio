"use client";

import { CameraControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lyonel from "./Lyonel";
import { useRef } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import { Leva, button, useControls } from "leva";

const VideoCanvas = () => {
  return (
    <div className="flex items-center h-full">
      <div className="h-[80vh] w-full">
        <Canvas
          camera={{
            position: [
              -0.671807189834583, 0.3149880954995405, 1.5225959406311749,
            ],
            fov: 65,
          }}
        >
          <Lyonel />
          {/* <CameraManager /> */}
          <EffectComposer multisampling={10} enableNormalPass={false}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={1280}
            />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.01} darkness={0.3} />
          </EffectComposer>
          <Environment preset="apartment" background />
        </Canvas>
      </div>
    </div>
  );
};

export default VideoCanvas;

const CameraManager = () => {
  const controls = useRef(null);

  return <CameraControls ref={controls} />;
};
