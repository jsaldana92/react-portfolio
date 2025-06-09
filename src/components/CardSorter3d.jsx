import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';

const Card = ({ position, targetPosition, delay, label }) => {
  const ref = useRef();
  const [phase, setPhase] = useState('pile');
  const [startTime] = useState(Date.now() + delay);
  const [lastDirection, setLastDirection] = useState('toTarget');
  const [isPaused, setIsPaused] = useState(false);

  useFrame(() => {
    if (!ref.current || isPaused) return;

    const now = Date.now();
    const pos = ref.current.position;
    const pileVec = new THREE.Vector3(...position);
    const targetVec = new THREE.Vector3(...targetPosition);

    if (now > startTime && phase === 'pile') {
      pos.lerp(targetVec, 0.04);
      if (pos.distanceTo(targetVec) < 0.1 && lastDirection === 'toTarget') {
        setTimeout(() => {
          setPhase('return');
          setLastDirection('toPile');
        }, 2000); // pause while grouped
      }
    }

    if (phase === 'return') {
      pos.lerp(pileVec, 0.04);
      if (pos.distanceTo(pileVec) < 0.1 && lastDirection === 'toPile') {
        setIsPaused(true); // pause before restarting
        setTimeout(() => {
          setPhase('pile');
          setLastDirection('toTarget');
          setIsPaused(false); // resume loop
        }, 2000); // pause before flying out again
      }
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[5.4, 7.2, 0.2]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      <Text
        position={[0, 0, 0.11]}
        fontSize={0.8}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontStyle= "bold"
        
      >
        {label}
      </Text>
    </group>
  );
};

const labels = [
  'Proximity', 'Groom', 'Play', 'Contact',
  'Inactive', 'Locomote', 'Manipulate', 'Share',
  'Aggress', 'Note', 'Feed', 'Sexual'
];


const CardPile = () => {
  const pilePosition = [-12, 0, 0];

  const groups = [
    [8, 3, 0],
    [10, -3, 0],
    [12, 1, 0],
  ];

  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => {
        const targetGroup = groups[i % groups.length];
        const offset = [
          targetGroup[0] + (Math.random() - 0.5),
          targetGroup[1] + (Math.random() - 0.5),
          (Math.random() - 0.5) * 0.2,
        ];
        const initialOffset = [
          pilePosition[0] + Math.random() * 0.5,
          pilePosition[1] + Math.random() * 0.5,
          Math.random() * 0.5,
        ];
        return (
          <Card
            key={i}
            position={initialOffset}
            targetPosition={offset}
            delay={i * 300}
            label={labels[i]}
          />
        );
      })}
    </>
  );
};

const CardSorter3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <CardPile />
    </Canvas>
  );
};

export default CardSorter3D;