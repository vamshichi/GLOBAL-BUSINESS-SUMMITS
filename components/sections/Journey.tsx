"use client";
import { motion } from "framer-motion";
const stages=["CONCEPT","STRATEGY","PRODUCTION","DELEGATES","ON-GROUND","REPORTING"];
export default function Journey(){
 return <div className="mt-16 flex flex-wrap items-center gap-3">{stages.map((s,i)=><motion.div key={s} className="flex items-center gap-3" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}>
  <span className="border border-navy/30 px-4 py-2 text-sm font-bold tracking-wide">{s}</span>
  {i<stages.length-1&&<span aria-hidden className="text-teal">→</span>}</motion.div>)}</div>;}
