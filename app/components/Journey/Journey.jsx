import { Background } from "./Background";
import { Plane } from "./Plane";
import { Cloud3D } from "./Cloud3D";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";

export const Journey = () => {
  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
    };
  }, []);

  const cA = useControls("Cloud A", options);
  const cB = useControls("Cloud B", options);
  const cC = useControls("Cloud C", options);
  return (
    <>
      <OrbitControls />
      <Background />
      <Plane />
      <Cloud3D
        position={[5, 0, 10]}
        rotation={[cA.x, cA.y, cA.z]}
        visible={cA.visible}
      />
      <Cloud3D
        position={[-5, 2, 10]}
        rotation={[cB.x, cB.y, cB.z]}
        visible={cB.visible}
      />
      <Cloud3D
        position={[5, 0, -10]}
        rotation={[cC.x, cC.y, cC.z]}
        visible={cC.visible}
      />
    </>
  );
};
