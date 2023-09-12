import { Cloud, OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Plane } from "./Plane";

export const Journey = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <Plane />
    </>
  );
};
