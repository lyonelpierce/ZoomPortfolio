"use client";

import { CameraControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lyonel from "./Lyonel";
import {
  EffectComposer,
  DepthOfField,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "@/hooks/use-controls";
import { cn } from "@/lib/utils";

const VideoCanvas = () => {
  const controls = useControls();

  return (
    <div className="flex items-center h-full relative">
      {/* <div className="h-[80vh] w-full absolute"> */}
      <div
        className={cn(
          "h-[80vh] w-full absolute",
          controls.isPortfolioOpen
            ? "h-1/6 w-80 bottom-0 right-0 mb-24 mr-8 aspect-video"
            : "h-[80vh] w-full"
        )}
      >
        <Canvas
          camera={{
            position: [
              -0.671807189834583, 0.3149880954995405, 1.5225959406311749,
            ],
            fov: 65,
          }}
        >
          <Lyonel />
          <EffectComposer multisampling={10} enableNormalPass={true}>
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
  return <CameraControls />;
};
