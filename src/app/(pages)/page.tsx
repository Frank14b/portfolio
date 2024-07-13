// components
import { Navbar, Footer } from "@/common/components";

// sections
import Hero from "../hero";
import Skills from "../skills";
import Resume from "../resume";
import ContactForm from "../contact-form";

export default function Portfolio() {
  return (
    <div className={`dark`}>
      <Navbar />
      <Hero />
      <Skills />
      <Resume />
      <ContactForm />
      <Footer />
    </div>
  );
}