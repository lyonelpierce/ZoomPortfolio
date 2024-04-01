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

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Chrome } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

const VideoCanvas = () => {
  const controls = useControls();

  const portfolioItems = [
    {
      name: "Eliza Pierce",
      value: "elizapierce",
      description: "3D E-commerce Jewelry",
      url: "https://elizapierce.com/",
      favicon: "/images/eliza.svg",
    },
    {
      name: "Inkspire",
      value: "inkspire",
      description: "AI Tattoo Generator",
      url: "https://inkspireai.com/",
      favicon: "/images/inkspire.ico",
    },
    {
      name: "Calificatuprofe",
      value: "calificatuprofe",
      description: "Professor rating system",
      url: "https://calificatuprofe.ec/",
      favicon: "/images/rate.ico",
    },
  ];

  return (
    <div className="flex items-center h-full relative">
      {/* <div className="h-[80vh] w-full absolute"> */}
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
      {controls.isPortfolioOpen && (
        <div className="h-[80vh] w-full relative">
          <Image
            src="/images/wallpaper.jpg"
            alt="Lyonel"
            layout="fill"
            objectFit="cover w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85%] bg-zinc-800 w-4/5 rounded-lg overflow-hidden">
            <Tabs>
              <TabsList className="bg-zinc-800">
                {portfolioItems.map((item) => (
                  <TabsTrigger
                    value={item.value}
                    className="rounded-b-none w-48"
                    key={item.name}
                  >
                    <p className="text-xs truncate flex items-center">
                      <Image
                        src={item.favicon}
                        alt={item.name}
                        width={14}
                        height={14}
                        className="mr-2"
                      />
                      {item.name} - {item.description}
                    </p>
                  </TabsTrigger>
                ))}
              </TabsList>
              {portfolioItems.map((item) => (
                <TabsContent value={item.value} key={item.name}>
                  <iframe
                    src={item.url}
                    className="absolute bottom-0 w-full h-[95%]"
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
          <div className="absolute bottom-0 h-12 w-full bg-zinc-800/40 backdrop-blur-md border-t border-slate-400/20 flex items-center justify-center">
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
