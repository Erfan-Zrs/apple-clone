import Image from "next/image";
import { navLists } from "@/constants/content";
export default function Navbar() {
  return (
    <main className="w-full py-4 sm:px-8 px-4 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image
          width={14}
          height={18}
          src="/assets/images/apple.svg"
          alt="apple-icon"
        />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => {
            return <div key={nav}>{nav}</div>;
          })}
        </div>
        <div>
          <Image
            src="/assets/images/search.svg"
            width={18}
            height={18}
            alt="search-icon"
          />
          <Image
            src="/assets/images/bag.svg"
            width={18}
            height={18}
            alt="bag-icon"
          />
        </div>
      </nav>
    </main>
  );
}
