export const metadata = {
  title: "Travel Unbounded | India's Most Trusted Experiential Travel Experts",
  description: "Plan your perfect trip with Travel Unbounded. Explore India and International destinations with custom itineraries.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import Link from "next/link";

export default function Home() {
  const india = destinations.filter((d) => d.category === "india");
  const international = destinations.filter((d) => d.category === "international");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
          alt="Travel Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
            Experiential Travel
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            India's Most Trusted <br />
            <span className="text-blue-400">Experiential Travel Experts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            We design journeys that blend comfort, culture, and raw nature — crafted around you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-lg font-semibold transition shadow-lg"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/about"
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-3.5 rounded-full text-lg font-semibold transition border border-white/30"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========== INDIA DESTINATIONS ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">India Destinations</h2>
          <p className="text-gray-500 mt-3">Discover the incredible diversity of India</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {india.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* ========== INTERNATIONAL DESTINATIONS ========== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">International Destinations</h2>
            <p className="text-gray-500 mt-3">Explore the world with us</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {international.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for your next adventure?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Tell us your dream destination and we’ll craft the perfect journey for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3.5 rounded-full font-semibold text-lg transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}