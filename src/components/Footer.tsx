import { useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { NewsletterModal } from "@/components/NewsletterModal";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const footerLinks = {
  resources: [
    { label: "Blog", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Întrebări Frecvente", href: "#" },
  ],
  legal: [
    { label: "Politica de Confidențialitate", href: "/politica-de-confidentialitate" },
    { label: "Termeni și Condiții", href: "/termeni-si-conditii" },
    { label: "Prelucrarea Datelor Personale", href: "/prelucrarea-datelor-personale" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61550774111898", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/todaysocialskills/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/today-social-skills/", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@today.social.skills", label: "TikTok" },
];

export function Footer() {
  const { toast } = useToast();
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleSectionInProgress = () => {
    toast({
      description: "Această secțiune este în lucru...",
    });
  };

  const handleNewsletterClick = () => {
    setIsNewsletterOpen(true);
  };

  return (
    <footer className="bg-brand-indigo text-white py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Today Social Skills Logo" 
                className="h-12 w-auto bg-white rounded-lg p-1"
              />
            </a>
            <p className="text-white/70 text-sm mb-6 max-w-xs">
              Construim viitorul prin educație non-formală!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.label === "Newsletter" ? handleNewsletterClick : handleSectionInProgress}
                    className="text-white/70 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} TodaySocialSkills. Toate drepturile rezervate.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Made with ❤️ in Romania
          </p>
        </div>
      </div>

      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </footer>
  );
}
