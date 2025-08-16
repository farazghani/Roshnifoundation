"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // for menu toggle

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center py-3">
          <Image
            src="/logo.png"
            alt="Roshni Foundation Logo"
            width={166}
            height={66}
            className="rounded-[10px] object-cover"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#525560] font-roboto text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Donate Box (Desktop) */}
        <div className="hidden md:flex w-[190px] h- flex-shrink-0 bg-[#213E8C] justify-center items-center">
          <p className="text-white font-roboto text-[25.833px] font-normal leading-[120%]">
            Donate
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#213E8C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#525560] font-roboto text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Donate */}
          <div className="w-full flex justify-center">
            <div className="w-[190px] h-[60px] bg-[#213E8C] flex justify-center items-center">
              <p className="text-white font-roboto text-lg font-normal leading-[120%]">
                Donate
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
