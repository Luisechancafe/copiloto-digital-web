'use client';

/**
 * HeroVisual — escena 3D del hero de copiloto.digital
 *
 * Nube de partículas elegante que sugiere movimiento orbital. No representa
 * un avión, ni un copiloto literal: insinúa una inteligencia "viva" girando
 * alrededor de un núcleo. Dos capas (brand + acento claro) con reactividad
 * sutil al cursor.
 *
 * Se importa siempre con `dynamic({ ssr: false })` desde HeroSection en
 * desktop (oculto en < lg). Por eso aquí podemos asumir cliente y usar
 * libremente refs, useFrame y mouse events.
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Distribución esférica con ruido — genera positions Float32Array memoizado.
// ---------------------------------------------------------------------------
function useSpherePositions(count: number, radius: number): Float32Array {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribución uniforme en esfera (método rejection-free).
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      // Ruido radial sutil para evitar superficie perfecta.
      const r = radius * (0.85 + Math.random() * 0.3);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count, radius]);
}

// ---------------------------------------------------------------------------
// Capa de partículas — usa <Points> de drei + PointMaterial.
// La animación deforma Y en place (sin recrear arrays) leyendo de un buffer
// "base" inmutable.
// ---------------------------------------------------------------------------
interface ParticlesFieldProps {
  count: number;
  color: string;
  radius: number;
  size: number;
  speed?: number;
  amplitude?: number;
  reduceMotion: boolean;
}

function ParticlesField({
  count,
  color,
  radius,
  size,
  speed = 0.5,
  amplitude = 0.06,
  reduceMotion
}: ParticlesFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const basePositions = useSpherePositions(count, radius);

  // Buffer "live" que se modifica en place cada frame.
  const livePositions = useMemo(
    () => new Float32Array(basePositions),
    [basePositions]
  );

  useFrame((state) => {
    if (reduceMotion) return;
    const points = pointsRef.current;
    if (!points) return;

    const t = state.clock.getElapsedTime();
    const attr = points.geometry.attributes.position as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const baseX = basePositions[ix + 0];
      const baseY = basePositions[ix + 1];
      const baseZ = basePositions[ix + 2];

      // Deformación sinusoidal: cada partícula oscila levemente en Y.
      const offset = Math.sin(t * speed + baseX * 1.5 + baseZ * 0.7) * amplitude;
      arr[ix + 0] = baseX;
      arr[ix + 1] = baseY + offset;
      arr[ix + 2] = baseZ;
    }
    attr.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={livePositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// ---------------------------------------------------------------------------
// Escena: grupo con dos capas de partículas + tilt suave hacia el cursor.
// ---------------------------------------------------------------------------
interface SceneProps {
  reduceMotion: boolean;
}

function Scene({ reduceMotion }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetTilt = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  // Mouse listener global a la ventana — normaliza a [-1, 1].
  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const nx = (event.clientX / window.innerWidth) * 2 - 1;
      const ny = (event.clientY / window.innerHeight) * 2 - 1;
      targetTilt.current.x = ny * 0.25;
      targetTilt.current.y = nx * 0.35;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [size]);

  useFrame((_state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    if (reduceMotion) {
      group.rotation.set(0, 0, 0);
      return;
    }

    // Rotación base lenta sobre Y (~0.04 rad/s).
    group.rotation.y += delta * 0.04;

    // Tilt suave hacia cursor — lerp a target.
    group.rotation.x += (targetTilt.current.x - group.rotation.x) * 0.04;
    const targetZ = targetTilt.current.y * 0.15;
    group.rotation.z += (targetZ - group.rotation.z) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Capa principal brand */}
      <ParticlesField
        count={1500}
        color="#eb3350"
        radius={2.6}
        size={0.018}
        speed={0.6}
        amplitude={0.08}
        reduceMotion={reduceMotion}
      />
      {/* Capa interna en rosa pálido (acento) */}
      <ParticlesField
        count={300}
        color="#fbccd2"
        radius={1.6}
        size={0.012}
        speed={0.9}
        amplitude={0.05}
        reduceMotion={reduceMotion}
      />
    </group>
  );
}

// ---------------------------------------------------------------------------
// Hook prefers-reduced-motion.
// ---------------------------------------------------------------------------
function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduce;
}

// ---------------------------------------------------------------------------
// Componente exportado: Canvas R3F a pantalla parcial.
// ---------------------------------------------------------------------------
export default function HeroVisual() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <Canvas
      className="opacity-90"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <Scene reduceMotion={reduceMotion} />
      </Suspense>
    </Canvas>
  );
}
