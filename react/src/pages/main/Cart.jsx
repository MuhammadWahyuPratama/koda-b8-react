import { FiHeart, FiMinus, FiPlus, FiTag, FiTrash2 } from "react-icons/fi";
import { headphoneWirelessPremium } from "../../assets";

function Cart() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-[2fr_1fr] gap-6">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img
                  src={headphoneWirelessPremium}
                  alt=""
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div>
                  <h2 className="text-lg font-medium">
                    Headphone Wireless Premium
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">Hitam</p>

                  <div className="flex items-center border border-gray-200 rounded-lg w-fit mt-3">
                    <button className="px-3 py-2 cursor-pointer">
                      <FiMinus className="w-4 h-4" />
                    </button>

                    <span className="px-5 text-sm">1</span>

                    <button className="px-3 py-2 cursor-pointer">
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>

                  <button className="flex items-center gap-2 mt-3 text-sm text-gray-500 cursor-pointer">
                    <FiHeart className="w-4 h-4" />
                    Simpan ke Wishlist
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <button className="cursor-pointer">
                  <FiTrash2 className="w-5 h-5 text-gray-400" />
                </button>

                <p className="text-2xl font-semibold text-blue-600">
                  Rp 450.000
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-5">
              <FiTag className="w-5 h-5 text-blue-600" />

              <h2 className="text-2xl font-medium">Kode Promo</h2>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Masukkan kode promo"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg cursor-pointer">
                Terapkan
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              Coba: HEMAT10, BELIMUDAH, atau NEWUSER
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border border-gray-200 rounded-xl p-5 h-fit">
          <h2 className="text-2xl font-medium mb-6">Ringkasan Pesanan</h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <p className="text-gray-500">Subtotal (1 item)</p>

              <p>Rp 450.000</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500">Ongkos Kirim</p>

              <p className="text-green-600 font-medium">GRATIS</p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-5"></div>

          <div className="flex justify-between text-lg font-semibold">
            <p>Total</p>

            <p className="text-blue-600">Rp 450.000</p>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl mt-6 cursor-pointer">
            Checkout Aman
          </button>

          <div className="text-center mt-5">
            <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
              <span>🔒 Pembayaran 100% Aman</span>
            </div>

            <p className="text-xs text-gray-400 mt-2 leading-5">
              Metode: Transfer Bank • Virtual Account • Kartu Kredit • e-Wallet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
