/**
 * Shim de tipos para @react-three/fiber 8 con React 19.
 *
 * R3F 8 declara los JSX intrinsics (mesh, group, points...) augmentando el
 * namespace global `JSX.IntrinsicElements`. En React 19 ese namespace pasó
 * a `React.JSX.IntrinsicElements`, así que las augmentations de R3F 8 ya
 * no se aplican y TS no encuentra `<group>`, `<mesh>`, etc.
 *
 * Solo declaramos los intrinsics que usamos hoy en HeroVisual. Si añadimos
 * más, los listamos aquí.
 *
 * Eliminar este shim cuando subamos a @react-three/fiber 9 (compatible
 * nativamente con React 19) o cuando el HeroVisual deje de existir.
 */
import type { Object3DNode, GroupProps } from '@react-three/fiber';
import type * as THREE from 'three';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: GroupProps;
      points: Object3DNode<THREE.Points, typeof THREE.Points>;
    }
  }
}

export {};
