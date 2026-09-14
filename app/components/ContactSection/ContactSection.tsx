import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div
      className="scroll-mt-20 px-6 min-[710px]:pl-12 min-[710px]:pr-12 min-[1280px]:pr-[80px] min-[1440px]:pr-[112px] py-6 
    flex flex-col min-[1235px]:flex-row gap-y-12 items-start min-[1235px]:items-center justify-between"
    >
      <ContactDetails />
      <ContactForm />
    </div>
  );
}
