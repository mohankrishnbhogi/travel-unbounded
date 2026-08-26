export const metadata = {
  title: "About Us | Travel Unbounded",
  description: "Learn about Travel Unbounded - India's most trusted experiential travel experts with offices in Bengaluru, Kochi and Nairobi.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
          alt="About Travel Unbounded"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200">
            India's Most Trusted Experiential Travel Experts
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          </div>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Travel Unbounded was born from a simple belief — that the best journeys aren't sold from a catalogue. They're built around the people taking them.
            </p>
            <p>
              Headquartered in Bangalore with offices in Kerala and Nairobi, we design trips that blend comfort, culture, and raw nature. Every destination, resort, and activity we recommend has been personally experienced by our team.
            </p>
            <p>
              From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset — we go where real stories are written, and we bring you along.
            </p>
          </div>
        </div>

        {/* Our Offices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Offices
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bengaluru */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-7 border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bengaluru</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">Headquarters</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                541, 7th Main Rd, HAL 2nd Stage<br />
                Indiranagar, Bengaluru – 560008<br />
                India
              </p>
            </div>

            {/* Kochi */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-7 border-t-4 border-orange-500">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                <span className="text-3xl">🌴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kochi</h3>
              <p className="text-sm text-orange-600 font-medium mb-3">Kerala Office</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                LR Towers, S Janatha Road<br />
                Palavivatton, Kochi – 682025<br />
                India
              </p>
            </div>

            {/* Nairobi */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-7 border-t-4 border-green-600">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-5">
                <span className="text-3xl">🦁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nairobi</h3>
              <p className="text-sm text-green-600 font-medium mb-3">Kenya Office</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Westpark Towers, Muthithi Road<br />
                Nairobi, P.O. Box 6950<br />
                Postal Code 00100, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            We don’t just sell trips. We craft experiences that stay with you forever.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition flex gap-5">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Personally Vetted Experiences</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every place we recommend has been experienced by our team first. No surprises — only quality.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition flex gap-5">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🧭</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Local Expert Guides</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Travel with people who know the land, culture, and hidden gems that most tourists never see.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition flex gap-5">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🗺️</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Custom Itineraries</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No fixed packages. We build every trip completely around your preferences and pace.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition flex gap-5">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">24×7 Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Help is always just a call or message away, wherever you are in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}