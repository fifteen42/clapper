import { useEffect, useState } from "react"
import * as THREE from "three"

import { useTimelineState } from "./useTimelineState"
import { useThree } from "@react-three/fiber";
import { leftBarTrackScaleWidth } from "@/constants/themes";

export const useCursorGeometry = () => {

  const cellWidth = useTimelineState(s => s.horizontalZoomLevel)

  const [gridlines, setGridLines] = useState([] as THREE.BufferGeometry<THREE.NormalBufferAttributes>[]);

  const maxHeight = useTimelineState(s => s.maxHeight)

  useEffect(() => {

    const thisLines = [] as THREE.BufferGeometry<THREE.NormalBufferAttributes>[];

    for (let i = 0; i < 3; i++) {
      const verticalLinePoints = [
        new THREE.Vector3(i, 0, 7),
        new THREE.Vector3(i, -maxHeight, 7)
      ];
      const verticalLineGeometry = new THREE.BufferGeometry().setFromPoints(verticalLinePoints);

      thisLines.push(verticalLineGeometry);
    }
   
    setGridLines(thisLines);
  }, [maxHeight, cellWidth]);

  return gridlines;
};