import { Hero } from "@/components/home/hero";
import { WorksWith } from "@/components/home/works-with";
import { Work } from "@/components/home/work";
import { About } from "@/components/home/about";
import { Journey } from "@/components/home/journey";
import { Stack } from "@/components/home/stack";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <WorksWith />
      <Work />
      <About />
      <Journey />
      <Stack />
      <Contact />
    </main>
  );
}
