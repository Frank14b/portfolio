"use client";

// components
import { Navbar, Footer } from "@/common/components";

// sections
import Hero from "../hero";
import Skills from "../skills";
import Resume from "../resume";
import ContactForm from "../contact-form";
import useContacts from "./hooks/useContacts";

export default function Portfolio() {
  const contactHook = useContacts();

  return (
    <div className={`dark`}>
      <Navbar />
      <Hero contactHook={contactHook} />
      <Skills />
      <Resume />
      <ContactForm contactHook={contactHook} />
      <Footer />
    </div>
  );
}
