/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 hrestest.glb -t 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Boxers: THREE.SkinnedMesh;
    Fit_shirts: THREE.SkinnedMesh;
    CC_Base_Body_1: THREE.SkinnedMesh;
    CC_Base_Body_2: THREE.SkinnedMesh;
    CC_Base_Body_3: THREE.SkinnedMesh;
    CC_Base_Body_4: THREE.SkinnedMesh;
    CC_Base_Body_5: THREE.SkinnedMesh;
    CC_Base_Body_6: THREE.SkinnedMesh;
    CC_Base_Eye_1: THREE.SkinnedMesh;
    CC_Base_Eye_2: THREE.SkinnedMesh;
    CC_Base_Eye_3: THREE.SkinnedMesh;
    CC_Base_Eye_4: THREE.SkinnedMesh;
    CC_Base_EyeOcclusion_1: THREE.SkinnedMesh;
    CC_Base_EyeOcclusion_2: THREE.SkinnedMesh;
    CC_Base_TearLine_1: THREE.SkinnedMesh;
    CC_Base_TearLine_2: THREE.SkinnedMesh;
    CC_Base_Teeth_1: THREE.SkinnedMesh;
    CC_Base_Teeth_2: THREE.SkinnedMesh;
    CC_Base_Tongue: THREE.SkinnedMesh;
    Curly_fringe_1: THREE.SkinnedMesh;
    Curly_fringe_2: THREE.SkinnedMesh;
    CC_Base_BoneRoot: THREE.Bone;
  };
  materials: {
    Boxers: THREE.MeshStandardMaterial;
    Fit_shirts: THREE.MeshStandardMaterial;
    Std_Skin_Head: THREE.MeshStandardMaterial;
    Std_Skin_Body: THREE.MeshStandardMaterial;
    Std_Skin_Arm: THREE.MeshStandardMaterial;
    Std_Skin_Leg: THREE.MeshStandardMaterial;
    Std_Nails: THREE.MeshStandardMaterial;
    Std_Eyelash: THREE.MeshStandardMaterial;
    Std_Eye_R: THREE.MeshStandardMaterial;
    Std_Cornea_R: THREE.MeshStandardMaterial;
    Std_Eye_L: THREE.MeshStandardMaterial;
    Std_Cornea_L: THREE.MeshStandardMaterial;
    Std_Eye_Occlusion_R: THREE.MeshStandardMaterial;
    Std_Eye_Occlusion_L: THREE.MeshStandardMaterial;
    Std_Tearline_R: THREE.MeshStandardMaterial;
    Std_Tearline_L: THREE.MeshStandardMaterial;
    Std_Upper_Teeth: THREE.MeshStandardMaterial;
    Std_Lower_Teeth: THREE.MeshStandardMaterial;
    Std_Tongue: THREE.MeshStandardMaterial;
    Scalp_Transparency: THREE.MeshStandardMaterial;
    Hair_Transparency: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "Armature|Per-frame Expression"
  | "Key.001|Per-frame Expression"
  | "Key.005|Per-frame Expression"
  | "Key.004|Per-frame Expression"
  | "Key.003|Per-frame Expression"
  | "Key.002|Per-frame Expression"
  | "Key|Per-frame Expression"
  | "Key.006|Per-frame Expression";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]
  >
