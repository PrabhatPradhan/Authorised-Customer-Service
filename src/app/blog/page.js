"use client";
import React, { useState } from "react";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar";
import EnquiryForm from "../../Componets/EnquiryForm/EnquiryForm";
import ServiceCenterCard from "../../Componets/ServiceCenterCard/ServiceCenterCard";
import Link from "next/link";
import { FaClock, FaCalendarCheck, FaUsers } from "react-icons/fa";

const blogData = [
  {
    title: "Fridge Single Door Repair Blog",
    date: "03.09.2024",
    description:
      "Is your refrigerator not cooling correctly? This common issue can often leave homeowners frustrated and unsure of how to proceed.",
    fullDetails:
      "Is your refrigerator not cooling correctly? This common issue can often leave homeowners frustrated. You may want to check the thermostat, coils, and gas levels. A certified technician can help diagnose the problem quickly and effectively.",
    image:
      "https://img.freepik.com/premium-photo/technician-repairing-fridge-kitchen-room-house-call-service_293060-110.jpg",
  },
  {
    title: "Fridge Double Door Repair Blog",
    date: "03.09.2024",
    description:
      "Is your double-door refrigerator giving you trouble? Whether it’s not cooling correctly or has issues with the thermostat...",
    fullDetails:
      "Double door refrigerators often face cooling issues when coils are dirty or fans malfunction. Regular maintenance can prevent costly repairs. Make sure the vents are not blocked, and clean the coils every six months.",
    image:
      "http://newtackserviceplatform.com/public/front/images/Appointment.jpg",
  },
  {
    title: "Fridge Side By Side Repair Blog",
    date: "03.09.2024",
    description:
      "Side-by-side refrigerators are popular for many households, thanks to their convenient design and ample...",
    fullDetails:
      "These fridges offer convenience, but can have airflow or defrosting problems. If you hear noises or notice frost buildup, schedule a service call. Keeping doors sealed tightly reduces energy loss.",
    image:
      "https://img.freepik.com/free-photo/kitchen-interior-with-refrigerator_23-2150690144.jpg",
  },
  {
    title: "Fridge Deep Freezer Repair Blog",
    date: "03.09.2024",
    description:
      "Deep freezers are an essential appliance for many households and businesses, allowing food and other...",
    fullDetails:
      "If your deep freezer isn’t freezing, check the thermostat and defrost timer. Commercial units may need compressor maintenance. Avoid overloading to ensure airflow and efficiency.",
    image:
      "https://img.freepik.com/premium-psd/refrigerator-poster-template-design_23-2149240721.jpg",
  },
];

export default function page() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
   <>
   <Navbar/>
   <ServiceCenterCard/>
   <EnquiryForm/>
   <section className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">Blog</h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> /  Blog
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src="https://handyman.fixherotheme.com/wp-content/uploads/2023/09/man.png"
              alt="Repairman"
              className="max-h-52"
            />
          </div>
        </section>
    <div className="py-12 px-4 md:px-12">
      <h2 className="text-center text-3xl font-bold mb-8">
        REFRIGERATOR <span className="text-blue-600">BLOGS</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300 bg-white"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-white bg-orange-500 px-2 py-1 rounded">
                {blog.date}
              </span>
              <h3 className="font-semibold mt-2 text-lg">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {expandedCardIndex === index
                  ? blog.fullDetails
                  : blog.description}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 inline-block bg-yellow-500 text-white text-sm px-4 py-2 rounded hover:bg-yellow-600"
              >
                {expandedCardIndex === index ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="py-20 px-6 md:px-28 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {/* Box 1 */}
        <div className="border border-orange-500 p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <div className="mb-6 flex justify-center">
            <FaClock className="text-6xl text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-black mb-1">Get Service</h3>
          <p className="text-lg font-semibold text-black">Within 45 mins</p>
        </div>

        {/* Box 2 */}
        <div className="border border-orange-500 p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <div className="mb-6 flex justify-center">
            <FaCalendarCheck className="text-6xl text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-black mb-1">24 Hours Appointment</h3>
          <p className="text-lg font-semibold text-black">Booking</p>
        </div>

        {/* Box 3 */}
        <div className="border border-orange-500 p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <div className="mb-6 flex justify-center">
            <FaUsers className="text-6xl text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-black mb-1">Serve 10,000+</h3>
          <p className="text-lg font-semibold text-black">Customers</p>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}
