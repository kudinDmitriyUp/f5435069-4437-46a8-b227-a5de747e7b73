"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ChefHat, Droplet, Facebook, Instagram, Leaf, Mail, Mountain } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="Yama Retreat"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Experience", id: "about" },
            { name: "Amenities", id: "features" },
            { name: "Guest Stories", id: "testimonials" },
            { name: "Reserve", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard 
          title="Yama Retreat"
          description="Experience the serene beauty of Japanese mountains combined with timeless hospitality and classical elegance"
          tag="Premium Mountain Sanctuary"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740425590-257xirxx.jpg"
          imageAlt="Japanese mountain landscape at sunrise"
          frameStyle="card"
          buttons={[
            { text: "Reserve Your Stay", href: "contact" },
            { text: "Explore Experience", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline 
          tag="Our Sanctuary"
          title="Nestled in Japanese Mountain Heritage"
          description="Our hotel embodies the essence of classical Japanese design principles merged with contemporary luxury. Every detail, from the architectural elements inspired by traditional temples to the carefully curated natural surroundings, creates an atmosphere of profound tranquility that transports you to another world."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740426376-gejnwtpy.jpg",
            imageAlt: "luxury Japanese hot spring resort interior"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740427128-mlz4nyg7.jpg",
            imageAlt: "Japanese mountain view from hotel window"
          }}
          buttons={[
            { text: "Learn Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour 
          title="Exceptional Amenities"
          description="Thoughtfully designed experiences that honor traditional Japanese hospitality"
          tag="What Awaits You"
          features={[
            {
              title: "Onsen Traditions",
              description: "Natural hot spring baths with mountain views, expertly maintained for your wellness and rejuvenation",
              icon: Droplet
            },
            {
              title: "Zen Gardens",
              description: "Meticulously landscaped gardens following classical Japanese design principles for peaceful contemplation",
              icon: Leaf
            },
            {
              title: "Kaiseki Dining",
              description: "Multi-course culinary masterpieces featuring seasonal ingredients prepared with traditional techniques",
              icon: ChefHat
            },
            {
              title: "Mountain Sanctuary",
              description: "Exclusive access to private hiking trails and viewpoints overlooking pristine natural landscapes",
              icon: Mountain
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree 
          title="Guest Stories"
          description="Hear from those who have experienced the transformation of staying at our mountain sanctuary"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Elena Rossini",
              handle: "@elenart_travels",
              testimonial: "This hotel transcends the typical luxury experience. Every moment felt like a carefully choreographed meditation. The attention to classical design details and natural beauty left me speechless.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740431255-0c3y9v1y.jpg",
              imageAlt: "Portrait of Elena Rossini"
            },
            {
              id: "2",
              name: "James Whitmore",
              handle: "@jwhitmore_ventures",
              testimonial: "I came seeking refuge from the chaos of daily life. What I found was a sanctuary that honors both tradition and comfort in the most elegant way imaginable. I shall return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740432029-tjpjxbdp.jpg",
              imageAlt: "Portrait of James Whitmore"
            },
            {
              id: "3",
              name: "Yuki Tanaka",
              handle: "@yukitanaka_designs",
              testimonial: "As someone deeply connected to Japanese culture, I was moved by how authentically this hotel captures the spirit of mountain living while maintaining extraordinary hospitality standards.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740433369-zp824gvm.jpg",
              imageAlt: "Portrait of Yuki Tanaka"
            },
            {
              id: "4",
              name: "Marcus Webb",
              handle: "@marcuswebb_luxury",
              testimonial: "The onsen experience at sunset, the carefully prepared meals, the profound silence of the mountains - this is what true premium hospitality means. An unforgettable journey.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740434124-ulqfsa8e.jpg",
              imageAlt: "Portrait of Marcus Webb"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit 
          tag="Begin Your Journey"
          title="Reserve Your Mountain Escape"
          description="Step into a world of classical elegance and natural beauty. Our team is dedicated to crafting an experience that will remain with you long after you depart."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763740434910-3c9b92du.jpg"
          imageAlt="Japanese temple mountain evening"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Reserve Now"
          termsText="By reserving, you agree to our commitment to your privacy and comfort. We will contact you within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial 
          logoText="Yama Retreat"
          columns={[
            {
              title: "Experience",
              items: [
                { label: "Amenities", href: "features" },
                { label: "Dining", href: "#" },
                { label: "Activities", href: "#" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Cancellation Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Follow us on Facebook" },
            { icon: Mail, href: "mailto:info@yamaretreat.com", ariaLabel: "Email us" }
          ]}
          copyrightText="© Yama Retreat, 2025. Crafted with reverence for tradition and nature."
        />
      </div>
    </ThemeProvider>
  );
}