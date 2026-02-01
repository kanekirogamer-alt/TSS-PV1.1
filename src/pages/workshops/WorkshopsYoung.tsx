import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const workshopsYoung = [
  {
    id: "young-1",
    title: "Leadership și Comunicare",
    subtitle: "Dezvoltare Personală",
    description: "Workshop pe abilități de leadership, comunicare eficientă și luarea deciziilor în grup",
    image: "https://lh3.googleusercontent.com/d/1Vt-KbKXC1_16_-laEc-5fWMIVwHS9OYh=w1000"
  },
  {
    id: "young-2",
    title: "Orientare în Carieră",
    subtitle: "Dezvoltare Profesională",
    description: "Sesiuni de ghidare pentru explorarea opțiunilor de carieră și planificare profesională",
    image: "https://lh3.googleusercontent.com/d/1Vt-KbKXC1_16_-laEc-5fWMIVwHS9OYh=w1000"
  },
  {
    id: "young-3",
    title: "Entrepreneurship și Inovație",
    subtitle: "Iniţiatori de Afaceri",
    description: "Workshop pentru antreprenori care doresc să-și dezvolte ideile de business",
    image: "https://lh3.googleusercontent.com/d/1Vt-KbKXC1_16_-laEc-5fWMIVwHS9OYh=w1000"
  },
  {
    id: "young-4",
    title: "Educație Financiară",
    subtitle: "Gestiune Financiară",
    description: "Înțelegerea banilor, bugetare, economisire și investiții pentru tineri",
    image: "https://lh3.googleusercontent.com/d/1Vt-KbKXC1_16_-laEc-5fWMIVwHS9OYh=w1000"
  },
  {
    id: "young-5",
    title: "Competențe Digitale",
    subtitle: "Transformare Digitală",
    description: "Workshop-uri pe social media, marketing digital și competențe IT relevante",
    image: "https://lh3.googleusercontent.com/d/1Vt-KbKXC1_16_-laEc-5fWMIVwHS9OYh=w1000"
  },
  {
    id: "young-6",
    title: "Bine-Ființă și Sănătate Mintală",
    subtitle: "Îngrijire de Sine",
    description: "Sesiuni dedicate sănătății mintale, gestionării stresului și echilibrului vieții",
    image: "https://lh3.googleusercontent.com/d/1Vt-KbKXC1_16_-laEc-5fWMIVwHS9OYh=w1000"
  }
];

function WorkshopCard({ workshop, index }: {
  workshop: typeof workshopsYoung[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/workshop-uri/tineri/${workshop.id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="relative overflow-hidden rounded-2xl block h-64 md:h-72 cursor-pointer"
      >
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
          <div className="text-purple-200 text-xs md:text-sm font-medium mb-2">
            {workshop.subtitle}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
            {workshop.title}
          </h3>
          <p className="text-white/70 text-sm line-clamp-1 mb-3">
            {workshop.description}
          </p>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <span>Afla mai mult</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkshopsYoung() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-12 bg-gradient-to-br from-purple/10 via-background to-purple/5 overflow-hidden"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            <Link
              to="/workshop-uri"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi la Workshop-uri
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Workshop-uri pentru <span className="text-purple-600">Tineri</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Dezvoltare a potențialului personal și construirea viitorului profesional
            </p>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      </section>

      {/* Workshops Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopsYoung.map((workshop, index) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
