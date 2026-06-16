import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiShoppingBag,
  FiShield,
  FiRotateCcw,
  FiHeadphones,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full bg-[#07162E] text-white mt-20">
      {/* Top Feature */}
      <section className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-4 gap-8">
          <div className="flex gap-4">
            <div className="bg-blue-600/20 p-3 rounded-full">
              <FiShoppingBag className="w-5 h-5 text-blue-500" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Gratis Ongkir</h3>
              <p className="text-xs text-gray-400">
                Pembelian di atas Rp 100.000
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-600/20 p-3 rounded-full">
              <FiShield className="w-5 h-5 text-blue-500" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Pembayaran Aman</h3>
              <p className="text-xs text-gray-400">SSL terenkripsi 256-bit</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-600/20 p-3 rounded-full">
              <FiRotateCcw className="w-5 h-5 text-blue-500" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Pengembalian Mudah</h3>
              <p className="text-xs text-gray-400">
                30 hari pengembalian gratis
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-600/20 p-3 rounded-full">
              <FiHeadphones className="w-5 h-5 text-blue-500" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Dukungan 24/7</h3>
              <p className="text-xs text-gray-400">Bantuan kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-4 gap-16">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 w-8 h-8 rounded-md flex items-center justify-center font-bold">
              B
            </div>

            <h2 className="font-semibold text-xl">BeliMudah</h2>
          </div>

          <p className="text-sm text-gray-400 leading-7">
            Platform belanja online terpercaya dengan ribuan produk pilihan.
            Belanja mudah, aman, dan menyenangkan.
          </p>

          <div className="flex gap-3 mt-6">
            <div className="bg-slate-700 p-2 rounded-full">
              <FaFacebook size={16} />
            </div>

            <div className="bg-slate-700 p-2 rounded-full">
              <FaInstagram size={16} />
            </div>

            <div className="bg-slate-700 p-2 rounded-full">
              <FaTwitter size={16} />
            </div>

            <div className="bg-slate-700 p-2 rounded-full">
              <FaYoutube size={16} />
            </div>
          </div>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="font-semibold mb-5">Layanan</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>Tentang Kami</li>
            <li>Karir</li>
            <li>Blog</li>
            <li>Program Afiliasi</li>
            <li>Jual di BeliMudah</li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="font-semibold mb-5">Bantuan</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>Cara Belanja</li>
            <li>Kebijakan Pengembalian</li>
            <li>Lacak Pesanan</li>
            <li>FAQ</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold mb-5">Kontak</h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex gap-3">
              <FiMapPin size={18} />
              <p>Jl. Sudirman No.1, Jakarta Selatan, DKI Jakarta 12190</p>
            </div>

            <div className="flex gap-3">
              <FiPhone size={18} />
              <p>0800-1234-5678 (Gratis)</p>
            </div>

            <div className="flex gap-3">
              <FiMail size={18} />
              <p>bantuan@belimudah.id</p>
            </div>
          </div>

          <div className="bg-slate-800 w-full rounded-lg p-3 mt-6">
            <p className="text-sm mb-3">Newsletter</p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 min-w-0 bg-slate-700 rounded px-3 py-2 text-sm outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm whitespace-nowrap shrink-0">
                Langganan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center text-xs text-gray-400">
          <p>© 2026 BeliMudah. Seluruh hak cipta dilindungi.</p>

          <div className="flex gap-6">
            <p>Kebijakan Privasi</p>
            <p>Syarat & Ketentuan</p>
            <p>Admin</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
