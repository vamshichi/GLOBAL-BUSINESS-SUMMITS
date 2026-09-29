"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroGlobe from "@/components/globe/HeroGlobe";
import WhyUs from "@/components/sections/WhyUs";
import GlobalConnection from "@/components/sections/GlobalConnection";
const lines=["WHERE","INDUSTRIES","MEET THEIR","NEXT BIG","MOVE."];
const taglines=["Building Boardrooms, Not Just Ballrooms","Where Deals Are Made, Not Just Discussed","Turning Delegates Into Decision-Makers","One Stage. Infinite Opportunities."];
const pillars=[["Conferences & Summits","Big stages. Bigger conversations. We curate content that industries actually show up for.","/conferences-summits"],["Trainings","Skills that stick. People who perform. Learning built for the real world, not the classroom.","/trainings"],["Managed Events","From blank page to standing ovation — we run the show so you don't have to.","/managed-events"]];
export default function Home(){
 return <>
 <section className="grid-bg relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-ice">
  <div className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-4 px-6 pt-24 lg:grid-cols-[1.1fr_1fr] lg:px-12">
   <div className="relative z-10 py-10">
    <p className="mb-6 text-sm font-bold tracking-widest text-teal">GLOBAL BUSINESS SUMMITS</p>
    <h1 className="text-[clamp(2.75rem,8vw,7rem)] font-extrabold leading-[.95] tracking-tighter text-navy">
     {lines.map((l,i)=><span key={l} className="block overflow-hidden"><motion.span className={`block ${i===4?"text-teal":""}`} initial={{y:"100%"}} animate={{y:0}} transition={{duration:.9,delay:.15*i,ease:[.2,.7,.2,1]}}>{l}</motion.span></span>)}</h1>
    <p className="mt-8 max-w-lg text-lg text-navy/75">We design Summits, Conferences &amp; Trainings that turn rooms full of strangers into rooms full of deals.</p>
    <div className="mt-10 flex flex-wrap gap-4"><Link href="/events" className="bg-navy px-7 py-4 font-bold text-white transition hover:bg-teal">Explore Our Events</Link><Link href="/contact" className="border border-navy px-7 py-4 font-bold text-navy transition hover:bg-navy hover:text-white">Partner With Us</Link></div></div>
   <div className="h-[55vh] lg:h-[80vh]"><HeroGlobe/></div></div>
  <motion.div aria-hidden className="absolute bottom-6 left-1/2 h-10 w-px bg-teal" animate={{scaleY:[0,1,0],originY:0}} transition={{duration:2.4,repeat:Infinity}}/></section>
 <section aria-label="Taglines" className="overflow-hidden bg-navy py-6 text-white"><motion.div className="flex w-max gap-16 whitespace-nowrap text-xl font-semibold" animate={{x:["0%","-50%"]}} transition={{duration:40,repeat:Infinity,ease:"linear"}}>
  {[...taglines,...taglines].map((t,i)=><span key={i} className="flex items-center gap-16">{t}<span aria-hidden className="h-2 w-2 rounded-full bg-cyan"/></span>)}</motion.div></section>
 <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-12"><div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
  <p className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">GLOBAL BUSINESS SUMMITS is a full-spectrum business events company, we build Conferences, run Summits, train talent, and manage events end-to-end, across industries and continents.</p>
  <p className="self-end text-4xl font-extrabold tracking-tighter">We don't fill seats.<br/>We fill <span className="text-teal underline decoration-cyan decoration-4 underline-offset-8">pipelines</span>.</p></div></section>
 <section className="mx-auto max-w-[1440px] px-6 pb-32 lg:px-12"><h2 className="mb-12 text-sm font-bold tracking-widest text-teal">WHAT WE DO</h2>
  <div className="grid border-t border-navy/20 lg:grid-cols-3">{pillars.map(([t,d,h],i)=><Link key={t} href={h} className="group relative border-b border-navy/20 p-8 transition-colors duration-300 hover:bg-deep hover:text-white lg:border-r lg:last:border-r-0">
   <span className="block text-6xl font-extrabold text-teal transition-transform duration-500 group-hover:-translate-y-2">0{i+1}</span>
   <h3 className="mt-16 text-3xl font-extrabold uppercase tracking-tight">{t}</h3><p className="mt-4 max-w-sm opacity-75">{d}</p>
   <span aria-hidden className="mt-10 block text-3xl text-cyan transition-transform duration-300 group-hover:translate-x-3">→</span></Link>)}</div></section>
 <WhyUs/>
 <GlobalConnection/>
 </>;}
