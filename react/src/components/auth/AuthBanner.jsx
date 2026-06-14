function AuthBanner() {
  return (
    <section className="relative w-1/2 overflow-hidden">
      <img
        src="/assets/auth-banner.svg"
        alt="Shopping Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-blue-600/80"></div>

      <div className="relative z-10 flex flex-col h-full p-16 ">
        <header className="flex items-center gap-4 mb-20">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-xl">
            B
          </div>

          <h2 className="text-2xl font-bold text-white">BeliMudah</h2>
        </header>

        <section className="mt-24">
          <div className="text-5xl font-bold text-white leading-tight">
            <h1>Belanja lebih</h1>
            <h1>mudah, hidup lebih</h1>
            <h1>praktis</h1>
            
          </div>

          <div className="text-lg text-gray-300 mt-6  ">
            <p>Ribuan produk pilihan dengan harga</p>
            <p>terbaik, pengiriman cepat, dan </p>
            <p>pembayaran yang aman.</p>
          </div>
        </section>

        <section className="flex gap-16 mt-12">
          <div>
            <h3 className="text-3xl font-bold text-white">10rb+</h3>
            <p className="text-gray-300 mt-1">Produk</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">500rb+</h3>
            <p className="text-gray-300 mt-1">Pelanggan</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">4.8★</h3>
            <p className="text-gray-300 mt-1">Rating</p>
          </div>
        </section>

        <footer className="mt-auto">
          <p className="text-gray-300">
            © 2026 BeliMudah. Seluruh hak cipta dilindungi.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default AuthBanner;
