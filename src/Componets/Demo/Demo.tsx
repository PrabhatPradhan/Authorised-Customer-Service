'use client';
import { useState } from 'react';
import Image from 'next/image';

// Import icons from react-icons (pick similar to your image)
import { FaPaintRoller, FaTools, FaPlug, FaHammer, FaWrench, FaHome, FaToilet, FaHardHat } from 'react-icons/fa';

const icons = [
  { Icon: FaPaintRoller, label: 'Painting', angle: -90 },
  { Icon: FaHome, label: 'Roofing', angle: -45 },
  { Icon: FaHardHat, label: 'Drilling', angle: 0 },
  { Icon: FaPlug, label: 'Electricity', angle: 45 },
  { Icon: FaHammer, label: 'Carpentry', angle: 90 },
  { Icon: FaToilet, label: 'Plumbing', angle: 135 },
  { Icon: FaTools, label: 'Home Service', angle: 180 },
  { Icon: FaWrench, label: 'Piping', angle: 225 },
];

export default function Demo() {
  const radius = 180;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-blue-50 overflow-hidden">
      {/* Center Image */}
      < img
        src="https://handyman.fixherotheme.com/wp-content/uploads/2023/09/man.png"
        alt="Repairman"
        width={220}
        height={220}
        className="z-10"
      />

      {/* Circular icons */}
      {icons.map((item, i) => {
        const angleRad = (item.angle * Math.PI) / 180;
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);

        return (
          <div
            key={i}
            className="absolute group"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              top: '50%',
              left: '50%',
            }}
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition text-blue-600 text-xl">
              <item.Icon />
            </div>
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
