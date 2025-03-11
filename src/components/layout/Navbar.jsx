'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {!isMenuOpen};

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/locations', label: 'Locations' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <nav className = {`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-zinc-800 shadow-md py-2' : 'bg-zinc-700 bg-opacity-90 py-4'
        }`}>
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
                            className={`font-medium transition-colors hover:text-amber-500 ${
                                pathname === link.href ? 'text-amber-500' : 'text-amber-50'
                            }`}
                        >
                        {link.label}
                        </Link>
                    ))}
                </div>

                

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-grey-700 hover:text-amber-500 transition-colors"
                    onClick={toggleMenu}
                    aria-label="toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white bg-opacity-95 shadow-lg">
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-medium py-2 text-gray-600 transition-colors hover:text-amber-500 ${
                                        pathname === link.href ? 'text-amber-500' : 'text-gray-600'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                    
            </div>
        </nav>
    )
}