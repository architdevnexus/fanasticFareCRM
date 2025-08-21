import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { FaList } from "react-icons/fa";

const dummySliders = [
  { id: 1, image: "", order: 1, link: "https://example.com" },
  { id: 2, image: "", order: 2, link: "https://example1.com" },
  { id: 3, image: "", order: 3, link: "https://example3.com" },
  { id: 4, image: "", order: 4, link: "https://example4.com" },
];

export default function SliderManagement() {
  const [sliders, setSliders] = useState(dummySliders);

  const handleOrderChange = (id, value) => {
    setSliders((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, order: parseInt(value) } : item
      )
    );
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Slider Management
        </h2>
        <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800 transition">
          + Create Slider
        </button>
      </div>
      <div className="p-9">
        <div className="bg-white rounded-lg shadow-md overflow-x-auto ">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Image</th>
                <th className="p-4">Display Order</th>
                <th className="p-4">CTA Link</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sliders.map((slider, index) => (
                <tr key={slider.id} className="border-b">
                  <td className="p-4 font-medium">{index + 1}</td>
                  <td className="p-4">
                    <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-xl">🖼️</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <select
                      value={slider.order}
                      onChange={(e) =>
                        handleOrderChange(slider.id, e.target.value)
                      }
                      className="border border-gray-300 rounded px-2 py-1"
                    >
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4">
                    <input
                      type="text"
                      className="border border-gray-300 rounded px-3 py-1 w-full"
                      value={slider.link}
                      readOnly
                    />
                  </td>
                  <td className="p-4 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FiEdit2 size={18} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <FaList size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
