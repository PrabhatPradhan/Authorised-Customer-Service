import React from 'react'
import Footer from '../../Componets/Footer/Footer'
import Navbar from '../../Componets/Navbar/Navbar'
import Link from "next/link";
import Image from "next/image";
import EnquiryForm from "../../Componets/EnquiryForm/EnquiryForm";
export default function page() {
  return (
     <>
     <Navbar/>
     <EnquiryForm/>
     <section className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">Appointment</h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> /Appointment
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Image
              src="https://handyman.fixherotheme.com/wp-content/uploads/2023/09/man.png"
              alt="Repairman"
              className="max-h-52"
            />
          </div>
        </section>
     <div className="min-h-screen flex items-center justify-center bg-white px-6 py-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Form Section */}
        <form className="space-y-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Appointment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Full Name*"
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mobile Number</label>
              <input
                type="text"
                required
                placeholder="Mobile Number*"
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Address</label>
            <textarea
              placeholder="Address"
              className="w-full border rounded px-4 py-2"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">Choose Your Appliance</label>
            <select className="w-full border rounded px-4 py-2">
              <option>Choose Your Appliance</option>
              <option>TV</option>
              <option>Refrigerator</option>
              <option>Washing Machine</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Choose Your Plan</label>
            <select className="w-full border rounded px-4 py-2">
              <option>Choose Your Plan</option>
              <option>Basic</option>
              <option>Premium</option>
              <option>Gold</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-purple-900 text-white font-bold py-2 px-6 rounded mt-4"
          >
            SUBMIT
          </button>
        </form>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src="https://newtackserviceplatform.com/public/front/images/Appointment.jpg"
            alt="Appointment"
            className="w-full h-auto rounded shadow"
          />
        </div>
      </div>
    </div>
    <Footer/>
     </>
  )
}
