export default function DeactivateModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4">Deactivate Markup</h2>
        <p className="mb-6">
          Are you sure you want to deactivate this markup rule?
        </p>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="border px-4 py-1 rounded">
            Cancel
          </button>
          <button className="bg-teal-900 text-white px-4 py-1 rounded">
            Deactivate
          </button>
        </div>
      </div>
    </div>
  );
}
