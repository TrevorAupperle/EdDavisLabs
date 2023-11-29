import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default MyApp;
