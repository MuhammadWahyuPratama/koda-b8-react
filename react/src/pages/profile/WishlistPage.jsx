import { headphoneWirelessPremium } from "../../assets";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import WishlistCard from "../../components/profile/WishListCard";

function AddressListPage() {
  const wishlist = [
    {
      id: 1,
      image: headphoneWirelessPremium,
      brand: "SoundWave",
      name: "Headphone Wireless Premium",
      rating: 4.8,
      review: 512,
      price: "Rp 450.000",
      oldPrice: "Rp 650.000",
      discount: "-31%",
    },
    {
      id: 2,
      image: headphoneWirelessPremium,
      brand: "SportPro",
      name: "Sneakers Sport Runfast",
      rating: 4.6,
      review: 445,
      price: "Rp 550.000",
      oldPrice: "Rp 750.000",
      discount: "-27%",
    },
  ];
  return (
    <main className="max-w-7xl mx-auto py-8">
      <section className="grid grid-cols-[300px_1fr] gap-8">
        <ProfileSidebar active="wishlist" />

        <section>
          <h1 className="text-3xl font-semibold mb-6">
            Wishlist ({wishlist.length})
          </h1>

          <div className="flex flex-wrap gap-6">
            {wishlist.map((product) => (
              <WishlistCard
                key={product.id}
                image={product.image}
                brand={product.brand}
                name={product.name}
                rating={product.rating}
                review={product.review}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default AddressListPage;
