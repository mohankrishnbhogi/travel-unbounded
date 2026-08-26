import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Contact / Enquire | Travel Unbounded",
  description: "Plan your perfect journey with Travel Unbounded. Fill the enquiry form and our travel expert will contact you within 24 hours.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-blue-700 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-blue-100 text-lg">Let&apos;s plan your perfect journey together</p>
      </section>
      <div className="max-w-2xl mx-auto px-4 py-16 w-full">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}