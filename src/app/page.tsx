import Hero from "./components/hero/Hero";
import Highlights from "./components/highlights/Highlights";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}
