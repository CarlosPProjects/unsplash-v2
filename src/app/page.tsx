import Image from "next/image";

export default function Home() {
  return (
    <main className="container pt-12 max-md:px-4 flex items-center flex-col gap-16 min-h-screen">
      <section className="flex flex-col items-center gap-8 z-10">
        <h1 className="text-4xl md:text-6xl font-semibold">Gallery Grid</h1>
        <p className="text-center max-w-lg text-secondary">Consectetur adipisicing elit. Aliquid impedit hic ipsa ut veniam  suscipit et iure cum quasi assumenda eaque.</p>
        <button className="bg-blue-700 text-white px-4 py-4 shadow-blue-700 w-full max-w-48 hover:bg-opacity-70 duration-300">Ver más</button>
      </section>
      <section className="w-full h-[70vh] grid grid-cols-1 md:grid-cols-8 grid-rows-10 gap-2 md:gap-4 z-0">
        <div className="grid grid-cols-1 grid-rows-8 col-span-1 md:col-span-5 row-span-6 md:row-span-10 gap-2 md:gap-4">
          <div className="row-span-8 md:row-span-5 border border-white border-opacity-50 relative">
            <Image src={'/images/neom-gOqBe7ropxM-unsplash.webp'} fill alt="a person standing on top of a rocky hill" className="object-cover object-center"  />
          </div>
          <div className="row-span-0 hidden md:block md:row-span-3 border border-white border-opacity-50 relative">
            <Image src={'/images/sitraka-E0sOhoDXsbw-unsplash.webp'} fill alt="a multicolored building with people walking by it" className="object-cover object-center"  />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-8 col-span-1 md:col-span-3 row-span-4 md:row-span-10 gap-2 md:gap-4">
          <div className="col-span-1 md:row-span-4 border border-white border-opacity-50 relative">
            <Image src={'/images/neom-WZCMd9K-sHY-unsplash.webp'} fill alt="a person wearing a hat standing in front of a mountain" className="object-cover object-center"  />
          </div>
          <div className="col-span-1 md:row-span-4 border border-white border-opacity-50 relative">
            <Image src={'/images/neom-ne3RC_Q9UEA-unsplash.webp'} fill alt="a sea turtle swimming over a coral reef" className="object-cover object-center"  />
          </div>
        </div>
      </section>
      <div className="h-screen absolute left-0 top-0 right-0 bottom-0 z-0 bg-gradient-to-t from-background to-transparent" />
    </main>
  )
}
