import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {

  return (
    <main className="container pt-4 md:pt-12 max-md:px-4 flex items-center flex-col gap-8 md:gap-16 h-screen overflow-hidden">
      <section className="flex flex-col items-center gap-4 z-10">
        <p className="text-center -mb-4 font-medium text-sm">Beautiful</p>
        <h1 className="text-4xl md:text-5xl font-semibold">Stoodiow</h1>
        <p className="text-center max-w-lg text-secondary tracking-wide mb-2 md:mb-4">
          Beautiful images from the world&apos;s most generous community.
          Explore the best images on Unsplash.
        </p>
        <Search />
      </section>
      <Image src="/images/hero-section-gallery.webp" width={1512} height={982} alt="hero section gallery" priority />
      <div className="absolute top-0 bottom-0 w-full z-0 bg-gradient-to-t from-background to-transparent" />
    </main>
  );
}
