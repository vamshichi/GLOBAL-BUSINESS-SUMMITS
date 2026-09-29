"use client";
import { useState, useCallback, useEffect } from "react";
export type Photo={id:string;src:string;alt:string};
export default function Gallery({photos}:{photos:Photo[]}){
 const [active,setActive]=useState<number|null>(null);
 const close=useCallback(()=>setActive(null),[]);
 useEffect(()=>{
  if(active===null)return;
  const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")close();if(e.key==="ArrowRight")setActive(a=>a===null?a:(a+1)%photos.length);if(e.key==="ArrowLeft")setActive(a=>a===null?a:(a-1+photos.length)%photos.length);};
  addEventListener("keydown",onKey);return()=>removeEventListener("keydown",onKey);
 },[active,close,photos.length]);
 if(!photos.length)return <p className="max-w-md text-navy/70">Photos from our summits will appear here after our next event.</p>;
 return <>
  <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{photos.map((p,i)=>
   <button key={p.id} onClick={()=>setActive(i)} className="mb-4 block w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={p.src} alt={p.alt} loading="lazy" className="w-full transition duration-500 hover:scale-105"/></button>)}</div>
  {active!==null&&<div role="dialog" aria-modal className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/95 p-6" onClick={close}>
   <button aria-label="Close" onClick={close} className="absolute right-6 top-6 text-3xl text-white">×</button>
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={photos[active].src} alt={photos[active].alt} className="max-h-[85vh] max-w-[90vw] object-contain" onClick={e=>e.stopPropagation()}/></div>}
 </>;}
