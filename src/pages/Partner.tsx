import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Building2, Target, Handshake, Lightbulb, CheckCircle2, Send, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Partner() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const journeyRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isJourneyInView = useInView(journeyRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Target,
      title: "Programe Personalizate",
      description: "Dezvoltă programe de training adaptate nevoilor specifice ale echipei tale.",
      color: "bg-brand-green",
      lightColor: "bg-brand-green/10",
      textColor: "text-brand-green"
    },
    {
      icon: Handshake,
      title: "Colaborare Strategică",
      description: "Construiți parteneriate pe termen lung care beneficiază ambele organizații.",
      color: "bg-brand-blue",
      lightColor: "bg-brand-blue/10",
      textColor: "text-brand-blue"
    },
    {
      icon: Lightbulb,
      title: "Inovație Comună",
      description: "Lucrează cu noi la crearea de soluții inovatoare pentru educație și dezvoltare.",
      color: "bg-brand-purple",
      lightColor: "bg-brand-purple/10",
      textColor: "text-brand-purple"
    },
    {
      icon: Building2,
      title: "Scalare Globală",
      description: "Extinde programele tale la nivel internațional cu suportul nostru.",
      color: "bg-brand-orange",
      lightColor: "bg-brand-orange/10",
      textColor: "text-brand-orange"
    }
  ];

  const journey = [
    {
      step: 1,
      title: "Explorare",
      description: "Discutăm despre viziunea ta și cum putem lucra împreună.",
      icon: BookOpen
    },
    {
      step: 2,
      title: "Negociere",
      description: "Stabilim detaliile parteneriatului și condițiile colaborării.",
      icon: Handshake
    },
    {
      step: 3,
      title: "Implementare",
      description: "Lansăm programele și construim relația pe termen lung.",
      icon: CheckCircle2
    },
    {
      step: 4,
      title: "Creștere",
      description: "Extindem impactul împreună și creăm valoare pentru ambii parteneri.",
      icon: Send
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-green/20 via-brand-blue/10 to-brand-purple/15"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              to="/#get-involved"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-green transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi la Implică-te
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight">
                Devino <span className="text-brand-green">Partener</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Colaborează cu noi pentru a aduce programe de dezvoltare a abilităților sociale în comunitatea ta. Construim impactul împreună.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-brand-green to-brand-blue text-white hover:shadow-lg transition-all text-lg px-8"
                  asChild
                >
                  <a href="#cum-putem-colabora">
                    Cum Colaboram
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-brand-green text-brand-green hover:bg-brand-green/10 text-lg"
                  asChild
                >
                  <a href="#beneficii">
                    Află mai mult
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 lg:h-full min-h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-brand-green/30">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Parteneriate în acțiune"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
              >
                <div className="text-3xl font-bold text-brand-green">50+</div>
                <div className="text-sm text-muted-foreground">Parteneri Activi</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Why Partner Section */}
      <section id="beneficii" ref={whyRef} className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-green/15 text-brand-green text-sm font-semibold mb-4">
              De ce să colaborezi cu noi?
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Beneficiile <span className="text-brand-green">Partneriatelor</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Descoperă ce avantaje aduce o colaborare cu Today Social Skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 h-full border-2 border-border hover:border-brand-green/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${reason.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <reason.icon className={`w-8 h-8 ${reason.textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-green transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Button
              size="xl"
              className="bg-gradient-to-r from-brand-green to-brand-blue text-white hover:shadow-lg transition-all text-lg px-8"
              asChild
            >
              <a href="#cum-putem-colabora">
                Cum Colaboram
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Partnership Journey Section */}
      <section id="cum-putem-colabora" ref={journeyRef} className="py-24 bg-gradient-to-br from-brand-green/5 via-background to-brand-blue/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-green/15 text-brand-green text-sm font-semibold mb-4">
              Procesul colaborării
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Cum <span className="text-brand-green">Colaborăm?</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple transform -translate-y-1/2 -z-10" />

              {journey.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl p-8 text-center border-2 border-border hover:border-brand-green/50 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="flex-shrink-0"
                      >
                        <item.icon className="w-8 h-8 text-brand-green group-hover:text-brand-blue transition-colors" />
                      </motion.div>

                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-pink flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {item.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors flex-grow">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isJourneyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-12"
            >
              <Button
                size="xl"
                className="bg-gradient-to-r from-brand-green to-brand-blue text-white hover:shadow-lg transition-all text-lg px-8"
              >
                Contactează-ne
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
