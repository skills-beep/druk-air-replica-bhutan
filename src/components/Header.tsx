
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const navigationItems = {
  book: {
    label: "Book",
    items: [
      { label: "Flight Booking", href: "/flight-booking" },
      { label: "Holiday Packages", href: "/holiday-packages" },
      { label: "Special Offers", href: "/special-offers" },
    ],
  },
  manage: {
    label: "Manage",
    items: [
      { label: "My Booking", href: "/my-booking" },
      { label: "Check-in Online", href: "/check-in" },
      { label: "Flight Status", href: "/flight-status" },
    ],
  },
  about: {
    label: "About",
    items: [
      { label: "About Druk Air", href: "/about" },
      { label: "Press Room", href: "/press" },
      { label: "Careers", href: "/careers" },
    ],
  },
};

const quickLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Travel Info", href: "/travel-info" },
  { label: "Experience", href: "/experience" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/cargo" className="text-druk-darkblue hover:text-druk-blue">Cargo</Link>
            <Link to="/requirements" className="text-druk-darkblue hover:text-druk-blue">Travel Requirements</Link>
            <Link to="/contact" className="text-druk-darkblue hover:text-druk-blue">Contact Us</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm text-druk-darkblue hover:text-druk-blue">Log In</Link>
            <Link to="/signup">
              <Button variant="outline" size="sm" className="bg-druk-blue text-white border-none hover:bg-druk-darkblue">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-druk-blue">DRUK AIR</span>
            <span className="ml-2 text-sm text-druk-orange">Royal Bhutan Airlines</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(navigationItems).map(([key, section]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                
                {quickLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={link.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-druk-darkblue" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {Object.entries(navigationItems).map(([key, section]) => (
                <div key={key} className="border-b border-gray-100 pb-2">
                  <div className="font-medium py-2">{section.label}</div>
                  <div className="pl-4 space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-1 text-sm text-druk-darkblue hover:text-druk-blue"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 text-druk-darkblue hover:text-druk-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
