// import { appleImg } from "@/utils";

import Image from "next/image";

export default function Navbar() {
  return (
    <main>
      <nav>
        <Image
          width={2400}
          height={720}
          layout="responsive"
          src="/assets/images/hero.jpeg"
          alt="Hero"
        />
      </nav>
    </main>
  );
}
