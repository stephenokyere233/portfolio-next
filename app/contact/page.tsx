import ContactForm from "@/contact-form";
import JsonLd from "@/json-ld";
import { SITE } from "../../constants";
import { getContactJsonLd } from "../../lib/json-ld";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: `Contact — ${SITE.name}`,
  description: SITE.contactIntro,
  path: "contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getContactJsonLd()} />
      <ContactForm />
    </>
  );
}
