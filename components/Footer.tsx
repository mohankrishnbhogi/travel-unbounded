export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            Travel <span className="text-orange-400">Unbounded</span>
          </h3>
          <p className="text-gray-400 mb-6">
            India's Most Trusted Experiential Travel Experts
          </p>

          <div className="flex justify-center gap-6 text-sm text-gray-400 mb-8">
            <span>Bengaluru</span>
            <span>•</span>
            <span>Kochi</span>
            <span>•</span>
            <span>Nairobi</span>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}