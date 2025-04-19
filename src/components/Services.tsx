
import { Card, CardContent } from "./ui/card";
import { Calendar, Globe, Ticket, User } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Flight Status",
    description: "Check the status of your Druk Air flight in real-time.",
    icon: Calendar,
    link: "#"
  },
  {
    id: 2,
    title: "Online Check-in",
    description: "Save time at the airport with our convenient online check-in.",
    icon: User,
    link: "#"
  },
  {
    id: 3,
    title: "Destinations",
    description: "Explore our network of destinations across Asia.",
    icon: Globe,
    link: "#"
  },
  {
    id: 4,
    title: "Special Offers",
    description: "Discover our latest promotions and special fares.",
    icon: Ticket,
    link: "#"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience royal Bhutanese hospitality with our comprehensive range of services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <Card key={service.id} className="border border-gray-200 hover:border-druk-blue/30 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-druk-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-druk-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={service.link} 
                  className="text-druk-blue hover:text-druk-darkblue font-medium inline-flex items-center"
                >
                  Learn more 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
