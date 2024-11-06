import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { HomeSection } from "@/components/home";
import { AboutSection } from "@/components/about";
import { RoadMap } from "@/components/roadmap";

export default function IndexPage() {
  return (
    <div>
      <HomeSection />
      <AboutSection/>
      <RoadMap/>
    </div>
  );
};

