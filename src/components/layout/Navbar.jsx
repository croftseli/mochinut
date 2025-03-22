"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import Material UI icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Fixed the toggle function
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/locations", label: "Locations" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 pl-4 pr-4 ${
        isScrolled
          ? "bg-zinc-800 shadow-md py-2"
          : "bg-zinc-700 bg-opacity-90 py-4"
      }`}
    >
      <div className="container mx-auto flex px-4 justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="MochiNut Logo"
            width={70}
            height={70}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-yellow-400 ${
                pathname === link.href ? "text-yellow-400" : "text-yellow-40"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Social Media Icons */}
          <a
            href="https://instagram.com/mochinutspringhilltn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-40 hover:text-yellow-400 transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://linkedin.com/company/mochinut-spring-hill/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-40 hover:text-yellow-400 transition-colors"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-40 hover:text-yellow-400 transition-colors"
          onClick={toggleMenu}
          aria-label="toggle menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium py-2 text-gray-600 transition-colors hover:text-yellow-400 ${
                    pathname === link.href ? "text-yellow-400" : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Social Media Icons for Mobile */}
              <div className="flex items-center space-x-4 py-2">
                <a
                  href="https://instagram.com/mochinut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-400 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://linkedin.com/company/mochinut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-400 transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
