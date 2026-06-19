import { FiEdit2 } from "react-icons/fi";
import ProfileSidebar from "../../components/profile/ProfileSidebar";

function EditProfilePage() {
  return (
    <main className="max-w-7xl mx-auto py-8">
      <section className="grid grid-cols-[300px_1fr] gap-8">
        <ProfileSidebar active="profile" />

        <section>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Pengaturan Profil</h1>

            <button
              type="button"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-5 py-3 flex items-center gap-2 text-sm transition cursor-pointer"
            >
              <FiEdit2 className="w-5 h-5" />
              Simpan
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex justify-center items-center">
                <span className="text-4xl font-semibold text-blue-600">B</span>
              </div>

              <button
                type="button"
                className="text-blue-600 hover:underline text-sm cursor-pointer"
              >
                Ganti Foto Profil
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label className="text-sm text-gray-500">Nama Lengkap</label>

                <input
                  type="text"
                  defaultValue="Budi Santoso"
                  className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Email</label>

                <input
                  type="email"
                  defaultValue="budi@email.com"
                  className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Nomor Telepon</label>

                <input
                  type="text"
                  defaultValue="0812-3456-7890"
                  className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Tanggal Lahir</label>

                <input
                  type="date"
                  defaultValue="1990-03-15"
                  className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Jenis Kelamin</label>

                <select className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500">
                  <option>Laki-laki</option>

                  <option>Perempuan</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 mt-6">
            <h2 className="text-xl font-semibold mb-5">Keamanan Akun</h2>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="text-blue-600 hover:underline text-left text-sm cursor-pointer"
              >
                Ubah Kata Sandi
              </button>

              <button
                type="button"
                className="text-blue-600 hover:underline text-left text-sm cursor-pointer"
              >
                Aktifkan Verifikasi 2 Langkah
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default EditProfilePage;
