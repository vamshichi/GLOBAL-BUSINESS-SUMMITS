"use client";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
const Scene=dynamic(()=>import("./Scene"),{ssr:false});
export default function HeroGlobe(){
 const [ok,set]=useState(true);
 useEffect(()=>{try{const c=document.createElement("canvas");set(!!(c.getContext("webgl2")||c.getContext("webgl")));}catch{set(false);}},[]);
 if(!ok)return <div aria-hidden className="mx-auto aspect-square w-3/4 rounded-full border border-navy/20"/>;
 return <div aria-hidden className="h-full w-full"><Suspense fallback={null}><Scene/></Suspense></div>;}
