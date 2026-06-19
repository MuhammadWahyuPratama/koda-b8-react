import { FiPlus } from "react-icons/fi";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import AddressCard from "../../components/profile/AddressCard";

function AddressListPage() {
  const addresses = [
    {
      id: 1,
      title: "Rumah",
      isPrimary: true,
      name: "Budi Santoso",
      phone: "0812-3456-7890",
      address: "Jl. Kebon Jeruk No.15, RT.003/RW.002",
      city: "Jakarta Barat, DKI Jakarta 11530",
    },
    {
      id: 2,
      title: "Kantor",
      isPrimary: false,
      name: "Budi Santoso",
      phone: "0812-3456-7890",
      address: "Jl. Sudirman Kav.52-53",
      city: "Jakarta Selatan, DKI Jakarta 12190",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto py-8">
      <section className="grid grid-cols-[300px_1fr] gap-8">
        <ProfileSidebar active="address" />

        <section>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Alamat Saya</h1>

            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm cursor-pointer"
            >
              <FiPlus className="w-5 h-5" />
              Tambah Alamat
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {addresses.map((address) => (
              <AddressCard key={address.id} {...address} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default AddressListPage;
