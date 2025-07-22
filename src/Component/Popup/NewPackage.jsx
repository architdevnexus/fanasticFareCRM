import { useState, useEffect } from "react";
import { FaPlus, FaRupeeSign } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function NewPackage({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const [formData, setFormData] = useState({
    packageName: "",
    destination: "",
    category: "",
    nights: "",
    days: "",
    inclusions: [],
    terms: "",
    price: "",
    status: true, // true for Active, false for Inactive
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        inclusions: checked
          ? [...prev.inclusions, value]
          : prev.inclusions.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation using object methods
    const requiredFields = [
      formData.packageName.trim(),
      formData.destination.trim(),
      formData.category,
      formData.nights,
      formData.days,
      formData.price,
    ];

    const isValid = requiredFields.every((field) => field !== "" && field !== null);

    if (!isValid) {
      alert("Please fill in all required fields");
      return;
    }

    const payload = {
      ...formData,
      status: formData.status ? "active" : "inactive",
    };

    console.log("Package Data:", payload);

    try {
      const response = await fetch("https://your-api-endpoint.com/packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("API Response:", result);
      alert("Package created successfully!");
      onClose();
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to create package!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white max-w-3xl w-full rounded-xl p-6 shadow-2xl animate-fadeIn relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
        >
          <IoClose />
        </button>

        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <FaPlus className="text-3xl text-[var(--primary-color)]" />
          <h2 className="text-2xl font-semibold text-[var(--primary-color)]">
            Create New Package
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="packageName"
              placeholder="Enter the Package Name"
              className="border rounded px-4 py-2 outline-none"
              value={formData.packageName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Enter the Destination"
              className="border rounded px-4 py-2 outline-none"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category & Duration */}
          <div className="grid grid-cols-2 gap-4 items-center">
            <select
              name="category"
              className="border rounded px-4 py-2 text-gray-600"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="adventures">Adventures</option>
              <option value="romantic">Romantic</option>
              <option value="chill">Chill</option>
            </select>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Duration:</span>
              <input
                type="number"
                name="nights"
                placeholder="7"
                className="border rounded px-2 py-1 w-16 text-center"
                value={formData.nights}
                onChange={handleChange}
                required
              />
              <span className="text-sm text-gray-600">N</span> /
              <input
                type="number"
                name="days"
                placeholder="6"
                className="border rounded px-2 py-1 w-16 text-center"
                value={formData.days}
                onChange={handleChange}
                required
              />
              <span className="text-sm text-gray-600">D</span>
            </div>
          </div>

          {/* Inclusions */}
          <div className="grid grid-cols-3 gap-2 text-sm">
            {["Flight", "Hotel", "Cabs", "Tour Guide", "Meals"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-[var(--primary-color)]">
                <input
                  type="checkbox"
                  value={item}
                  checked={formData.inclusions.includes(item)}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>

          {/* Terms */}
          <textarea
            name="terms"
            rows={4}
            placeholder="Set Terms and Conditions"
            className="w-full border border-[var(--primary-color)] rounded-md px-3 py-2 resize-none"
            value={formData.terms}
            onChange={handleChange}
          />

          {/* Price */}
       <div className="flex items-center border border-[var(--primary-color)] rounded-md overflow-hidden">
  <div className="bg-[var(--primary-color)] text-white px-3 py-3 flex items-center justify-center">
    <FaRupeeSign />
  </div>
  <input
    type="number"
    name="price"
    placeholder="Enter the amount"
    className="w-full px-4 py-2 outline-none text-[var(--primary-color)] placeholder-gray-400"
    value={formData.price}
    onChange={handleChange}
    required
  />
</div>


          {/* Toggle Switch Status */}
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">Status:</span>
            <div
              className={`w-20 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition duration-300 ${
                formData.status ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, status: !prev.status }))
              }
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition duration-300 ${
                  formData.status ? "translate-x-11" : "translate-x-1"
                }`}
              ></div>
            </div>
            <span
              className={`text-sm font-semibold ${
                formData.status ? "text-[var(--primary-color)]" : "text-[var(--primary-color)]"
              }`}
            >
              {formData.status ? "Active" : "Inactive"}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Submit Package
          </button>
        </form>
      </div>
    </div>
  );
}
