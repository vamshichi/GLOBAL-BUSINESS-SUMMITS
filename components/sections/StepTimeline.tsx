"use client";
import { useState } from "react";
const steps=[["01","RESEARCH","We study the industry before we design a single session."],["02","CURATE","Content and speakers chosen for relevance, not availability."],["03","DESIGN","Every stage, session and room engineered around outcomes."],["04","DELIVER","On the ground, on schedule, on brand."],["05","MEASURE","We track what delegates actually walked away with."]] as const;
export default function StepTimeline(){
 const [active,setActive]=useState(0);
 return <div className="mt-16">
  <div className="flex gap-2 overflow-x-auto pb-2">{steps.map((s,i)=><button key={s[0]} onClick={()=>setActive(i)}
   className={`shrink-0 border px-5 py-3 text-sm font-bold tracking-wide transition-colors ${active===i?"border-navy bg-navy text-white":"border-navy/30 text-navy/60 hover:border-navy"}`}>{s[0]} {s[1]}</button>)}</div>
  <div aria-hidden className="relative mt-6 h-1 bg-navy/15"><div className="absolute inset-y-0 left-0 bg-teal transition-all duration-500" style={{width:`${(active+1)/steps.length*100}%`}}/></div>
  <p key={active} className="mt-8 max-w-xl text-2xl font-semibold leading-snug text-navy">{steps[active][2]}</p></div>;}
