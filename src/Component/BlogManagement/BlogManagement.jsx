import React, { useState } from "react";

const initialBlogs = [
  {
    id: 21121,
    title: "Direct vs. Connecting Flights – What’s Worth It?",
    author: "Amanda Clark",
    category: "Flight",
    date: "July 21, 2025 12:30 PM",
    status: "Published",
  },
  {
    id: 11443,
    title: "Top Hotel Booking Mistakes to Avoid",
    author: "John Smith",
    category: "Hotel",
    date: "July 24, 2025 12:30 PM",
    status: "Draft",
  },
];

const statusColors = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-gray-200 text-gray-700",
  Scheduled: "bg-blue-100 text-blue-700",
};

const CreateBlogModal = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Flights");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !author.trim()) return;

    const newBlog = {
      id: Date.now(),
      title,
      author,
      category,
      date: new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
      status: "Draft",
    };

    onCreate(newBlog);
    onClose();
  };

  return (
    <div className="fixed inset-0  bg-opacity-30 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white w-[400px] rounded-lg p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl text-gray-500">×</button>
        <div className="flex flex-col gap-4">
          <div className="text-3xl text-center">＋</div>

          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option>Flights</option>
              <option>Hotel</option>
              <option>Holiday Package</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Author Name</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Featured Image</label>
            <div className="mt-1 border border-dashed border-gray-300 rounded-md h-24 flex items-center justify-center text-sm text-gray-500">
              Upload file (JPG, PNG)
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#0E3C47] text-white py-2 px-4 rounded-md mt-3 text-sm"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogManagement = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState("");

  const handleCreateBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
    setToast("Blog has been created");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="p-6 bg-[#f9fafb] min-h-screen relative">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-[#A3A3A3]">Blog Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#0E3C47] hover:bg-[#0a2e36] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
        >
          <span className="text-xl">＋</span> Create Blog
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <div className="bg-[#5B8CA9] text-white py-2 px-6 rounded-lg flex items-center gap-2">
          <span className="text-2xl">🔔</span>
          <span className="text-sm">{blogs.length} blogs are currently live on the website.</span>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full table-auto text-left text-sm text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Author Name</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.title}</td>
                <td className="px-4 py-3">{item.author}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <CreateBlogModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreateBlog}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg text-sm animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
};

export default BlogManagement;
