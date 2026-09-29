"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
const ll=(lat:number,lon:number,r=1)=>{const p=(90-lat)*Math.PI/180,t=(lon+180)*Math.PI/180;return new THREE.Vector3(-r*Math.sin(p)*Math.cos(t),r*Math.cos(p),r*Math.sin(p)*Math.sin(t));};
// Abstract regions only (not office locations)
const REGIONS:[number,number][]=[[40,-100],[50,10],[25,50],[20,78],[35,105],[-15,-55],[-5,20],[-30,135]];
export function GlobalGlobe({dots}:{dots:number}){
 const pts=useMemo(()=>{const a=new Float32Array(dots*3);for(let i=0;i<dots;i++){const y=1-2*(i+.5)/dots,r=Math.sqrt(1-y*y),t=Math.PI*(1+Math.sqrt(5))*i;a.set([Math.cos(t)*r*1.005,y*1.005,Math.sin(t)*r*1.005],i*3);}return a;},[dots]);
 return <group><mesh><sphereGeometry args={[1,64,64]}/><meshStandardMaterial color="#0B2347" roughness={.7}/></mesh>
 <points><bufferGeometry><bufferAttribute attach="attributes-position" array={pts} count={dots} itemSize={3}/></bufferGeometry><pointsMaterial color="#2EC4D6" size={.008} transparent opacity={.5}/></points>
 <mesh scale={1.12}><sphereGeometry args={[1,48,48]}/><meshBasicMaterial color="#2EC4D6" transparent opacity={.06} side={THREE.BackSide}/></mesh></group>;}
export function OrbitLines(){const r=useRef<THREE.Group>(null);useFrame((_,d)=>{if(r.current)r.current.rotation.z+=d*.05;});
 return <group ref={r} rotation={[1.2,.3,0]}>{[1.35,1.6].map((s,i)=><mesh key={s} rotation={[i?.4:0,0,0]}><torusGeometry args={[s,.003,8,160]}/><meshBasicMaterial color={i?"#0A9BA8":"#0B2347"}/></mesh>)}</group>;}
export function ConnectionNodes(){return <>{REGIONS.map(([a,b],i)=><mesh key={i} position={ll(a,b,1.02)}><sphereGeometry args={[.018,12,12]}/><meshBasicMaterial color="#2EC4D6"/></mesh>)}</>;}
export function ConnectionArcs(){
 const arcs=useMemo(()=>REGIONS.map((p,i)=>{const q=REGIONS[(i+2)%REGIONS.length],A=ll(...p),B=ll(...q),M=A.clone().add(B).multiplyScalar(.5).normalize().multiplyScalar(1.5);return new THREE.QuadraticBezierCurve3(A,M,B).getPoints(48);}),[]);
 return <>{arcs.map((a,i)=><Line key={i} points={a} color="#0A9BA8" lineWidth={1} transparent opacity={.7}/>)}</>;}
export function ParticleField({count}:{count:number}){
 const a=useMemo(()=>Float32Array.from({length:count*3},()=>(Math.random()-.5)*7),[count]);
 return <points><bufferGeometry><bufferAttribute attach="attributes-position" array={a} count={count} itemSize={3}/></bufferGeometry><pointsMaterial color="#0A9BA8" size={.015} transparent opacity={.5}/></points>;}
function Rig({children,calm}:{children:React.ReactNode;calm:boolean}){const g=useRef<THREE.Group>(null);
 useFrame(({pointer,camera},d)=>{if(!g.current)return;g.current.rotation.y+=d*.08;const k=calm?0:.25;camera.position.x+=(pointer.x*k-camera.position.x)*.03;camera.position.y+=(pointer.y*k-camera.position.y)*.03;camera.lookAt(0,0,0);});
 return <group ref={g}>{children}</group>;}
export default function Scene(){
 const mobile=typeof window!=="undefined"&&window.innerWidth<768;
 const calm=typeof window!=="undefined"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 return <Canvas dpr={[1,mobile?1.25:1.75]} camera={{position:[0,0,4],fov:40}} gl={{antialias:!mobile,alpha:true}}>
 <ambientLight intensity={.9}/><directionalLight position={[3,2,4]} intensity={1.5}/>
 <Rig calm={calm}><GlobalGlobe dots={mobile?900:2400}/><ConnectionNodes/><ConnectionArcs/><OrbitLines/></Rig>
 <ParticleField count={mobile?40:140}/></Canvas>;}
