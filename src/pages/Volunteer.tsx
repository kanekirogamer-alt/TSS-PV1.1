import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Heart, Users, Zap, Globe, TrendingUp, Sparkles, CheckCircle2, Send, Play, BookOpen, ClipboardList, MessageCircle, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Volunteer() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const journeyRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isJourneyInView = useInView(journeyRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: TrendingUp,
      title: "Dezvoltare Personală",
      description: "Dobândești competențe noi, crești profesional și descoperi-ți potențialul adevărat.",
      color: "bg-brand-blue",
      lightColor: "bg-brand-blue/10",
      textColor: "text-brand-blue"
    },
    {
      icon: Users,
      title: "Comunitate Vibrantă",
      description: "Integrează-te într-o echipă diversă și pasionată, unde fiecare membru contează.",
      color: "bg-brand-purple",
      lightColor: "bg-brand-purple/10",
      textColor: "text-brand-purple"
    },
    {
      icon: Globe,
      title: "Impact Global",
      description: "Contribuie la proiecte internaționale și conectează-te cu oameni din toată Europa.",
      color: "bg-brand-green",
      lightColor: "bg-brand-green/10",
      textColor: "text-brand-green"
    },
    {
      icon: Heart,
      title: "Schimbă Viețile",
      description: "Fă diferența în viața tinerilor și adulților prin educație și mentorat.",
      color: "bg-brand-orange",
      lightColor: "bg-brand-orange/10",
      textColor: "text-brand-orange"
    }
  ];

  const journey = [
    {
      step: 1,
      title: "Completează Formularul",
      description: "Spune-ne despre tine, interesele tale și ce tip de voluntariat te inspiră.",
      icon: ClipboardList
    },
    {
      step: 2,
      title: "Contact & Discuție",
      description: "Echipa noastră va lua legătura cu tine pentru a discuta oportunități potrivite.",
      icon: MessageCircle
    },
    {
      step: 3,
      title: "Onboarding Personalizat",
      description: "Te pregătim și te integrăm în echipa, cu suport și mentoring complet.",
      icon: Briefcase
    },
    {
      step: 4,
      title: "Începe Aventura",
      description: "Alătură-te proiectelor și începe să faci diferență în comunitate.",
      icon: Rocket
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-blue/20 via-brand-purple/10 to-brand-green/15"
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
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-blue transition-colors text-sm font-medium"
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
                Devino <span className="text-brand-blue">Voluntar</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Alătură-te unei comunități care transformă viețile prin educație, mentorat și conexiuni semnificative. Fii catalizatorul schimbării.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:shadow-lg transition-all text-lg px-8"
                  asChild
                >
                  <a href="#cum-te-alaturi">
                    Înscrie-te Acum
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/10 text-lg"
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-brand-blue/30">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPIqR2UdHXcW8DKeP7zIwO6b58B9tUQ9MOBlcMG-jfvm2Nu047avU2twIJyLgmdQrH31vjSMkiffpm2xFhUfc1AILZJWTC5GNc-IjEXzdb25x3DQiI5"
                  alt="Voluntari în acțiune"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Why Volunteer Section */}
      <section id="beneficii" ref={whyRef} className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-blue/15 text-brand-blue text-sm font-semibold mb-4">
              De ce să te alături?
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Beneficiile <span className="text-brand-blue">Voluntariatului</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Fiecare voluntar spune o poveste de transformare. Iată ce te așteaptă.
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
                <div className="bg-card rounded-2xl p-8 h-full border-2 border-border hover:border-brand-blue/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${reason.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <reason.icon className={`w-8 h-8 ${reason.textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">
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
              className="bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:shadow-lg transition-all text-lg px-8"
              asChild
            >
              <a href="#cum-te-alaturi">
                Înscrie-te Acum
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Journey Section */}
      <section id="cum-te-alaturi" ref={journeyRef} className="py-24 bg-gradient-to-br from-brand-purple/5 via-background to-brand-blue/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-purple/15 text-brand-purple text-sm font-semibold mb-4">
              Procesul simplu
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Cum <span className="text-brand-purple">Te Alături?</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-green transform -translate-y-1/2 -z-10" />

              {journey.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl p-8 text-center border-2 border-border hover:border-brand-purple/50 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="flex-shrink-0"
                      >
                        <item.icon className="w-8 h-8 text-brand-purple group-hover:text-brand-blue transition-colors" />
                      </motion.div>

                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-pink flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {item.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">
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
                className="bg-gradient-to-r from-brand-purple to-brand-green text-white hover:shadow-lg transition-all text-lg px-8"
                asChild
              >
                <a href="https://form.typeform.com/to/O9nwrwD1" target="_blank" rel="noopener noreferrer">
                  Începe Acum
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
