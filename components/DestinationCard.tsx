import Link from "next/link";

interface Destination {
  id: string;
  name: string;
  country: string;
  category: string;
  image: string;
  description: string;
  price: number;
}

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full">
          {destination.country}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-lg font-bold text-blue-700">
              ₹{destination.price.toLocaleString()}
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}