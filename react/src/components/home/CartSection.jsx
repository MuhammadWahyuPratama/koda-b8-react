import { ArrowRight, Zap, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

function CartSection() {
  return (
    <section className="w-full mt-10">
      <section className="max-w-7xl p-4 mx-auto">
        <div className="flex justify-between mb-5">
          <div className="flex gap-5">
            <div className="bg-red-600 p-1 rounded-lg">
              <p className="flex justify-center text-white text-sm gap-2 items-center">
                <Zap />
                Flash Deal
              </p>
            </div>

            <p className="text-sm flex justify-center items-center gap-2">
              <Clock className="w-5 h-5" /> Berakhir dalam: 05 : 21 :{" "}
            </p>
          </div>

          <div className="flex gap-3">
            <Link className="cursor-pointer text-blue-600 text-sm">
              Lihat Semua{" "}
            </Link>
            <ArrowRight className="text-blue-600 text-sm" />
          </div>
        </div>

        <section className="grid grid-cols-4 gap-4  h-[420]">
          <div className="border-1 border-gray-400 rounded-lg">
            <div className="mb-5">
              <img
                src="assets/Headphone Wireless Premium.svg"
                className="w-full rounded-t-lg"
              />
            </div>

            <div className="flex flex-col gap-2 pl-2 mb-5">
              <p className="text-xs text-gray-500">SoundWave</p>
              <p className="text-sm ">Headphone Wireless Premium</p>
              <div className="flex gap-2 ">
                <div className="flex">
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                </div>

                <div className="flex gap-2 text-sm text-gray-400">
                  <p>4.8</p>
                  <p>(512)</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-blue-600 text-base">Rp.450.000</p>

                <p className="line-through text-sm text-gray-500">Rp 650.000</p>
              </div>
            </div>
          </div>

          <div className="border-1 border-gray-400 rounded-lg">
            <div className="mb-5">
              <img
                src="assets/Headphone Wireless Premium.svg"
                className="w-full rounded-t-lg"
              />
            </div>

            <div className="flex flex-col gap-2 pl-2 mb-5">
              <p className="text-xs text-gray-500">SoundWave</p>
              <p className="text-sm ">Headphone Wireless Premium</p>
              <div className="flex gap-2 ">
                <div className="flex">
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                </div>

                <div className="flex gap-2 text-sm text-gray-400">
                  <p>4.8</p>
                  <p>(512)</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-blue-600 text-base">Rp.450.000</p>

                <p className="line-through text-sm text-gray-500">Rp 650.000</p>
              </div>
            </div>
          </div>

          <div className="border-1  border-gray-400 rounded-lg">
            <div className="mb-5">
              <img
                src="assets/Headphone Wireless Premium.svg"
                className="w-full rounded-t-lg"
              />
            </div>

            <div className="flex flex-col gap-2 pl-2 mb-5">
              <p className="text-xs text-gray-500">SoundWave</p>
              <p className="text-sm ">Headphone Wireless Premium</p>
              <div className="flex gap-2 ">
                <div className="flex">
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                </div>

                <div className="flex gap-2 text-sm text-gray-400">
                  <p>4.8</p>
                  <p>(512)</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-blue-600 text-base">Rp.450.000</p>

                <p className="line-through text-sm text-gray-500">Rp 650.000</p>
              </div>
            </div>
          </div>

          <div className="border-1 border-gray-400 rounded-lg">
            <div className="mb-5">
              <img
                src="assets/Headphone Wireless Premium.svg"
                className="w-full rounded-t-lg"
              />
            </div>

            <div className="flex flex-col gap-2 pl-2 mb-5">
              <p className="text-xs text-gray-500">SoundWave</p>
              <p className="text-sm ">Headphone Wireless Premium</p>
              <div className="flex gap-2 ">
                <div className="flex">
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                  <img src="assets/star.svg" className="w-5 h-5" />
                </div>

                <div className="flex gap-2 text-sm text-gray-400">
                  <p>4.8</p>
                  <p>(512)</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-blue-600 text-base">Rp.450.000</p>

                <p className="line-through text-sm text-gray-500">Rp 650.000</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default CartSection;
