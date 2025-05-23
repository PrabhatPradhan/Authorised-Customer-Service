"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaRegComments } from "react-icons/fa";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white h-auto shadow-sm border-b border-red-100">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center     ">
          {/* Text Block */}
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Authorised
            </h1>
            <span className="text-sm font-semibold text-black">
              Customer Service
            </span>
          </div>

          {/* Spinning Star */}
          <span className="text-orange-400 text-5xl animate-spin [animation-duration:12s]">
            ✶
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-orange-600 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-orange-600 font-bold">
            HOME
          </Link>
          <Link href="/about" className="hover:text-orange-600">
            ABOUT US
          </Link>
          <Link href="/amc" className="hover:text-orange-600">
            AMC
          </Link>
          <Link href="/appointment" className="hover:text-orange-600">
            APPOINTMENT
          </Link>
          <Link href="/gallery" className="hover:text-orange-600">
            GALLERY
          </Link>
          <Link href="/contact" className="hover:text-orange-600">
            CONTACT US
          </Link>
          <Link href="/feedback" className="hover:text-orange-600">
            FEEDBACK
          </Link>
          <Link href="/blog" className="hover:text-orange-600">
            BLOG ARTICLES
          </Link>
        </nav>

        {/* Contact Section */}
        <div className="hidden md:flex items-center space-x-2">
          <FaRegComments className="text-orange-500 text-xl" />
          <div className="text-sm leading-tight">
            <p className="font-bold text-gray-800">Have any Questions?</p>
            <p className="text-blue-900 font-semibold text-sm">
              +0 123 888 555
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-semibold text-gray-700">
          <Link href="/" className="block hover:text-orange-600">
            HOME
          </Link>
          <Link href="/about" className="block hover:text-orange-600">
            ABOUT US
          </Link>
          <Link href="/amc" className="block hover:text-orange-600">
            AMC
          </Link>
          <Link href="/appointment" className="block hover:text-orange-600">
            APPOINTMENT
          </Link>
          <Link href="/gallery" className="block hover:text-orange-600">
            GALLERY
          </Link>
          <Link href="/contact" className="block hover:text-orange-600">
            CONTACT US
          </Link>
          <Link href="/feedback" className="block hover:text-orange-600">
            FEEDBACK
          </Link>
          <Link href="/blog" className="block hover:text-orange-600">
            BLOG ARTICLES
          </Link>

          {/* Contact Section for Mobile */}
          <div className="flex items-start space-x-2 pt-4 border-t border-gray-200">
            <FaRegComments className="text-orange-500 text-xl mt-1" />
            <div className="text-sm leading-tight">
              <p className="font-bold text-gray-800">Have any Questions?</p>
              <p className="text-blue-900 font-semibold text-sm">
                +0 123 888 555
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
