"use client";

import Skills from "@/app/skills";
// components
import { Navbar, Footer } from "@/common/components";

export default function BlogPage() {
  return (
    <div className={`dark`}>
      <Navbar />
      <Skills />
      <Footer />
    </div>
  );
}
