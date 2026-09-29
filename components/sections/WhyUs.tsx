"use client";
import { motion } from "framer-motion";
const NODES=[["CONNECTION",6,18],["CONTENT",70,8],["PEOPLE",88,42],["BUSINESS",22,62],["OUTCOMES",58,78]] as const;
const LINKS=[[0,1],[0,3],[1,2],[1,4],[3,4],[2,4]];
export default function WhyUs(){
 return <section className="relative overflow-hidden border-t border-navy/20 bg-deep py-32 text-white">
  <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-2 lg:px-12">
   <div>
    <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-tighter">WE DON'T ORGANIZE EVENTS.<br/>WE ENGINEER OUTCOMES.</h2>
    <p className="mt-8 max-w-md text-lg text-white/70">Every summit we build starts with one question: what will delegates walk away with? Not badges. Not brochures. Business.</p></div>
   <div className="relative h-[380px] w-full">
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
     {LINKS.map(([a,b],i)=><motion.line key={i} x1={NODES[a][1]} y1={NODES[a][2]} x2={NODES[b][1]} y2={NODES[b][2]}
      stroke="#0A9BA8" strokeWidth="0.3" initial={{pathLength:0,opacity:0}} whileInView={{pathLength:1,opacity:.6}} viewport={{once:true}} transition={{duration:1.2,delay:i*.12}}/>)}
    </svg>
    {NODES.map(([label,x,y],i)=><motion.div key={label} className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold tracking-wide text-cyan"
     style={{left:`${x}%`,top:`${y}%`}} initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.5,delay:i*.1}}>
     <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-teal align-middle"/>{label}</motion.div>)}
   </div></div></section>;}
