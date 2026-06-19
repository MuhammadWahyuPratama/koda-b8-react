import { FiEdit2, FiTrash2 } from "react-icons/fi";

function AddressCard({ title, isPrimary = false, name, phone, address, city }) {
  return (
    <article className="border border-gray-200 rounded-xl p-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>

          {isPrimary && (
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              Utama
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
          >
            <FiEdit2 className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="text-gray-500 hover:text-red-500 transition cursor-pointer"
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <p className="text-base">
          {name} • {phone}
        </p>

        <p className="text-gray-500 text-sm">{address}</p>

        <p className="text-gray-500 text-sm">{city}</p>
      </div>

      {!isPrimary && (
        <button
          type="button"
          className="mt-5 text-blue-600 text-sm hover:underline cursor-pointer"
        >
          Jadikan Alamat Utama
        </button>
      )}
    </article>
  );
}

export default AddressCard;
