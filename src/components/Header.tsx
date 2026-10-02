import { useState } from 'react';
import { Link } from 'react-router';
import './Tailwind.css';
import NLink from './NLink';
import menuIcon from '../assets/menu.svg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-sky-50 shadow-sm">
            <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                {/* Brand Logo / Title */}
                <Link to="/" className="font-bold text-xl text-purple-900">
                    Miss Sumer's Preschool
                </Link>

                {/* Hamburger Button (Shown only on small screens) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-sky-100 transition-colors focus:outline-none"
                    aria-label="Toggle navigation menu"
                >
                    <img src={menuIcon} alt="Menu" className="w-8 h-8" />
                </button>

                {/* Desktop Navigation Links (Hidden on small screens, flex on md and up) */}
                <ul className="hidden md:flex items-center gap-6">
                    <li>
                        <NLink to="/" text="Home" color="indigo" />
                    </li>
                    <li>
                        <NLink to="/about" text="About Me" color="red" />
                    </li>
                    <li>
                        <NLink to="/contact" text="Contact Me" color="yellow" />
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation Dropdown (Shown only when isOpen is true on small screens) */}
            {isOpen && (
                <div className="md:hidden bg-sky-100 border-t border-sky-200 px-4 py-6 shadow-inner">
                    <ul className="flex flex-col gap-4 items-center divide-y divide-solid divide-sky-200">
                        <li onClick={() => setIsOpen(false)} className="w-full">
                            <Link to="/" className="block w-full text-center py-2 text-indigo-600">
                                Home
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)} className="w-full">
                            <Link to="/about" className="block w-full text-center py-2 text-indigo-600">
                                About Me
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)} className="w-full">
                            <Link to="/contact" className="block w-full text-center py-2 text-indigo-600">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}