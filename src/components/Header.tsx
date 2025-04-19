
import { Link } from "react-router-dom";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-4 text-sm">
            <Link to="#" className="text-druk-darkblue hover:text-druk-blue">Cargo</Link>
            <Link to="#" className="text-druk-darkblue hover:text-druk-blue">Travel Requirements</Link>
            <Link to="#" className="text-druk-darkblue hover:text-druk-blue">Contact Us</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#" className="flex items-center text-sm text-druk-darkblue hover:text-druk-blue">
              <User size={16} className="mr-1" />
              Log In
            </Link>
            <Button variant="outline" size="sm" className="bg-druk-blue text-white border-none hover:bg-druk-darkblue">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-druk-blue">DRUK AIR</span>
            <span className="ml-2 text-sm text-druk-orange">Royal Bhutan Airlines</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <div className="group relative">
              <button className="flex items-center text-druk-darkblue hover:text-druk-blue">
                Book <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block p-2">
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">Flight Booking</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">Holiday Packages</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">Special Offers</Link>
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center text-druk-darkblue hover:text-druk-blue">
                Manage <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block p-2">
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">My Booking</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">Check-in Online</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">Flight Status</Link>
              </div>
            </div>
            <Link to="#" className="text-druk-darkblue hover:text-druk-blue">Destinations</Link>
            <Link to="#" className="text-druk-darkblue hover:text-druk-blue">Travel Info</Link>
            <Link to="#" className="text-druk-darkblue hover:text-druk-blue">Experience</Link>
            <div className="group relative">
              <button className="flex items-center text-druk-darkblue hover:text-druk-blue">
                About <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block p-2">
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">About Druk Air</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">Press Room</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-druk-lightgray rounded-md">Careers</Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-druk-darkblue" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              <div className="border-b border-gray-100 pb-2">
                <button className="flex justify-between items-center w-full text-left py-2 px-4">
                  <span>Book</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-6 space-y-2 mt-2">
                  <Link to="#" className="block py-1 text-sm">Flight Booking</Link>
                  <Link to="#" className="block py-1 text-sm">Holiday Packages</Link>
                  <Link to="#" className="block py-1 text-sm">Special Offers</Link>
                </div>
              </div>
              <div className="border-b border-gray-100 pb-2">
                <button className="flex justify-between items-center w-full text-left py-2 px-4">
                  <span>Manage</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-6 space-y-2 mt-2">
                  <Link to="#" className="block py-1 text-sm">My Booking</Link>
                  <Link to="#" className="block py-1 text-sm">Check-in Online</Link>
                  <Link to="#" className="block py-1 text-sm">Flight Status</Link>
                </div>
              </div>
              <Link to="#" className="block py-2 px-4 border-b border-gray-100">Destinations</Link>
              <Link to="#" className="block py-2 px-4 border-b border-gray-100">Travel Info</Link>
              <Link to="#" className="block py-2 px-4 border-b border-gray-100">Experience</Link>
              <div className="border-b border-gray-100 pb-2">
                <button className="flex justify-between items-center w-full text-left py-2 px-4">
                  <span>About</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-6 space-y-2 mt-2">
                  <Link to="#" className="block py-1 text-sm">About Druk Air</Link>
                  <Link to="#" className="block py-1 text-sm">Press Room</Link>
                  <Link to="#" className="block py-1 text-sm">Careers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
