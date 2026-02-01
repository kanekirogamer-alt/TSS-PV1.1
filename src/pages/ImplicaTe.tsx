import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Heart, HandHeart, Building2, ArrowRight, Mail, Phone, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const involvementOptions = [
  {
    icon: HandHeart,
    title: "Voluntariat",
    description: "Alătură-te echipei noastre de voluntari și contribuie la proiecte care fac diferența în comunitate. Vei dobândi experiență valoroasă și vei cunoaște oameni minunați.",
    benefits: ["Experiență practică", "Dezvoltare personală", "Networking", "Certificate"],
    colorClass: "bg-brand-blue/10 text-brand-blue",
    borderColor: "border-brand-blue/20 hover:border-brand-blue/50",
  },
  {
    icon: Heart,
    title: "Donații",
    description: "Sprijinul tău financiar ne ajută să ajungem la mai mulți tineri și să dezvoltăm programe de calitate. Fiecare contribuție contează.",
    benefits: ["Impact direct", "Transparență", "Rapoarte periodice", "Deduceri fiscale"],
    colorClass: "bg-brand-pink/10 text-brand-pink",
    borderColor: "border-brand-pink/20 hover:border-brand-pink/50",
  },
  {
    icon: Building2,
    title: "Parteneriate",
    description: "Colaborează cu noi pentru a aduce programe de dezvoltare a abilităților sociale în organizația ta sau comunitatea ta.",
    benefits: ["Programe personalizate", "Expertiză dovedită", "Flexibilitate", "Impact măsurabil"],
    colorClass: "bg-brand-green/10 text-brand-green",
    borderColor: "border-brand-green/20 hover:border-brand-green/50",
  },
];

const stats = [
  { icon: Users, value: "100+", label: "Voluntari activi" },
  { icon: Calendar, value: "50+", label: "Evenimente anuale" },
  { icon: Award, value: "30+", label: "Parteneriate" },
];

const ImplicaTe = () => {
  const heroRef = useRef(null);
  const optionsRef = useRef(null);
  const contactRef = useRef(null);
  const { toast } = useToast();

  const isHeroInView = useInView(heroRef, { once: true });
  const isOptionsInView = useInView(optionsRef, { once: true, margin: "-100px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const handleSectionInProgress = () => {
    toast({
      description: "Această secțiune este în lucru...",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-28 pb-16 bg-gradient-to-br from-brand-purple/5 via-background to-brand-pink/5 overflow-hidden"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="text-brand-purple">Implică</span>-te
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Fii parte din schimbare! Există multe modalități prin care poți contribui la misiunea noastră de a dezvolta abilitățile sociale ale tinerilor și adulților.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Options Section */}
      <section ref={optionsRef} className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOptionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
              Cum poți ajuta?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Alege <span className="text-brand-blue">modalitatea</span> potrivită
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isOptionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`bg-card rounded-3xl p-8 border-2 ${option.borderColor} transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className={`w-16 h-16 rounded-2xl ${option.colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {option.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {option.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Ce primești:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-brand-green" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" variant="default" onClick={handleSectionInProgress}>
                  Află mai multe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-4">
              Contactează-ne
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ai întrebări? <span className="text-brand-purple">Suntem aici</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Nu ezita să ne contactezi pentru mai multe informații despre cum te poți implica în proiectele noastre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@todaysocialskills.org"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-brand-blue" />
                <span className="text-foreground">contact@todaysocialskills.org</span>
              </a>
              <a 
                href="tel:+40123456789"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-green" />
                <span className="text-foreground">+40 123 456 789</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ImplicaTe;
