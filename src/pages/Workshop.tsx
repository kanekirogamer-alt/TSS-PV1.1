import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const workshops = [
  {
    id: "copii",
    title: "Copii",
    description: "Explorare, creație și învățare prin aventuri interactive și jocuri.",
    image: "https://lh3.googleusercontent.com/d/10aMyH_H-4qZxzlfsckb-XhjVQHxfVV6T=w1000"
  },
  {
    id: "tineri",
    title: "Tineri",
    description: "Dezvoltare a potențialului personal și construirea viitorului.",
    image: "https://lh3.googleusercontent.com/d/1Vt-KbKXC1_16_-laEc-5fWMIVwHS9OYh=w1000"
  },
  {
    id: "adulti",
    title: "Adulți",
    description: "Aprofundare profesională și dobândire de noi competențe.",
    image: "https://lh3.googleusercontent.com/d/1GjDcVZRplTcW45HXVzx0lai2ugT6invs=w1000"
  }
];

function WorkshopCard({ workshop, index, onSectionInProgress }: {
  workshop: typeof workshops[0];
  index: number;
  onSectionInProgress: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <button
        onClick={onSectionInProgress}
        className="group relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer block w-full text-left"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={workshop.image}
            alt={workshop.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white transition-transform duration-300 group-hover:-translate-y-1">
            {workshop.title}
          </h3>

          <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
            {workshop.description}
          </p>

          <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
            <span className="text-sm font-medium">Descoperă mai mult</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
      </button>
    </motion.div>
  );
}

export default function Workshop() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { toast } = useToast();

  const handleSectionInProgress = () => {
    toast({
      description: "Această secțiune este în lucru...",
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-28 pb-6 md:pb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              <span className="text-brand-orange">Workshop-urile</span>&nbsp;
              <br />
              Noastre
            </h1>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      </section>

      {/* Workshop Cards Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {workshops.map((workshop, index) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                index={index}
                onSectionInProgress={handleSectionInProgress}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
