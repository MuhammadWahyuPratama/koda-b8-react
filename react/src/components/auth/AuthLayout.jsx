import { Children } from "react";
import AuthBanner from "./AuthBanner";

function AuthLayout({ children }) {
  return (
    <main className="min-h-screen   flex">
      <AuthBanner />

      <section className="w-1/2 flex bg-gray-100 items-center justify-center">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}

export default AuthLayout;
