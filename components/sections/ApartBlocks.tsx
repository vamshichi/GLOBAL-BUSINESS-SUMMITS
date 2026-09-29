"use client";
import { motion } from "framer-motion";
const blocks=["MARKET-LED, NOT CALENDAR-LED","CONTENT FIRST","GLOBAL REACH, LOCAL PRECISION","RESULTS YOU CAN MEASURE"];
export default function ApartBlocks(){
 return <section className="border-t border-navy/20 py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-12">
  <h2 className="mb-12 text-sm font-bold tracking-widest text-teal">WHAT SETS US APART</h2>
  <div className="grid gap-px bg-navy/20 md:grid-cols-2">{blocks.map((b,i)=><motion.div key={b} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:i*.08}}
   className="group relative bg-white p-10 transition-colors duration-300 hover:bg-navy hover:text-white">
   <span aria-hidden className="mb-6 block h-0.5 w-12 bg-teal transition-all duration-300 group-hover:w-24"/>
   <h3 className="text-2xl font-extrabold leading-snug tracking-tight md:text-3xl">{b}</h3></motion.div>)}</div></div></section>;}
