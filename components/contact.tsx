import Link from "next/link";
import { CONTACTS } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-[85vh] py-10">
      <h2 className="text-3xl font-semibold gradient-text mb-8">Get in touch</h2>
      <div className="flex flex-wrap gap-6 my-10">
        {CONTACTS.map((contact) => (
          <Link
            key={contact.link}
            href={contact.link}
            target={contact.link.startsWith("http") ? "_blank" : undefined}
            rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-4xl text-muted hover:text-white transition-colors duration-200"
          >
            <contact.icon />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
