import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Handshake, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const programs = [
  {
    icon: Sparkles,
    title: "Dezvoltare Personală",
    description: "Descoperă-ți potențialul prin activități interactive și mentorat personalizat. Construiește încrederea în tine și viața pe care ți-o dorești.",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    href: "/programe/skill-uri-sociale",
  },
  {
    icon: Handshake,
    title: "Mentorat pentru Tineri",
    description: "Găsește mentori care te înțeleg. Primești sfaturi practice și suport personalizat pentru a-ți atinge obiectivele și a crește profesional.",
    colorClass: "bg-brand-orange/10 text-brand-orange",
    href: "/programe/educatie-financiara",
  },
  {
    icon: TrendingUp,
    title: "Formare Continuă",
    description: "Program dedicat adulților care vor să-și dezvolte competențele profesionale. Învață abilități noi și rămâi relevant pe piața muncii în era digitală.",
    colorClass: "bg-brand-green/10 text-brand-green",
    href: "/programe/leadership",
  },
  {
    icon: Globe,
    title: "Proiecte Erasmus+",
    description: "Participă la schimburi internaționale și proiecte europene. Descoperă noi culturi, leagă conexiuni și explorează oportunități de creștere personală.",
    colorClass: "bg-brand-purple/10 text-brand-purple",
    href: "/programe/lucru-in-echipa",
  },
];

export function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const handleSectionInProgress = () => {
    toast({
      description: "Această secțiune este în lucru...",
    });
  };

  return (
    <section id="programs" className="py-24" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4"
          >
            Cu ce ne ocupăm?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            <span className="text-brand-blue">Programe</span> și{" "}
            <span className="text-brand-orange">Workshop-uri</span>
            <br />
            <span className="text-foreground">de Dezvoltare</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Abilități sociale și educație financiară prin programe practice și interactive.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/50 h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${program.colorClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {program.description}
                </p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary hover:bg-transparent justify-start"
                  onClick={handleSectionInProgress}
                >
                  Vezi mai mult
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="default" asChild>
            <Link to="/proiecte" onClick={() => window.scrollTo(0, 0)}>
              Vezi Proiecte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
