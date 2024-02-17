import ListPhotos from "@/components/ListPhotos";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="container pt-12 max-md:px-4 flex items-center flex-col gap-16 h-screen overflow-hidden">
      <section className="flex flex-col items-center gap-4 z-10">
        <p className="text-center -mb-4 font-medium text-sm">Beautiful</p>
        <h1 className="text-4xl md:text-5xl font-semibold">Unsplash</h1>
        <p className="text-center max-w-lg text-secondary tracking-wide mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla
          autem laboriosam cumque libero tempore exercitationem.
        </p>
        <Search />
      </section>
      <ListPhotos />
      <div className="absolute left-0 top-0 right-0 bottom-0 z-0 bg-gradient-to-t from-background to-transparent" />
    </main>
  );
}