>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/hrestest.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={0.01}>
          <primitive object={nodes.CC_Base_BoneRoot} />
          <skinnedMesh
            name="Boxers"
            geometry={nodes.Boxers.geometry}
            material={materials.Boxers}
            skeleton={nodes.Boxers.skeleton}
          />
          <skinnedMesh
            name="Fit_shirts"
            geometry={nodes.Fit_shirts.geometry}
            material={materials.Fit_shirts}
            skeleton={nodes.Fit_shirts.skeleton}
          />
          <group name="CC_Base_Body">
            <skinnedMesh
              name="CC_Base_Body_1"
              geometry={nodes.CC_Base_Body_1.geometry}
              material={materials.Std_Skin_Head}
              skeleton={nodes.CC_Base_Body_1.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_2"
              geometry={nodes.CC_Base_Body_2.geometry}
              material={materials.Std_Skin_Body}
              skeleton={nodes.CC_Base_Body_2.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_3"
              geometry={nodes.CC_Base_Body_3.geometry}
              material={materials.Std_Skin_Arm}
              skeleton={nodes.CC_Base_Body_3.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_4"
              geometry={nodes.CC_Base_Body_4.geometry}
              material={materials.Std_Skin_Leg}
              skeleton={nodes.CC_Base_Body_4.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_5"
              geometry={nodes.CC_Base_Body_5.geometry}
              material={materials.Std_Nails}
              skeleton={nodes.CC_Base_Body_5.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_6"
              geometry={nodes.CC_Base_Body_6.geometry}
              material={materials.Std_Eyelash}
              skeleton={nodes.CC_Base_Body_6.skeleton}
            />
          </group>
          <group name="CC_Base_Eye">
            <skinnedMesh
              name="CC_Base_Eye_1"
              geometry={nodes.CC_Base_Eye_1.geometry}
              material={materials.Std_Eye_R}
              skeleton={nodes.CC_Base_Eye_1.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Eye_2"
              geometry={nodes.CC_Base_Eye_2.geometry}
              material={materials.Std_Cornea_R}
              skeleton={nodes.CC_Base_Eye_2.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Eye_3"
              geometry={nodes.CC_Base_Eye_3.geometry}
              material={materials.Std_Eye_L}
              skeleton={nodes.CC_Base_Eye_3.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Eye_4"
              geometry={nodes.CC_Base_Eye_4.geometry}
              material={materials.Std_Cornea_L}
              skeleton={nodes.CC_Base_Eye_4.skeleton}
            />
          </group>
          <group name="CC_Base_EyeOcclusion">
            <skinnedMesh
              name="CC_Base_EyeOcclusion_1"
              geometry={nodes.CC_Base_EyeOcclusion_1.geometry}
              material={materials.Std_Eye_Occlusion_R}
              skeleton={nodes.CC_Base_EyeOcclusion_1.skeleton}
            />
            <skinnedMesh
              name="CC_Base_EyeOcclusion_2"
              geometry={nodes.CC_Base_EyeOcclusion_2.geometry}
              material={materials.Std_Eye_Occlusion_L}
              skeleton={nodes.CC_Base_EyeOcclusion_2.skeleton}
            />
          </group>
          <group name="CC_Base_TearLine">
            <skinnedMesh
              name="CC_Base_TearLine_1"
              geometry={nodes.CC_Base_TearLine_1.geometry}
              material={materials.Std_Tearline_R}
              skeleton={nodes.CC_Base_TearLine_1.skeleton}
            />
            <skinnedMesh
              name="CC_Base_TearLine_2"
              geometry={nodes.CC_Base_TearLine_2.geometry}
              material={materials.Std_Tearline_L}
              skeleton={nodes.CC_Base_TearLine_2.skeleton}
            />
          </group>
          <group name="CC_Base_Teeth">
            <skinnedMesh
              name="CC_Base_Teeth_1"
              geometry={nodes.CC_Base_Teeth_1.geometry}
              material={materials.Std_Upper_Teeth}
              skeleton={nodes.CC_Base_Teeth_1.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Teeth_2"
              geometry={nodes.CC_Base_Teeth_2.geometry}
              material={materials.Std_Lower_Teeth}
              skeleton={nodes.CC_Base_Teeth_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="CC_Base_Tongue"
            geometry={nodes.CC_Base_Tongue.geometry}
            material={materials.Std_Tongue}
            skeleton={nodes.CC_Base_Tongue.skeleton}
          />
          <group name="Curly_fringe">
            <skinnedMesh
              name="Curly_fringe_1"
              geometry={nodes.Curly_fringe_1.geometry}
              material={materials.Scalp_Transparency}
              skeleton={nodes.Curly_fringe_1.skeleton}
            />
            <skinnedMesh
              name="Curly_fringe_2"
              geometry={nodes.Curly_fringe_2.geometry}
              material={materials.Hair_Transparency}
              skeleton={nodes.Curly_fringe_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hrestest.glb");
