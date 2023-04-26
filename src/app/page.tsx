import Image from "next/image";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Geolocation from "@/components/Geolocation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
};
const { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_GRAPHQL_URL } = process.env;

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const data = await response.json();
  return (
    <>
      <Suspense fallback={<p>carregando produtos...</p>}>
        <Geolocation />
      </Suspense>

      <p className={inter.className}>kkkkkkk</p>
    </>
  );
}
