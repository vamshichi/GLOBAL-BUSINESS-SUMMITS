import { upcomingEvents, pastEvents, type Event } from "@/data/events";
const List=({id,title,items}:{id:string;title:string;items:Event[]})=><section id={id} className="border-t border-navy/20 py-16">
 <h2 className="text-4xl font-extrabold tracking-tight">{title}</h2>
 {items.length?<ul className="mt-8 grid gap-6 md:grid-cols-2">{items.map(e=><li key={e.id} className="border border-navy/20 p-6"><h3 className="text-xl font-bold">{e.title}</h3><p className="text-sm text-navy/70">{[e.date,e.location].filter(Boolean).join(", ")}</p></li>)}</ul>
 :<p className="mt-6 max-w-md text-navy/70">Details for this section will be announced soon. Get in touch to be first to hear.</p>}</section>;
export const metadata={title:"Events | Global Business Summits"};
export default function Events(){return <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-40 lg:px-12"><h1 className="mb-16 text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-tighter">Events</h1>
 <List id="upcoming" title="Upcoming Events" items={upcomingEvents}/><List id="past" title="Past Events / Highlights" items={pastEvents}/></div>;}
