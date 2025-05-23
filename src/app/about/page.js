"use client";
import React from "react";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar";
import EnquiryForm from "../../Componets/EnquiryForm/EnquiryForm";
import "../about/about.css";
import Link from "next/link";
import { FaCheckCircle, FaSmile, FaTrophy } from "react-icons/fa";
import ServiceCenterCard from "../../Componets/ServiceCenterCard/ServiceCenterCard";
export default function Page() {
  return (
    <>
      <Navbar />
      <ServiceCenterCard />
      <EnquiryForm />

      <section
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with actual image path or URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">
            {" "}
            About
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / About
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:py-16 lg:py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h3 className="text-red-600 font-semibold text-xl">
              OUR INTRODUCTION
            </h3>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Welcome To Cooling & Heating Service Center
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side Text */}
            <div>
              <p className="text-gray-600 mb-4">
                Long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using it is that it has a more-or-less normal distribution.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-6 mt-6 animate-fadeInUp">
                {/* Stat 1 */}
                <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/9540/9540741.png?semt=ais_hybrid"
                    alt="Worker Icon"
                    className="w-10 h-10 transition-transform duration-300 hover:rotate-6"
                  />
                  <div>
                    <p className="text-2xl font-bold text-green-800">250+</p>
                    <p className="text-gray-700 text-sm">Services we provide</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <img
                    src="https://c8.alamy.com/comp/2R1ND7R/experience-icon-monochrome-simple-sign-from-critical-thinking-collection-experience-icon-for-logo-templates-web-design-and-infographics-2R1ND7R.jpg"
                    alt="Experience Icon"
                    className="w-10 h-10 transition-transform duration-300 hover:rotate-6"
                  />
                  <div>
                    <p className="text-2xl font-bold text-green-800">
                      15+ years
                    </p>
                    <p className="text-gray-700 text-sm">of Experience</p>
                  </div>
                </div>

                {/* Inline style for animation */}
                <style jsx>{`
                  .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                  }
                  @keyframes fadeInUp {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
              </div>

              <p className="text-gray-600 mt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="relative animate-fadeInUp">
              <div className="relative z-10">
                <img
                  src="https://html.kodesolution.com/2023/airko-html/images/resource/about-1-1.jpg"
                  alt="AC Repair"
                  className="rounded-md shadow-lg"
                />
              </div>
              <div className="absolute top-4 left-4 w-full h-full border-[20px] border-blue-700 z-0 rounded-md"></div>

              {/* Play Button */}
              <button className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-orange-500 text-white w-10 h-10 rounded-full shadow-lg z-20 animate-pulse"></button>

              <style jsx>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .animate-fadeInUp {
                  animation: fadeInUp 0.8s ease-out forwards;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/electrician-working-electric-car_53876-124171.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Need An Air Conditioner <br /> Technician
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Kula kacuse every reson credit to develop level works.
            </p>

            {/* Red Line Decoration */}
            <div className="mt-6 w-48 h-1 bg-red-600 relative">
              <div className="w-4 h-4 bg-white rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
            </div>

            {/* Phone Row */}
            <div className="mt-6 flex items-center gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <p className="text-sm">Call anytime</p>
                <p className="text-xl font-semibold">+000-987458741</p>
              </div>
            </div>
          </div>

          {/* Right Play Button */}
          <div className="relative mt-12 lg:mt-0">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center relative z-10">
              <div className="text-red-600 text-3xl">▶</div>
            </div>
            {/* Pulsing Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-32 h-32 border-2 border-white rounded-full animate-ping opacity-20"></span>
              <span className="absolute w-40 h-40 border-2 border-white rounded-full animate-ping delay-200 opacity-10"></span>
            </div>
            <p className="mt-4 text-center text-sm tracking-widest uppercase text-white opacity-70">
              Watch How We Work
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm sm:text-base">
              WORKING PROCESS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
              Solve Your Issues In 4 Easy Steps
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12   ">
            {/* Left side Steps */}
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="border p-4 shadow-sm flex-1 min-w-0   hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
                  <h4 className="text-base sm:text-lg font-semibold">
                    Make an Appointment
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores harum velit doloremque molestias.
                  </p>
                </div>
                <span className="text-red-600 text-5xl sm:text-6xl font-bold">
                  1<sup>st</sup>
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-red-600 text-5xl sm:text-6xl font-bold order-1 sm:order-none">
                  2<sup>nd</sup>
                </span>
                <div className="border p-4 shadow-sm flex-1 min-w-0   hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
                  <h4 className="text-base sm:text-lg font-semibold">
                    Select your services
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores harum velit doloremque molestias.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="border p-4 shadow-sm flex-1 min-w-0   hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
                  <h4 className="text-base sm:text-lg font-semibold">
                    Confirm for services
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores harum velit doloremque molestias.
                  </p>
                </div>
                <span className="text-red-600 text-5xl sm:text-6xl font-bold">
                  3<sup>rd</sup>
                </span>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="relative">
              <img
                src="https://unicktheme.com/lsicool/assets/images/resources/work-v2-img1.png"
                alt="Technician"
                className="w-[35rem] mx-auto   "
              />
            </div>
          </div>

          {/* Fun Facts Counter */}
          <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mt-10 border-t border-gray-200 pt-16 bg-white">
            <div className="transition-transform duration-500 hover:scale-105">
              <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-bounce">
                <FaCheckCircle className="text-red-500 text-4xl" />
                17k
              </div>
              <p className="text-sm text-red-600 mt-2 font-medium">
                Completed Project
              </p>
            </div>

            <div className="transition-transform duration-500 hover:scale-105">
              <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-pulse">
                <FaSmile className="text-red-500 text-4xl" />
                49+
              </div>
              <p className="text-sm text-red-600 mt-2 font-medium">
                Satisfied Clients
              </p>
            </div>

            <div className="transition-transform duration-500 hover:scale-105">
              <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-bounce">
                <FaTrophy className="text-red-500 text-4xl" />
                2k
              </div>
              <p className="text-sm text-red-600 mt-2 font-medium">
                Awards Winner
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white text-center">
        <div className="mb-4 text-orange-600 font-semibold tracking-wide uppercase">
          ✦ Partners ✦
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Proudly Backed By Years of <br className="hidden md:block" />
          Trusted Service
        </h2>

        {/* Logos Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            height: " ",
            width: "100%",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px 0",
              maxWidth: "1000px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "64px",
                animation: "scrollRight 10s linear infinite",
              }}
            >
              {[
                "https://upload.wikimedia.org/wikipedia/commons/d/d4/WeWork_logo.png",
                "https://marpol.co.uk/wp-content/uploads/Bellway-logo-clients-black-white.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/d/d4/WeWork_logo.png",
                "https://marpol.co.uk/wp-content/uploads/Bellway-logo-clients-black-white.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/d/d4/WeWork_logo.png",
                "https://marpol.co.uk/wp-content/uploads/Bellway-logo-clients-black-white.jpg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Logo-${index}`}
                  style={{
                    height: "40px",
                    maxWidth: "120px",
                    opacity: 0.6,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Keyframes for animation */}
        <style>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      </section>

      <Footer />
    </>
  );
}
