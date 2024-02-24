import Search from "./Search"

const Header = () => {
  return (
    <section className="flex gap-4 border-b border-secondary items-center pb-4">
        <span className="text-3xl font-bold">
            Stoodiow
        </span>
        <Search />
    </section>
  )
}

export default Header