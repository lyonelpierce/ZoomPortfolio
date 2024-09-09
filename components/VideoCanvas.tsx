"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  useProgress,
  Html,
} from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import { cn } from "@/lib/utils";
import { useControls } from "@/hooks/use-controls";
import { Chrome } from "lucide-react";

import Lyonel from "@/components/Lyonel";
import PortfolioTabs from "@/components/PortfolioTabs";
import { Suspense } from "react";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="bg-[#242424] h-screen w-screen flex flex-col justify-around items-center gap-12 font-semibold">
        <div />
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          <p className="text-center">
            Please wait the, the meeting host will let you in soon.
          </p>
          <p className="text-center">Lyonel Pierce Meeting</p>
        </div>
        {Math.floor(progress)}% loaded
      </div>
    </Html>
  );
};

const VideoCanvas = () => {
  const controls = useControls();

  return (
    <div className="flex items-center h-full relative">
      <div
        className={cn(
          "h-[80vh] w-full absolute",
          controls.isPortfolioOpen
            ? "h-1/6 w-80 bottom-0 right-0 mb-24 mr-8 aspect-video z-10"
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
          className={cn("w-full", controls.isPortfolioOpen && "max-w-80")}
        >
          <Suspense fallback={<Loader />}>
            <Lyonel />
          </Suspense>
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
          <Environment preset="apartment" background blur={0.1} />
        </Canvas>
      </div>
      {controls.isPortfolioOpen && (
        <div className="h-[80vh] w-full relative">
          <Image
            src="/images/wallpaper.jpg"
            alt="Lyonel"
            layout="fill"
            objectFit="cover w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full md:h-[85%] bg-zinc-800 w-full md:w-4/5 rounded-lg overflow-hidden">
            <PortfolioTabs />
          </div>
          <div className="hidden absolute bottom-0 h-12 w-full bg-zinc-800/40 backdrop-blur-md border-t border-slate-400/20 md:flex items-center justify-center">
            <ul>
              <li className="bg-zinc-400/20 p-2 rounded-lg cursor-pointer">
                <Chrome />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCanvas;

const CameraManager = () => {
  return <CameraControls />;
};
