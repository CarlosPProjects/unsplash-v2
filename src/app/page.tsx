import ListPhotos from "@/components/ListPhotos";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container pt-12 max-md:px-4 flex items-center flex-col gap-16 min-h-screen">
      <section className="flex flex-col items-center gap-6 z-10">
        <p className="text-center -mb-4 font-medium text-sm">Gallery</p>
        <h1 className="text-4xl md:text-5xl font-semibold">Latest Images</h1>
        <p className="text-center max-w-lg text-secondary tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla
          autem laboriosam cumque libero tempore exercitationem.
        </p>
        <Search />
      </section>
      <ListPhotos />
      <div className="h-screen absolute left-0 top-0 right-0 bottom-0 z-0 bg-gradient-to-t from-background to-transparent" />
    </main>
  );
}
