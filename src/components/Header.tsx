import Link from "next/link";
import Search from "./Search";

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 border-b border-background-foreground items-center justify-between pb-4">
      <Link href="/" className="text-3xl font-bold">Stoodiow</Link>
      <Search />
    </section>
  );
};

export default Header;
