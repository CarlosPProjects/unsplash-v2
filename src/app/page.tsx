import ListPhotos from "@/components/ListPhotos";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="container pt-4 md:pt-12 max-md:px-4 flex items-center flex-col gap-8 md:gap-16 h-screen overflow-hidden">
      <section className="flex flex-col items-center gap-4 z-10">
        <p className="text-center -mb-4 font-medium text-sm">Beautiful</p>
        <h1 className="text-4xl md:text-5xl font-semibold">Unsplash</h1>
        <p className="text-center max-w-lg text-secondary tracking-wide mb-2 md:mb-4">
          Beautiful images from the world's most generous community.
          Explore the best images on Unsplash.
        </p>
        <Search />
      </section>
      <ListPhotos />
      <div className="absolute top-0 bottom-0 w-full z-0 bg-gradient-to-t from-background to-transparent" />
    </main>
  );
}
