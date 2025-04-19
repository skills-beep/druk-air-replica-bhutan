
import Header from "../components/Header";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import Experience from "../components/Experience";
import FlightInfo from "../components/FlightInfo";
import NewsOffers from "../components/NewsOffers";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Destinations />
        <Services />
        <Experience />
        <FlightInfo />
        <NewsOffers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
