"use client";

import { useState, FormEvent } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    travelDate: "",
    numberOfPeople: 1,
    hotelCategory: "Standard",
    children: 0,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "numberOfPeople" || name === "children"
          ? Number(value)
          : value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim() || formData.phone.length < 7)
      newErrors.phone = "Valid phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.travelDate) {
      newErrors.travelDate = "Travel date is required";
    } else {
      const selected = new Date(formData.travelDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today)
        newErrors.travelDate = "Date must be in the future";
    }
    if (formData.numberOfPeople < 1)
      newErrors.numberOfPeople = "At least 1 person required";
    if (formData.children < 0)
      newErrors.children = "Cannot be negative";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);

    if (!validate()) return;

    setLoading(true);
    try {
      const payload = {
        fullName: formData.fullName,
        phone: `${formData.countryCode}${formData.phone}`,
        email: formData.email,
        travelDate: formData.travelDate,
        numberOfPeople: formData.numberOfPeople,
        hotelCategory: formData.hotelCategory,
        numberOfChildren: formData.children,
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        countryCode: "+91",
        phone: "",
        email: "",
        travelDate: "",
        numberOfPeople: 1,
        hotelCategory: "Standard",
        children: 0,
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Success UI
  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700 mb-6">
          Our travel expert will contact you within 24 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5"
    >
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-800">Booking Enquiry</h2>
        <p className="text-gray-500 text-sm mt-1">
          Fill the form and we will get back to you soon
        </p>
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {errorMsg}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-28 border border-gray-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="+91">+91 IN</option>
            <option value="+1">+1 US</option>
            <option value="+44">+44 UK</option>
            <option value="+971">+971 AE</option>
            <option value="+254">+254 KE</option>
            <option value="+61">+61 AU</option>
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Travel Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Date of Travel <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        {errors.travelDate && (
          <p className="text-red-500 text-xs mt-1">{errors.travelDate}</p>
        )}
      </div>

      {/* Number of People + Children */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Number of People <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="numberOfPeople"
            min={1}
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.numberOfPeople && (
            <p className="text-red-500 text-xs mt-1">{errors.numberOfPeople}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Children (optional)
          </label>
          <input
            type="number"
            name="children"
            min={0}
            value={formData.children}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.children && (
            <p className="text-red-500 text-xs mt-1">{errors.children}</p>
          )}
        </div>
      </div>

      {/* Hotel Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Hotel Category
        </label>
        <select
          name="hotelCategory"
          value={formData.hotelCategory}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
        >
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg mt-2"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Submitting...
          </span>
        ) : (
          "Submit Enquiry"
        )}
      </button>
    </form>
  );
}