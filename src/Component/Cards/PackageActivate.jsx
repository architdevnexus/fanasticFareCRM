export default function PackageActivate({
  imageUrl,
  packageName,
  theme,
  duration,
  inclusion,
  price,
  onActivate,
  onDeactivate,
}) {
  return (
    <div className="flex items-start gap-4 w-[350px] h-[220px] py-4 px-4 rounded-lg shadow-md bg-white border border-gray-200">
      {/* Image */}
      <img
        src={imageUrl}
        alt={packageName}
        className="w-32 h-full object-cover rounded-md flex-shrink-0"
      />

      {/* Info Section */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="text-base font-semibold text-[var(--primary-color)] mb-1">
            {packageName}
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <div>
              <span className="font-medium">Theme: </span>
              <span>{theme}</span>
            </div>
            <div>
              <span className="font-medium">Duration: </span>
              <span>{duration}</span>
            </div>
            <div>
              <span className="font-medium">Inclusion: </span>
              <span>{inclusion}</span>
            </div>
          </div>
        </div>

        <div className="flex items-left flex-col justify-between mt-2">
          <div className="text-green-600 font-bold text-lg">
            ₹{price.toLocaleString()}
          </div>

          <div className="flex gap-2">
            <button
              onClick={onActivate}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Activate
            </button>
            <button
              onClick={onDeactivate}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Deactivate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
