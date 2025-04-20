
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import BookingDialog from "./BookingDialog";

const destinationsData = [
  {
    id: 1,
    city: "Paro",
    country: "Bhutan",
    image: "https://images.unsplash.com/photo-1553686840-1cfd1782ae09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Tiger's Nest Monastery
    price: "From Nu 7,500",
    description: "Home to the iconic Tiger's Nest Monastery"
  },
  {
    id: 2,
    city: "Thimphu",
    country: "Bhutan",
    image: "https://images.unsplash.com/photo-1557516026-cf1ff9cbb4ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Buddha Dordenma statue
    price: "From Nu 6,250",
    description: "Bhutan's capital city with rich cultural heritage"
  },
  {
    id: 3,
    city: "Punakha",
    country: "Bhutan",
    image: "https://images.unsplash.com/photo-1609835649099-db064f682ce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Punakha Dzong
    price: "From Nu 8,750",
    description: "Home to the magnificent Punakha Dzong"
  },
  {
    id: 4,
    city: "Bumthang",
    country: "Bhutan",
    image: "https://images.unsplash.com/photo-1580559926893-bcd61ac7d98f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Bhutanese landscape
    price: "From Nu 9,250",
    description: "Sacred valley of spiritual significance"
  }
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<(typeof destinationsData)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookNow = (destination: typeof destinationsData[0]) => {
    setSelectedDestination(destination);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 bg-druk-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the magic of Bhutan and our connecting destinations across Asia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.map((destination) => (
            <Card key={destination.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">{destination.city}</h3>
                  <p className="text-white/80 text-sm">{destination.country}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-lg font-bold text-druk-blue">{destination.price}</p>
                <p className="text-gray-600 mt-2 mb-4">{destination.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-druk-blue text-druk-blue hover:bg-druk-blue hover:text-white"
                  onClick={() => handleBookNow(destination)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-druk-blue hover:bg-druk-darkblue text-white px-6">
            View All Destinations
          </Button>
        </div>
      </div>

      {selectedDestination && (
        <BookingDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          destination={selectedDestination}
        />
      )}
    </section>
  );
};

export default Destinations;
