import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "~/components/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="flex w-full flex-col">
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
