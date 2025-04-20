
import { Button } from "./ui/button";

const Experience = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-druk-blue to-druk-darkblue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Experience Bhutanese Hospitality</h2>
            <p className="mb-4 text-white/90">
              At Druk Air, we take pride in providing our passengers with authentic Bhutanese hospitality from the moment they step onboard. Our cabin crew, adorned in traditional Bhutanese attire, offer a warm welcome that reflects our rich cultural heritage.
            </p>
            <p className="mb-6 text-white/90">
              Enjoy our specially curated inflight meals featuring Bhutanese cuisine, paired with spectacular aerial views of the Himalayas that make your journey as memorable as the destination itself.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-druk-blue hover:bg-white/90">
                Our Fleet
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Inflight Services
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 md:h-48 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Airplane Window View" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Airline Cabin" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Himalayan Mountains" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 md:h-48 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1529551739587-e242c564f727?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Bhutanese Food" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
