
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const newsAndOffers = [
  {
    id: 1,
    title: "Special Fares to Delhi",
    date: "April 15, 2025",
    description: "Enjoy special promotional fares on our Paro-Delhi route, starting from just Nu 7,500.",
    image: "https://images.unsplash.com/photo-1602642977157-14c126b3e33e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" // Bhutan landscape
  },
  {
    id: 2,
    title: "New Flight to Singapore",
    date: "April 10, 2025",
    description: "We're excited to announce our new route connecting Paro with Singapore starting June 2025.",
    image: "https://images.unsplash.com/photo-1569288063643-5d29ad6874f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" // Singapore skyline
  },
  {
    id: 3,
    title: "Druk Air Awarded 4-Star Rating",
    date: "April 5, 2025",
    description: "Druk Air has been awarded a prestigious 4-star rating for service excellence.",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" // Award ceremony
  }
];

const NewsOffers = () => {
  return (
    <section className="py-16 bg-druk-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest News & Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, promotions and special offers from Druk Air
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsAndOffers.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-druk-darkblue">{item.title}</h3>
                  <span className="text-xs bg-druk-blue/10 text-druk-blue px-2 py-1 rounded">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="link" className="p-0 h-auto text-druk-blue hover:text-druk-darkblue font-medium">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-druk-blue hover:bg-druk-darkblue text-white px-6">
            View All News & Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsOffers;
