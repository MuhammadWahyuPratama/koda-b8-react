import ProfileSidebar from "../../components/profile/ProfileSidebar";

function AddressListPage() {
  return (
    <main className="max-w-7xl mx-auto py-8">
      <section className="grid grid-cols-[280px_1fr] gap-8">
        <ProfileSidebar active="address" />

        <section>
          <h1 className="text-3xl font-semibold">Alamat Saya</h1>

          
        </section>
      </section>
    </main>
  );
}

export default AddressListPage;
