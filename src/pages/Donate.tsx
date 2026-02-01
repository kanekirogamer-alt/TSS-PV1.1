import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Heart, Users, TrendingUp, Zap, Gift, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Donate() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const impactRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isImpactInView = useInView(impactRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Heart,
      title: "Impact Direct",
      description: "Fiecare donație ajută tineri și adulți să-și dezvolte abilități și viitorul.",
      color: "bg-brand-pink",
      lightColor: "bg-brand-pink/10",
      textColor: "text-brand-pink"
    },
    {
      icon: Globe,
      title: "Schimbare Globală",
      description: "Programele noastre ajung la sute de tineri din diverse comunități.",
      color: "bg-brand-purple",
      lightColor: "bg-brand-purple/10",
      textColor: "text-brand-purple"
    },
    {
      icon: TrendingUp,
      title: "Transparență Totală",
      description: "Rapoarte regulate cu detalii despre cum sunt folosite donațiile.",
      color: "bg-brand-blue",
      lightColor: "bg-brand-blue/10",
      textColor: "text-brand-blue"
    },
    {
      icon: Users,
      title: "Comunitate",
      description: "Fii parte dintr-o comunitate de oameni care cred în schimbarea pozitivă.",
      color: "bg-brand-green",
      lightColor: "bg-brand-green/10",
      textColor: "text-brand-green"
    }
  ];

  const impactCards = [
    {
      icon: Gift,
      amount: "€50",
      title: "O sesiune de workshop",
      description: "Sprijină o sesiune completă de training pentru 20-30 tineri"
    },
    {
      icon: BarChart3,
      amount: "€150",
      title: "Program lunar",
      description: "Finanțează un program complet de educație financiară pentru o lună"
    },
    {
      icon: Globe,
      amount: "€500",
      title: "Proiect complet",
      description: "Ajută la realizarea unui proiect de schimb internațional pentru 5 tineri"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-pink/20 via-brand-purple/10 to-brand-orange/15"
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
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-pink transition-colors text-sm font-medium"
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
                Donează <span className="text-brand-pink">Cauzei</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sprijinul tău financiar ajută mii de tineri și adulți să-și dezvolte abilități sociale și educație financiară. Fă o diferență azi.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-brand-pink to-brand-purple text-white hover:shadow-lg transition-all text-lg px-8"
                  asChild
                >
                  <a href="#cum-poti-ajuta">
                    Cum Poti Ajuta
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/10 text-lg"
                  asChild
                >
                  <a href="#impact">
                    Vezi Impactul
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-brand-pink/30">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Impact de donații"
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
                <div className="text-3xl font-bold text-brand-pink">1000+</div>
                <div className="text-sm text-muted-foreground">Beneficiari ajutați</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Why Donate Section */}
      <section id="cum-poti-ajuta" ref={whyRef} className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-pink/15 text-brand-pink text-sm font-semibold mb-4">
              De ce să donezi?
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Beneficiile <span className="text-brand-pink">Donației Tale</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Contribuția ta are impact direct și măsurabil asupra programelor noastre.
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
                <div className="bg-card rounded-2xl p-8 h-full border-2 border-border hover:border-brand-pink/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${reason.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <reason.icon className={`w-8 h-8 ${reason.textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-pink transition-colors">
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
              className="bg-gradient-to-r from-brand-pink to-brand-purple text-white hover:shadow-lg transition-all text-lg px-8"
              asChild
            >
              <a href="#impact">
                Donează Acum
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" ref={impactRef} className="py-24 bg-gradient-to-br from-brand-pink/5 via-background to-brand-purple/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-purple/15 text-brand-purple text-sm font-semibold mb-4">
              Cum ajută donația
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Cum ajută <span className="text-brand-purple">Donația Ta?</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {impactCards.map((card, index) => (
                <motion.div
                  key={card.amount}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl p-8 text-center border-2 border-border hover:border-brand-purple/50 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-center mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="flex-shrink-0"
                      >
                        <card.icon className="w-8 h-8 text-brand-purple group-hover:text-brand-pink transition-colors" />
                      </motion.div>
                    </div>

                    <div className="text-3xl font-bold text-brand-purple group-hover:text-brand-pink transition-colors mb-3">
                      {card.amount}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-purple transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors flex-grow">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isImpactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-12"
            >
              <Button
                size="xl"
                className="bg-gradient-to-r from-brand-pink to-brand-purple text-white hover:shadow-lg transition-all text-lg px-8"
              >
                Donează Acum
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
