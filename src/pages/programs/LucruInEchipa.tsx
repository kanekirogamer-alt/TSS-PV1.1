import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Check, MessageCircle, Target, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const benefits = [
  "Colaborare eficientă în echipe diverse",
  "Comunicare clară și constructivă",
  "Roluri și responsabilități în echipă",
  "Gestionarea dinamicii de grup",
  "Feedback constructiv și deschis",
  "Rezolvarea problemelor în grup",
];

const modules = [
  {
    title: "Dinamica Echipei",
    description: "Înțelegerea fazelor de dezvoltare a echipei și cum să le navighezi.",
    icon: Users,
  },
  {
    title: "Comunicare în Echipă",
    description: "Tehnici pentru comunicare clară, feedback constructiv și ascultare activă.",
    icon: MessageCircle,
  },
  {
    title: "Obiective Comune",
    description: "Cum să stabilești și să atingi obiective de echipă eficient.",
    icon: Target,
  },
  {
    title: "Colaborare",
    description: "Instrumente și metode pentru colaborare productivă în diverse contexte.",
    icon: Handshake,
  },
];

const LucruInEchipa = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const modulesRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isModulesInView = useInView(modulesRef, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-28 pb-16 bg-gradient-to-br from-brand-purple/10 via-background to-brand-purple/5 overflow-hidden"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-brand-purple/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-brand-purple" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="text-brand-purple">Lucru</span> în Echipă
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Învață să lucrezi bine în echipă, să comunici clar și să colaborezi eficient pentru rezultate remarcabile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
                De ce contează?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Împreună suntem mai <span className="text-brand-purple">puternici</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                În era digitală, munca în echipă este mai importantă ca niciodată. Proiectele complexe necesită colaborare între persoane cu abilități diverse, iar succesul depinde de capacitatea de a lucra eficient împreună.
              </p>
              <p className="text-muted-foreground mb-8">
                Programul nostru te învață nu doar cum să fii un membru bun de echipă, ci și cum să contribui la crearea unei culturi de colaborare pozitive în orice grup din care faci parte.
              </p>
              <Button asChild>
                <Link to="/implica-te">
                  Înscrie-te acum
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 border border-border/50"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Ce vei învăța:</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section ref={modulesRef} className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isModulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-4">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-brand-purple">Modulele</span> programului
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isModulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{module.title}</h3>
                <p className="text-muted-foreground">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LucruInEchipa;
