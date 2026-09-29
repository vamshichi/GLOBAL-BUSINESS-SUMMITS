"use client";
import { useState } from "react";
const field="w-full border border-navy/25 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus-visible:border-teal";
export default function ContactForm(){
 const [sent,setSent]=useState(false);
 return sent?<p role="status" className="text-xl font-semibold text-teal">Message sent. Our team will be in touch shortly.</p>:
 <form className="grid gap-5 md:grid-cols-2" onSubmit={e=>{e.preventDefault();setSent(true);}}>
  <div className="md:col-span-1"><label htmlFor="name" className="mb-2 block text-sm font-semibold">Name</label><input id="name" required className={field}/></div>
  <div className="md:col-span-1"><label htmlFor="company" className="mb-2 block text-sm font-semibold">Company</label><input id="company" className={field}/></div>
  <div className="md:col-span-1"><label htmlFor="email" className="mb-2 block text-sm font-semibold">Email</label><input id="email" type="email" required className={field}/></div>
  <div className="md:col-span-1"><label htmlFor="phone" className="mb-2 block text-sm font-semibold">Phone</label><input id="phone" type="tel" className={field}/></div>
  <div className="md:col-span-2"><label htmlFor="interest" className="mb-2 block text-sm font-semibold">What are you looking for?</label>
   <select id="interest" className={field}><option>Attending an event</option><option>Partnering with us</option><option>Booking a training</option><option>Managed event enquiry</option><option>Other</option></select></div>
  <div className="md:col-span-2"><label htmlFor="message" className="mb-2 block text-sm font-semibold">Message</label><textarea id="message" rows={5} required className={field}/></div>
  <button type="submit" className="md:col-span-2 w-full bg-navy py-4 font-bold text-white transition hover:bg-teal md:w-auto md:px-10">Send a Message</button>
 </form>;}
