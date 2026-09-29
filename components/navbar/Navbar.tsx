"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
export default function Navbar(){
 const [s,setS]=useState(false),[open,setOpen]=useState(false),[acc,setAcc]=useState<string|null>(null),[hover,setHover]=useState<string|null>(null);
 useEffect(()=>{const f=()=>setS(scrollY>24);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f);},[]);
 return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${s?"h-16 border-white/10 bg-deep/80 text-white backdrop-blur-md":"h-20 border-transparent text-navy"}`}>
 <nav aria-label="Primary" className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-12">
 <Link href="/" aria-label="Global Business Summits home"><Image src="/logo/logo.jpeg" alt="Global Business Summits" width={150} height={80} className={`h-10 w-auto rounded-sm ${s?"bg-white p-1":""}`}/></Link>
 <ul className="hidden items-center gap-8 lg:flex">{navigation.map(n=><li key={n.label} className="relative" onMouseEnter={()=>setHover(n.label)} onMouseLeave={()=>setHover(null)}>
  <Link href={n.href} className="flex items-center gap-1 text-sm font-semibold hover:text-teal">{n.label}{n.children&&<ChevronDown size={14}/>}</Link>
  <AnimatePresence>{n.children&&hover===n.label&&<motion.ul initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}} transition={{duration:.2}} className="absolute left-0 top-full mt-3 w-56 border border-white/10 bg-deep p-2 text-white shadow-xl">
   {n.children.map(c=><li key={c.label}><Link href={c.href} className="block px-3 py-2 text-sm hover:bg-white/10 hover:text-cyan">{c.label}</Link></li>)}</motion.ul>}</AnimatePresence></li>)}</ul>
 <Link href="/contact" className="hidden bg-teal px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan hover:text-deep lg:block">Partner With Us</Link>
 <button className="lg:hidden" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
 <AnimatePresence>{open&&<motion.div initial={{clipPath:"inset(0 0 100% 0)"}} animate={{clipPath:"inset(0 0 0% 0)"}} exit={{clipPath:"inset(0 0 100% 0)"}} transition={{duration:.5,ease:[.7,0,.2,1]}} className="fixed inset-0 top-0 z-[-1] overflow-y-auto bg-deep px-6 pb-10 pt-24 text-white lg:hidden">
  {navigation.map(n=><div key={n.label} className="border-b border-white/10">
   <div className="flex items-center justify-between py-4 text-3xl font-bold tracking-tight"><Link href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>
   {n.children&&<button aria-label={`Toggle ${n.label}`} aria-expanded={acc===n.label} onClick={()=>setAcc(acc===n.label?null:n.label)}><ChevronDown className={acc===n.label?"rotate-180":""}/></button>}</div>
   {n.children&&acc===n.label&&<ul className="pb-4 pl-2">{n.children.map(c=><li key={c.label}><Link href={c.href} onClick={()=>setOpen(false)} className="block py-2 text-cyan">{c.label}</Link></li>)}</ul>}</div>)}
  <Link href="/contact" onClick={()=>setOpen(false)} className="mt-8 block bg-teal py-4 text-center font-bold">Partner With Us</Link></motion.div>}</AnimatePresence></header>;}
