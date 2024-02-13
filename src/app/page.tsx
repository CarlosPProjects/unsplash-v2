export default function Home() {
  return (
    <main className="container pt-12 max-md:px-4 flex items-center flex-col gap-16 min-h-screen">
      <section className="flex flex-col items-center gap-8 z-10">
        <h1 className="text-4xl md:text-6xl font-semibold">Gallery Grid</h1>
        <p className="text-center max-w-lg text-secondary">Consectetur adipisicing elit. Aliquid impedit hic ipsa ut veniam  suscipit et iure cum quasi assumenda eaque.</p>
        <button className="bg-blue-700 text-white px-4 py-4 shadow-blue-700 w-full max-w-48">Ver más</button>
      </section>
      <section className="w-full h-[70vh] grid grid-cols-1 md:grid-cols-8 grid-rows-10 gap-2 md:gap-4 z-0">
        <div className="grid grid-cols-1 grid-rows-8 col-span-1 md:col-span-5 row-span-6 md:row-span-10 gap-2 md:gap-4">
          <div className="row-span-8 md:row-span-5 border"></div>
          <div className="row-span-0 hidden md:block md:row-span-3 border"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-8 col-span-1 md:col-span-3 row-span-4 md:row-span-10 gap-2 md:gap-4">
          <div className="col-span-1 md:row-span-4 border"></div>
          <div className="col-span-1 md:row-span-4 border"></div>
        </div>
      </section>
      <div className="h-screen absolute left-0 top-0 right-0 bottom-0 z-0 bg-gradient-to-t from-background to-transparent" />
    </main>
  )
}
