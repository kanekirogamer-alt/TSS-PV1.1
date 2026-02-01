import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Lightbulb, Building2, Heart, ArrowRight } from "lucide-react";

const targetGroups = [
  {
    icon: GraduationCap,
    title: "Tineri și Studenți",
    subtitle: "Generația viitorului",
    description: "Oportunități de dezvoltare prin programe interactive, schimburi internaționale și mentorat. Construiește-ți viitorul profesional și personal cu ajutorul experților.",
    iconBgClass: "bg-brand-blue/10 text-brand-blue",
    borderClass: "border-brand-blue/20 hover:border-brand-blue/50",
    badgeClass: "bg-brand-blue/10 text-brand-blue",
    subtitleClass: "text-brand-blue",
    stats: "1000+ beneficiari",
  },
  {
    icon: Lightbulb,
    title: "Educatori și Formatori",
    subtitle: "Profesioniști ai educației",
    description: "Resurse, cursuri de perfecționare și o comunitate de profesioniști din domeniu. Transformă-ți metodele de predare și inspiră următoarea generație.",
    iconBgClass: "bg-brand-green/10 text-brand-green",
    borderClass: "border-brand-green/20 hover:border-brand-green/50",
    badgeClass: "bg-brand-green/10 text-brand-green",
    subtitleClass: "text-brand-green",
    stats: "10+ formatori certificați",
  },
  {
    icon: Building2,
    title: "Organizații și Companii",
    subtitle: "Parteneri ai schimbării",
    description: "Soluții personalizate de training, programe CSR și inițiative de impact social. Investiți în viitorul oamenilor și în comunitatea voastră.",
    iconBgClass: "bg-brand-orange/10 text-brand-orange",
    borderClass: "border-brand-orange/20 hover:border-brand-orange/50",
    badgeClass: "bg-brand-orange/10 text-brand-orange",
    subtitleClass: "text-brand-orange",
    stats: "25+ parteneri activi",
  },
  {
    icon: Heart,
    title: "Comunități Locale",
    subtitle: "Motorul schimbării locale",
    description: "Proiecte de voluntariat, evenimente comunitare și inițiative de dezvoltare locală. Fii parte din transformarea pozitivă a comunității tale.",
    iconBgClass: "bg-brand-purple/10 text-brand-purple",
    borderClass: "border-brand-purple/20 hover:border-brand-purple/50",
    badgeClass: "bg-brand-purple/10 text-brand-purple",
    subtitleClass: "text-brand-purple",
    stats: "Prezențe în 10+ comunități",
  },
];

export function TargetGroups() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="target-groups" className="py-24 bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4"
          >
            Pentru cine?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Programele noastre sunt pentru
            <br />
            <span className="text-brand-purple">oameni care vor să se dezvolte</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Indiferent de vârstă sau domeniu, avem ceva special pentru tine
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {targetGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className={`bg-card rounded-3xl p-8 border-2 ${group.borderClass} transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}>
                {/* Icon and accent */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${group.iconBgClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <group.icon className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-semibold ${group.badgeClass} px-3 py-1 rounded-full whitespace-nowrap`}>
                    {group.stats}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className={`text-sm font-semibold ${group.subtitleClass} mb-1 uppercase tracking-wider`}>
                    {group.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {group.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {group.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
