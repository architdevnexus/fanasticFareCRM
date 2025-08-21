export default function EditMarkupModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4">Edit Markup</h2>
        <label className="block mb-2">User Group</label>
        <select defaultValue={data?.userType} className="w-full border p-2 rounded mb-4">
          <option>Agent</option>
          <option>Customer</option>
        </select>

        <label className="block mb-2">Markup</label>
        <div className="flex items-center gap-1 mb-6">
          <input
            type="text"
            defaultValue={parseFloat(data?.markup)}
            className="w-full border p-2 rounded"
          />
          <span className="text-gray-600">%</span>
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="border px-4 py-1 rounded">
            Cancel
          </button>
          <button className="bg-teal-900 text-white px-4 py-1 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
