import { FaPlus } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
const CardItem = ({ image, label, title, description }) => (
  <div className="cursor-pointer bg-white border border-gray-200 rounded-md p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12">
        <Image src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div>
        <p className="text-xs text-orange-500 font-semibold uppercase">
          {label}
        </p>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
    <hr className="my-6 border-gray-200" />
    <p className="text-gray-600 text-sm mb-6">{description}</p>
    <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
      Readmore <FaPlus className="text-xs" />
    </button>
    <span className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500"></span>
  </div>
);

export default function Card() {
  const cardData = [
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1724707495FRIDGEICONwebp.webp",
      label: "Feature One",
      title: "Mobile Repair",
      description: "Quick and reliable repair for your mobile devices.",
    },
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1724707508WASHINGMACHINEICONwebp.webp",
      label: "Feature Two",
      title: "Tablet Support",
      description: "Professional tablet repair services at your doorstep.",
    },
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1724707520ACACwebp.webp",
      label: "Feature Three",
      title: "Laptop Solutions",
      description: "Expert laptop diagnostics and service.",
    },
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1724707534MICROWAVEOVENICONwebp.webp",
      label: "Feature Four",
      title: "Battery Replacement",
      description: "Fast battery replacements for all major devices.",
    },
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1724707553TVICONwebp.webp",
      label: "Feature One",
      title: "Mobile Repair",
      description: "Quick and reliable repair for your mobile devices.",
    },
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1724707566GEYSERICONwebp.webp",
      label: "Feature Two",
      title: "Tablet Support",
      description: "Professional tablet repair services at your doorstep.",
    },
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1724707581ROWATERPURIFIERICONwebp.webp",
      label: "Feature Three",
      title: "Laptop Solutions",
      description: "Expert laptop diagnostics and service.",
    },
    {
      image:
        "https://newtackserviceplatform.com/uploads/category/1717943960KICHANCHIMNYICONwebp.webp",
      label: "Feature Four",
      title: "Battery Replacement",
      description: "Fast battery replacements for all major devices.",
    },
  ];

  return (
    <>
      {/* Cards Section */}
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cardData.map((card, i) => (
            <CardItem
              key={i}
              image={card.image}
              label={card.label}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}

      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-[#0e0034] rounded-2xl px-8 py-12 w-full max-w-6xl text-center text-white relative overflow-hidden shadow-lg">
          {/* Decorative background */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute left-6 top-1/3 w-40 h-40 bg-gradient-radial from-purple-400/40 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute right-6 top-10 w-24 h-24 bg-gradient-radial from-yellow-300/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute left-6 bottom-6 text-purple-200 text-6xl animate-spin [animation-duration:12s]">
              ✦
            </div>
            <div className="absolute right-6 top-6 text-yellow-300 text-5xl animate-spin [animation-duration:12s]">
              ✶
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
            We Repair, You Relax. Click Below <br /> and Let’s Fix Your Devices!
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Phone Contact with Hover Animation */}
            <a href="tel:+1234567898" className="block">
            <div className="relative overflow-hidden font-bold py-3 px-6 rounded-full shadow-md group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
              <div className="relative z-10 flex items-center gap-3 text-white">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <FiPhoneCall className="text-black text-lg" />
                </div>
                <span className="text-white text-lg font-bold">
                  +123 456-7898
                </span>
              </div>
            </div>
            </a>

            <span className="text-white/70 font-semibold">OR</span>

            {/* Schedule Button with same animation */}
            <button className="relative overflow-hidden text-white font-bold py-3 px-6 rounded-full shadow-md group hover:scale-105 transition-transform duration-300">
              <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
              <span className="relative z-10">GET A SCHEDULE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
