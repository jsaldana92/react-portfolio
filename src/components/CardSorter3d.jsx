// src/components/CardSorter3d.jsx

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Text } from "@react-three/drei";
import * as THREE from "three";

const colors = [
  "#ADD8E6", // lightblue
  "#FFB6C1", // lightpink
  "#90EE90", // lightgreen
  "#FFA07A", // lightsalmon
  "#D8BFD8", // thistle
  "#FFFFE0", // lightyellow
  "#E6E6FA", // lavender
  "#F08080", // lightcoral
  "#87CEFA", // lightskyblue
  "#FFC0CB", // pink
  "#B0E0E6", // powderblue
  "#FFE4B5", // moccasin
];

const getScreenSize = () => {
  const width = window.innerWidth;
  if (width < 640) return "sm"; // small: <640px
  if (width < 1024) return "md"; // medium: <1024px
  return "lg"; // large: 1024px+
};

const Card = ({
  position,
  targetPosition,
  label,
  isHovered,
  screenSize,
  color,
}) => {
  const ref = useRef();
  const [progress, setProgress] = useState(0);

  useFrame(() => {
    if (!ref.current) return;

    const pos = ref.current.position;
    const target = isHovered ? targetPosition : position;

    // Move smoothly toward the target position
    pos.lerp(new THREE.Vector3(...target), 0.05);
  });

  const cardSizeMap = {
    sm: [2.5, 3.0, 0.2],
    md: [3.0, 3.5, 0.2],
    lg: [3.2, 4.0, 0.2],
  };

  const fontSizeMap = {
    sm: 0.45,
    md: 0.55,
    lg: 0.6,
  };

  const cardSize = cardSizeMap[screenSize] || cardSizeMap.md;
  const fontSize = fontSizeMap[screenSize] || fontSizeMap.md;

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={cardSize} />
        <meshStandardMaterial color={color || "lightblue"} />
      </mesh>
      <Text
        position={[0, 0, 0.11]}
        fontSize={fontSize}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontStyle="bold"
      >
        {label}
      </Text>
    </group>
  );
};

const labels = [
  "Note",
  "Manipulate",
  "Play",
  "Groom",
  "Sexual",
  "Aggress",
  "Feed",
  "Share",
  "Locomote",
  "Inactive",
  "Contact",
  "Proximity",
];

const positionMap = {
  sm: [
    { start: [-4, 3, 0], end: [-7.5, 0, 0] } /*{Note}*/,
    { start: [-4.5, 2.5, 0.1], end: [-7, -5, 0.1] } /*{Manipulate}*/,
    { start: [-3, 2, 0.2], end: [-3.2, -2, 0.2] } /*{Play}*/,
    { start: [-6, 1.5, 0.3], end: [-2, -1, 0.3] } /*{Groom}*/,
    { start: [-0.5, 1, 0.4], end: [-2.5, 2, 0.4] } /*{Sexual}*/,
    { start: [-2, 0.5, 0.5], end: [-3.5, 1, 0.5] } /*{Aggress}*/,
    { start: [-6, 0, 0.6], end: [2, 3, 0.6] } /*{Feed}*/,
    { start: [-5.5, -0.5, 0.7], end: [2.5, 3.2, 0.7] } /*{Share}*/,
    { start: [-1, -1, 1.1], end: [3, -3.2, 1.1] } /*{Locomote}*/,
    { start: [-6, -1.5, 0.9], end: [2.5, -2.4, 0.9] } /*{Inactive}*/,
    { start: [0, -2, 1.0], end: [7, -1, 1.0] } /*{Contact}*/,
    { start: [-2.5, -2.5, 0.8], end: [7.5, 1, 0.8] } /*{Proximity}*/,
  ],
  md: [
    { start: [-10, 3, 0], end: [10.7, 4, 0] } /*{Note}*/,
    { start: [-3, 2.5, 0.1], end: [10.5, -4, 0.1] } /*{Manipulate}*/,
    { start: [-6, 2, 0.2], end: [5, 3, 0.2] } /*{Play}*/,
    { start: [-8, 1.5, 0.3], end: [6.7, 0.8, 0.3] } /*{Groom}*/,
    { start: [-4.5, 1, 0.4], end: [3, 0, 0.4] } /*{Sexual}*/,
    { start: [-8.5, 0.5, 0.5], end: [4, -3, 0.5] } /*{Aggress}*/,
    { start: [-6, 0, 0.6], end: [-1, -2, 0.6] } /*{Feed}*/,
    { start: [-7, -0.5, 0.7], end: [-2, 0, 0.7] } /*{Share}*/,
    { start: [-5.5, -1, 0.8], end: [-6, 2, 0.8] } /*{Locomote}*/,
    { start: [-5.5, -1.5, 0.9], end: [-6.5, 0, 0.9] } /*{Inactive}*/,
    { start: [-9, -2, 1.0], end: [-10, -1, 1.0] } /*{Contact}*/,
    { start: [-7, -2.5, 1.1], end: [-10.3, 1, 1.1] } /*{Proximity}*/,
  ],
  lg: [
    { start: [-8, 3, 0], end: [-3, -1, 0] } /*{Note}*/,
    { start: [-12, 2.5, 0.1], end: [-11, 0, 0.1] } /*{Manipulate}*/,
    { start: [-8, 2, 0.2], end: [-2, 2.5, 0.2] } /*{Play}*/,
    { start: [-10, 1.5, 0.3], end: [-1, -3, 0.3] } /*{Groom}*/,
    { start: [-10, 1, 0.4], end: [1, 3, 0.4] } /*{Sexual}*/,
    { start: [-6, 0.5, 0.5], end: [-3, -1, 0.5] } /*{Aggress}*/,
    { start: [-8, 0, 0.6], end: [7, -3, 0.6] } /*{Feed}*/,
    { start: [-10, -0.5, 0.7], end: [5, 1, 0.7] } /*{Share}*/,
    { start: [-6, -1, 0.8], end: [10, 2, 0.8] } /*{Locomote}*/,
    { start: [-6, -1.5, 0.9], end: [11, 0, 0.9] } /*{Inactive}*/,
    { start: [-10.5, -2, 1.0], end: [-4, -2, 1.0] } /*{Contact}*/,
    { start: [-8, -2.5, 1.1], end: [-5, 2, 1.1] } /*{Proximity}*/,
  ],
};

const CardPile = ({ isHovered, screenSize }) => {
  const cardPositions = positionMap[screenSize];

  return (
    <>
      {labels.map((label, i) => (
        <Card
          key={i}
          position={cardPositions[i].start}
          targetPosition={cardPositions[i].end}
          label={label}
          isHovered={isHovered}
          screenSize={screenSize}
          color={colors[i]}
        />
      ))}
    </>
  );
};

const CardSorter3D = ({ isHovered }) => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <CardPile isHovered={isHovered} screenSize={screenSize} />
    </Canvas>
  );
};

export default CardSorter3D;
