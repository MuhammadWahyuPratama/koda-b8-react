import { FaMapMarkerAlt, FaPhoneAlt, FaTruck } from "react-icons/fa";

function TopBar() {
  return (
    <header className="w-full bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 sm:text-sm">
        <div className="hidden items-center gap-2 md:flex">
          <FaMapMarkerAlt className="text-emerald-400" size={13} />
          <span className="font-medium">Dikirim ke Jakarta Selatan</span>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <FaTruck className="text-emerald-400" size={13} />
          <span className="font-medium">Gratis Ongkir</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-2 sm:flex">
            <FaTruck className="text-emerald-400" size={13} />
            <span>Gratis Ongkir Rp100.000+</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-emerald-400" size={12} />
            <span>0800-1234-5678</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
