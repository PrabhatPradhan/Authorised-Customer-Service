import React from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import EnquiryForm from "../../Componets/EnquiryForm/EnquiryForm";
export default function page() {
  return (
    <>
      <Navbar />
      <EnquiryForm/>
      <div className="bg-white text-gray-800">
      {/* Top Image Banner */}
      <section className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">AMC</h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> /  AMC
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

      {/* AMC Services Section */}
      <section className="py-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 uppercase">
          All Appliances Annual Maintenance Contract Details
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {/* AMC Cards */}
          <div className="  p-6 text-center shadow     transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/color/96/000000/fridge.png"
              alt="Refrigerator"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Refrigerator AMC</h3>
          </div>

          <div className="  p-6 text-center shadow  transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/color/96/000000/geyser.png"
              alt="Geyser"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Geyser AMC</h3>
          </div>

          <div className="  p-6 text-center shadow     transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/fluency/96/tv.png"
              alt="Television"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Television AMC</h3>
          </div>

          <div className="  p-6 text-center shadow    transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/color/96/air-conditioner.png"
              alt="AC"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Air Conditioner AMC</h3>
          </div>

          <div className="  p-6 text-center shadow     transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/color/96/microwave.png"
              alt="Microwave"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Microwave Oven AMC</h3>
          </div>

          <div className="  p-6 text-center shadow     transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/color/96/washing-machine.png"
              alt="Washing Machine"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Washing Machine AMC</h3>
          </div>

          <div className="  p-6 text-center shadow     transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/ios-filled/100/kitchen-room.png"
              alt="Chimney"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Kitchen Chimney AMC</h3>
          </div>

          <div className="  p-6 text-center shadow    transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <Image
              src="https://img.icons8.com/color/96/water-purifier.png"
              alt="Water Purifier"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">RO Water Purifier AMC</h3>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}
