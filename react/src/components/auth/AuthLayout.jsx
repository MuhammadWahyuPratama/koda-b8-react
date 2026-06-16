import AuthBanner from "./AuthBanner";

function AuthLayout({ children, bannerType }) {
  return (
    <main className="min-h-screen flex">
      <AuthBanner bannerType={bannerType} />

      <section className="w-1/2 bg-gray-100 flex justify-center items-start py-10">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}

export default AuthLayout;
