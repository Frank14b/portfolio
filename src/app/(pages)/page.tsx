"use client";

// components
import { Navbar, Footer } from "@/common/components";

// sections
import Hero from "../hero";
import Skills from "../skills";
import ContactForm from "../contact-form";
import useContacts from "./hooks/useContacts";

export default function Portfolio() {
  const contactHook = useContacts();

  return (
    <div className={`dark`}>
      <Navbar />
      <Hero contactHook={contactHook} />
      <Skills />
      <ContactForm contactHook={contactHook} />
      <Footer />
    </div>
  );
}
