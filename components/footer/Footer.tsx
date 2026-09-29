import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";
const cols=[["Company",[["About Us","/about"],["Careers","/careers"],["Contact","/contact"]]],
["Services",[["Conferences & Summits","/conferences-summits"],["Trainings","/trainings"],["Managed Events","/managed-events"]]],
["Events",[["Upcoming Events","/events#upcoming"],["Past Events","/events#past"]]],
["Media",[["Press & News","/media#press"],["Photo Gallery","/media#gallery"],["Testimonials","/media#testimonials"]]]] as const;
export default function Footer(){
 return <footer className="relative overflow-hidden bg-deep pt-24 text-white">
  <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-20">
   <circle cx="200" cy="200" r="180" fill="none" stroke="#0A9BA8" strokeWidth="1"/>
   <circle cx="200" cy="200" r="140" fill="none" stroke="#2EC4D6" strokeWidth="1"/></svg>
  <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
   <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
    <div><Image src="/logo/logo.jpeg" alt="Global Business Summits" width={160} height={85} className="h-12 w-auto bg-white p-1"/>
     <p className="mt-6 max-w-xs text-white/60">Conferences, summits, trainings and managed events, built for outcomes.</p>
     <div className="mt-6 flex gap-4 text-white/60">
      <a href="#" aria-label="LinkedIn" className="hover:text-cyan"><Linkedin size={20}/></a>
      <a href="#" aria-label="Twitter" className="hover:text-cyan"><Twitter size={20}/></a>
      <a href="#" aria-label="Instagram" className="hover:text-cyan"><Instagram size={20}/></a></div></div>
    {cols.map(([title,links])=><div key={title}><h3 className="mb-4 text-sm font-bold tracking-widest text-white/50">{title}</h3>
     <ul className="space-y-3">{links.map(([l,h])=><li key={l}><Link href={h} className="text-white/80 hover:text-cyan">{l}</Link></li>)}</ul></div>)}</div>
   <p className="py-8 text-center text-sm font-semibold tracking-wide text-white/50">GLOBAL BUSINESS SUMMITS — WHERE INDUSTRIES CONVENE, CONNECT &amp; GROW.</p></div></footer>;}
