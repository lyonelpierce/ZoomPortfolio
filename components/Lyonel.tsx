import { useAIModel } from "@/hooks/use-model";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { MathUtils } from "three";
import { randInt } from "three/src/math/MathUtils.js";

const ANIMATION_FADE_TIME = 0.5;

const Lyonel = ({ ...props }) => {
  const group = useRef(null);
  const { scene } = useGLTF("/models/lyonel.glb");

  const { animations } = useGLTF("/models/hrestest.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const [animation, setAnimation] = useState("Idle");

  const currentMessage = useAIModel((state) => state.currentMessage);
  const loading = useAIModel((state) => state.loading);

  // BLINK
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;

    const nextBlink = () => {
      blinkTimeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => {
          setBlink(false);
          nextBlink();
        }, 100);
      }, randInt(1000, 5000));
    };

    nextBlink();

    return () => clearTimeout(blinkTimeout);
  }, []);

  const lerpMorphTarget = (target: any, value: any, speed = 0.1) => {
    scene.traverse((child: any) => {
      if (child.isSkinnedMesh && child.morphTargetDictionary) {
        const index = child.morphTargetDictionary[target];
        if (
          index === undefined ||
          child.morphTargetInfluences[index] === undefined
        )
          return;
        child.morphTargetInfluences[index] = MathUtils.lerp(
          child.morphTargetInfluences[index],
          value,
          speed
        );
      }
    });
  };

  useEffect(() => {
    if (
      currentMessage &&
      currentMessage.audioPlayer &&
      currentMessage.audioPlayer.currentTime > 0
    ) {
      setAnimation(randInt(0, 1) ? "Meeting" : "Talking");
    } else {
      setAnimation("Idle");
    }
  }, [currentMessage, loading]);

  useEffect(() => {
    actions[animation]
      ?.reset()
      .fadeIn(mixer.time > 0 ? ANIMATION_FADE_TIME : 0)
      .play();
    return () => {
      actions[animation]?.fadeOut(ANIMATION_FADE_TIME);
    };
  }, [animation, actions]);

  useFrame(() => {
    lerpMorphTarget("Eyes_Blink", blink ? 1 : 0, 0.5);

    for (let i = 0; i <= 21; i++) {
      lerpMorphTarget(i, 0, 0.1); // reset morph targets
    }

    if (
      currentMessage &&
      currentMessage.visemes &&
      currentMessage.audioPlayer
    ) {
      for (let i = currentMessage.visemes.length - 1; i >= 0; i--) {
        const viseme = currentMessage.visemes[i];
        if (currentMessage.audioPlayer.currentTime * 1000 >= viseme[0]) {
          lerpMorphTarget(viseme[1], 1, 0.2);
          break;
        }
      }
      if (
        actions[animation]!.time >
        actions[animation]!.getClip().duration - ANIMATION_FADE_TIME
      ) {
        setAnimation((animation) =>
          animation === "Meeting" ? "Talking" : "Meeting"
        );
      }
    }
  });

  return (
    <group
      {...props}
      position={[0, -3.3, 0]}
      ref={group}
      rotation={[89.5, 0, 0.4]}
      scale={2.8}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Lyonel;
