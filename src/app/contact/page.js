import React from "react";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import EnquiryForm from "../../Componets/EnquiryForm/EnquiryForm";
import { FaCheckCircle, FaSmile, FaTrophy } from "react-icons/fa";
export default function Page() {
  return (
    <>
      <Navbar />
      <EnquiryForm/>
      <div className="bg-white text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Header Section */}
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
            Contact
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / Contact
          </p>
        </div>
      </section>
        {/* Contact Section */}
        <section className="flex flex-wrap gap-10 justify-between px-[5%] py-16">
          {/* Left */}
          <div className="flex-1 min-w-[300px]">
            {/* Info Cards */}
            <div className="flex flex-wrap gap-5 mb-10">
              <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-5 flex-1 min-w-[220px]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  alt="Phone"
                  className="h-[30px]"
                />
                <div>
                  <strong className="text-sm text-[#666] block">Phone:</strong>
                  <span className="text-base font-bold text-[#111]">(+684) 555-0102</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-5 flex-1 min-w-[220px]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="Email"
                  className="h-[30px]"
                />
                <div>
                  <strong className="text-sm text-[#666] block">Email Us</strong>
                  <span className="text-base font-bold text-[#111]">info@example.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-5 flex-1 min-w-[220px]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  alt="Address"
                  className="h-[30px]"
                />
                <div>
                  <strong className="text-sm text-[#666] block">Address</strong>
                  <span className="text-base font-bold text-[#111]">2972 Westheimer 96 Rd.</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
              Need any kind of fixhero help? <span className="text-[#f3842f]">Send us a message</span>
            </h2>
            <p className="my-5 text-[#666]">
              Proactively envisioned multimedia based expertise cross-media growth strategies.
              Seamlessly visualize quality intellectual capital without superior collaboration.
            </p>

            {/* <a
              href="#"
              className="inline-block px-6 py-3 border border-gray-300 rounded-md font-medium bg-white hover:bg-gray-100 transition"
            >
              See Our Faq
            </a> */}
          </div>

          {/* Right */}
          <div className="flex-1 min-w-[300px] bg-[#fafafa] rounded-xl p-8">
            <form>
              <div className="flex flex-wrap gap-5 mb-5">
                <div className="flex-1 min-w-[100px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
                  />
                </div>
                <div className="flex-1 min-w-[100px]">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-5 mb-5">
                <div className="flex-1 min-w-[100px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
                  />
                </div>
                <div className="flex-1 min-w-[100px]">
                  <select className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none">
                    <option>Select Services</option>
                    <option>Repair</option>
                    <option>Installation</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <textarea
                  placeholder="Your message..."
                  className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none min-h-[120px] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className=" bg-[#f39b2f] hover:bg-[#d67e20] text-white px-8 py-3 rounded-md font-bold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
        width="100%"
        height="400"
        className="rounded-lg shadow-md"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />


<div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mt-20 border-t border-gray-200 pt-16 bg-white">
  <div className="transition-transform duration-500 hover:scale-105">
    <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-bounce">
      <FaCheckCircle className="text-red-500 text-4xl" />
      17k
    </div>
    <p className="text-sm text-red-600 mt-2 font-medium">Completed Project</p>
  </div>

  <div className="transition-transform duration-500 hover:scale-105">
    <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-pulse">
      <FaSmile className="text-red-500 text-4xl" />
      49+
    </div>
    <p className="text-sm text-red-600 mt-2 font-medium">Satisfied Clients</p>
  </div>

  <div className="transition-transform duration-500 hover:scale-105">
    <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-bounce">
      <FaTrophy className="text-red-500 text-4xl" />
      2k
    </div>
    <p className="text-sm text-red-600 mt-2 font-medium">Awards Winner</p>
  </div>
</div>


      

      <Footer />
    </>
  );
}
