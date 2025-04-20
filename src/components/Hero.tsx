
import { useState } from "react";
import { Calendar, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Input } from "./ui/input";

const Hero = () => {
  const [tripType, setTripType] = useState("roundTrip");
  
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-druk-darkblue to-druk-blue w-full overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1587477904663-5e163a8df16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Discover the Kingdom of Bhutan
          </h1>
          <p className="text-xl text-white/90">
            Experience the magic of the last Himalayan kingdom with Druk Air
          </p>
        </div>
        
        {/* Booking Form */}
        <div className="max-w-5xl mx-auto w-full bg-white rounded-lg shadow-xl p-6">
          <Tabs defaultValue="flights" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="flights" className="text-sm md:text-base">
                Flights
              </TabsTrigger>
              <TabsTrigger value="hotels" className="text-sm md:text-base">
                Hotels
              </TabsTrigger>
              <TabsTrigger value="packages" className="text-sm md:text-base">
                Packages
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="flights" className="space-y-6">
              <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="roundTrip"
                    checked={tripType === "roundTrip"}
                    onChange={() => setTripType("roundTrip")}
                    className="mr-2"
                  />
                  <span>Round Trip</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneWay"
                    checked={tripType === "oneWay"}
                    onChange={() => setTripType("oneWay")}
                    className="mr-2"
                  />
                  <span>One Way</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="multiCity"
                    checked={tripType === "multiCity"}
                    onChange={() => setTripType("multiCity")}
                    className="mr-2"
                  />
                  <span>Multi-City</span>
                </label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">From</label>
                  <Input placeholder="Departure City" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">To</label>
                  <Input placeholder="Arrival City" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Departure</label>
                  <div className="relative">
                    <Input type="date" className="w-full" />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                {tripType === "roundTrip" && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Return</label>
                    <div className="relative">
                      <Input type="date" className="w-full" />
                      <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                )}
                {tripType === "oneWay" && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Passengers</label>
                    <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-druk-orange hover:bg-druk-orange/90 text-white font-bold py-3 px-8">
                  <Search className="mr-2 h-4 w-4" /> Search Flights
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="hotels">
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">
                  Find your perfect stay in Bhutan and around the world
                </p>
                <Button className="mt-4 bg-druk-blue hover:bg-druk-blue/90">
                  Browse Hotels
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="packages">
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">
                  Discover our exclusive Bhutan holiday packages
                </p>
                <Button className="mt-4 bg-druk-blue hover:bg-druk-blue/90">
                  View Packages
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Hero;
