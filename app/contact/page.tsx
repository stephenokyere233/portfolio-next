import ContactForm from "@/contact-form";
import { SITE } from "../../constants";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: `Contact — ${SITE.name}`,
  description: `Reach out to ${SITE.name} about software development.`,
  path: "contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
