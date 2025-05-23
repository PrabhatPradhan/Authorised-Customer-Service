"use client";
 
import Navbar from "../Componets/Navbar/Navbar";
import HeroSec from "../Componets/HeroSec/HeroSec";
import Card from "../Componets/Cards/Card";
import Footer from "../Componets/Footer/Footer";
import WhyWeAreBest from "../Componets/WhyWeAreBest/WhyWeAreBest";
import ServiceCenterCard from "@/Componets/ServiceCenterCard/ServiceCenterCard";
import EnquiryForm from "@/Componets/EnquiryForm/EnquiryForm";
import Demo from "@/Componets/Demo/Demo";

export default function page() {
 
  return (
    <>
     
      <Navbar />
      <HeroSec />
      <EnquiryForm/>
      <ServiceCenterCard />
     
      <Card />
      <WhyWeAreBest />
      <Footer />
    </>
  );
}
