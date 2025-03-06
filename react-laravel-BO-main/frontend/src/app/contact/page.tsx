import Card from "@/components/card/card";
import styles from "./contact.module.css";

import CenteredSection from "@/components/centeredSection/centeredSection";
import CTAButton from "@/components/ctaButton/ctaButton";
import SocialList from "@/components/socialList/socialList";
import ContactLink from "@/components/contactLink/contactLink";

export default function Contact() {
  return (
    <>
      <CenteredSection>
        <h2>Contact</h2>
        <p>Heb je een vraag of wil je een project aandragen? Neem contact met ons op!</p>
      </CenteredSection>

      <CenteredSection maxWidth="140rem">
      <div className={styles.content}>
        <Card>
          <h3>Volg ons</h3>
          <SocialList color="#5e3289" />
        </Card>

        <Card>
          <h3>Project aandragen?</h3>
          <p>Heb je een interessant project voor onze studenten?</p>

          <div className={styles.button}>
            <CTAButton href="mailto:info@mbo-hub.amsterdam">Draag een project aan</CTAButton>
          </div>
        </Card>

        <div className={styles.contact}>
          <Card>
              <h3>Contactgegevens</h3>
              <p>Je kunt ons ook direct bereiken via:</p>

              <ContactLink href="mailto:info@mbo-hub.amsterdam">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                info@mbo-hub.nl
              </ContactLink>

              <ContactLink href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                020 - XXX XXXX
              </ContactLink>

              <ContactLink href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-primary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Amsterdam, Nederland
              </ContactLink>
          </Card>
        </div>
      </div>
      </CenteredSection>
    </>
  );
}