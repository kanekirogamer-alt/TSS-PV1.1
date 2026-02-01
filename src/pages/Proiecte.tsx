import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Globe, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import erasmusImg from "@/assets/erasmus.jpg";
import workshopImg from "@/assets/workshop.jpeg";
import parteneriateImg from "@/assets/parteneriate.jpg";

const projects = [
  {
    id: "erasmus",
    icon: Globe,
    title: "ERASMUS+",
    subtitle: "Mobilități Internaționale",
    description: "Programe de mobilitate europeană pentru educație.",
    fullDescription: "Proiecte de mobilitate și schimburi internaționale pentru tineri și adulți, finanțate de Uniunea Europeană prin programul Erasmus+. Oferim oportunități de dezvoltare personală și profesională în diverse țări europene.",
    bgColorClass: "bg-brand-blue",
    features: [
      "Schimburi de tineri în diverse țări europene",
      "Training-uri internaționale pentru facilitatori",
      "Proiecte de voluntariat european",
      "Parteneriate strategice pentru educație"
    ],
    image: erasmusImg
  },
  {
    id: "workshops",
    icon: Users,
    title: "Workshop-uri",
    subtitle: "Sesiuni Interactive",
    description: "Sesiuni interactive de învățare practică și dezvoltare personală.",
    fullDescription: "Workshop-uri practice și interactive pe teme precum comunicare, leadership, educație financiară și dezvoltare personală. Fiecare sesiune este adaptată nevoilor participanților.",
    bgColorClass: "bg-brand-orange",
    features: [
      "Workshop-uri de comunicare eficientă",
      "Sesiuni de educație financiară",
      "Training-uri de leadership",
      "Ateliere de dezvoltare personală"
    ],
    image: workshopImg
  },
  {
    id: "parteneriate",
    icon: Handshake,
    title: "Parteneriate",
    subtitle: "Colaborări Strategice",
    description: "Colaborări strategice pentru un impact pozitiv în comunitate.",
    fullDescription: "Colaborări cu organizații, instituții și companii pentru a aduce valoare comunităților și a crea oportunități de dezvoltare durabilă pentru tineri și adulți.",
    bgColorClass: "bg-brand-green",
    features: [
      "Parteneriate cu instituții de învățământ",
      "Colaborări cu ONG-uri naționale și internaționale",
      "Proiecte comune cu companii private",
      "Rețele de organizații pentru tineret"
    ],
    image: parteneriateImg
  }
];

function ProjectCard({ project, index, onSectionInProgress }: {
  project: typeof projects[0];
  index: number;
  onSectionInProgress: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // ERASMUS+ and Workshop projects link to dedicated pages
  if (project.id === "erasmus") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        <Link
          to="/erasmus"
          onClick={() => window.scrollTo(0, 0)}
          className="group relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer block"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white transition-transform duration-300 group-hover:-translate-y-1">
              {project.title}
            </h3>

            <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
              <span className="text-sm font-medium">Descoperă mai mult</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
        </Link>
      </motion.div>
    );
  }

  if (project.id === "workshops") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        <Link
          to="/workshop-uri"
          onClick={() => window.scrollTo(0, 0)}
          className="group relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer block"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white transition-transform duration-300 group-hover:-translate-y-1">
              {project.title}
            </h3>

            <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
              <span className="text-sm font-medium">Descoperă mai mult</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
      onClick={onSectionInProgress}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white transition-transform duration-300 group-hover:-translate-y-1">
          {project.title}
        </h3>
        
        <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
          <span className="text-sm font-medium">Descoperă mai mult</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
    </motion.div>
  );
}


export default function Proiecte() {
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
              <span className="text-brand-blue">Proiectele</span>{" "}
              Noastre
            </h1>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </section>

      {/* Projects Cards Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
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
