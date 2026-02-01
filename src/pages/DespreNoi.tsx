import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Heart, Users, Target, Award, Calendar, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Pasiune",
    description: "Suntem dedicați misiunii noastre de a transforma comunități prin educație.",
    colorClass: "bg-brand-pink/10 text-brand-pink",
  },
  {
    icon: Users,
    title: "Comunitate",
    description: "Credem în puterea colaborării și a sprijinului reciproc.",
    colorClass: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Ne concentrăm pe rezultate măsurabile și schimbări reale.",
    colorClass: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: Award,
    title: "Excelență",
    description: "Oferim programe de cea mai înaltă calitate pentru dezvoltare personală.",
    colorClass: "bg-brand-green/10 text-brand-green",
  },
];

const milestones = [
  { year: "2022", title: "Înființare", description: "Am pornit cu o viziune clară: să ajutăm tinerii să-și dezvolte abilitățile sociale." },
  { year: "2023", title: "Expansiune", description: "Am organizat peste 200 de workshop-uri și am ajuns la 30+ comunități." },
  { year: "2024", title: "Parteneriate", description: "Am dezvoltat parteneriate cu organizații internaționale și instituții educaționale." },
  { year: "2025", title: "Creștere", description: "Continuăm să creștem și să aducem impactul nostru în mai multe comunități." },
];

const DespreNoi = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);
  const milestonesRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isMilestonesInView = useInView(milestonesRef, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="text-brand-blue">Despre</span>{" "}
              Noi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Suntem o echipă pasionată dedicată dezvoltării abilităților sociale și educației financiare pentru tineri și adulți.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
                Povestea Noastră
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Din <span className="text-brand-orange">2022</span>, construim viitorul împreună
              </h2>
              <p className="text-muted-foreground mb-4">
                Asociația Today Social Skills a fost fondată cu o misiune clară: să ajutăm tinerii și adulții să-și dezvolte abilitățile sociale esențiale pentru succesul personal și profesional.
              </p>
              <p className="text-muted-foreground mb-4">
                Credem că educația non-formală poate transforma vieți și comunități. Prin workshop-uri interactive, programe de mentorat și evenimente comunitare, oferim oportunități de învățare care fac diferența.
              </p>
              <p className="text-muted-foreground">
                Echipa noastră este formată din profesioniști dedicați, cu experiență în domenii precum psihologie, educație, finanțe și dezvoltare personală.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
                <div className="text-4xl font-bold text-brand-blue mb-2">3+</div>
                <div className="text-muted-foreground">Ani de activitate</div>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
                <div className="text-4xl font-bold text-brand-orange mb-2">500+</div>
                <div className="text-muted-foreground">Workshop-uri</div>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
                <div className="text-4xl font-bold text-brand-green mb-2">50+</div>
                <div className="text-muted-foreground">Comunități</div>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
                <div className="text-4xl font-bold text-brand-purple mb-2">1000+</div>
                <div className="text-muted-foreground">Participanți</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
              Valorile Noastre
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ce ne <span className="text-brand-blue">ghidează</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${value.colorClass} flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section ref={milestonesRef} className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMilestonesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-4">
              Parcursul Nostru
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-brand-purple">Momentele</span> importante
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isMilestonesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-primary-foreground font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-card rounded-2xl p-6 border border-border/50">
                  <div className="text-brand-blue font-bold mb-1">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DespreNoi;
