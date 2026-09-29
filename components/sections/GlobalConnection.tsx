"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Scene=dynamic(()=>import("@/components/globe/Scene"),{ssr:false});
export default function GlobalConnection(){
 return <section className="relative border-t border-navy/20 bg-white py-32">
  <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
   <div className="h-[380px] order-2 lg:order-1"><Suspense fallback={null}><Scene/></Suspense></div>
   <div className="order-1 lg:order-2">
    <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-tight tracking-tighter text-navy">GLOBAL REACH,<br/>LOCAL PRECISION.</h2>
    <p className="mt-6 max-w-md text-lg text-navy/70">Our network moves across industries and continents, connecting the people, ideas and markets that make a summit matter.</p></div></div></section>;}
