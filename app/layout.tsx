import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope"});
const title="Global Business Summits | Where Industries Meet Their Next Big Move";
const description="Summits, Conferences & Trainings that turn rooms full of strangers into rooms full of deals.";
export const metadata:Metadata={metadataBase:new URL("https://example.com"),title,description,alternates:{canonical:"/"},
 openGraph:{title,description,type:"website"},twitter:{card:"summary_large_image",title,description}};
export default function Root({children}:{children:React.ReactNode}){
 return <html lang="en" className={manrope.variable}><body className="font-sans antialiased"><Navbar/><main>{children}</main><Footer/></body></html>;}
