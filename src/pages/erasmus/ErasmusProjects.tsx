import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, MapPin, Clock, CheckCircle, Search, Filter, ChevronDown, ArrowUp, ArrowDown } from "lucide-react";
import cofundedByEu from "@/assets/cofundedByEu.png";

// Project data
const erasmusProjects = [
  {
    id: "project-1",
    title: "E-Youth Work – Digitalize & Engage Youth",
    projectId: "2025-1-RO01-KA153-YOU-000301667",
    shortDescription: "Îmbunătățirea competențelor digitale ale lucrătorilor de tineret pentru a integra instrumente virtuale și metode nonformale inovatoare în activitățile cu tinerii.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2c59a37b2c4c42f2966b42579ff8794f%2Fe9127ac2809d4edcac694ef57282e8ee?format=webp&width=800",
    location: "Craiova, România",
    date: "23-28 Octombrie 2025",
    status: "ongoing" as const
  },
  {
    id: "project-2",
    title: "Shape the Future: Youth Financial Skills",
    projectId: "2024-3-RO01-KA153-YOU000279619",
    shortDescription: "Consolidarea competențelor financiare ale lucrătorilor de tineret pentru a sprijini educația financiară, responsabilitatea și incluziunea socială a tinerilor.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2c59a37b2c4c42f2966b42579ff8794f%2Fff16d20052f7432ab936063d30684150?format=webp&width=800",
    location: "Craiova, România",
    date: "1-8 Septembrie 2025",
    status: "ongoing" as const
  },
  {
    id: "project-3",
    title: "Inspire Youth: Leadership in Youth Work",
    projectId: "2024-1-RO01-KA153-YOU-000231210",
    shortDescription: "Dezvoltarea leadershipului în lucrul cu tinerii, comunicare eficientă, spirit de echipă și atitudine proactivă în activitățile de tineret.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2c59a37b2c4c42f2966b42579ff8794f%2F5314f078f5104ea3971f29c5fc63267c?format=webp&width=800",
    location: "Craiova, România",
    date: "13-18 Octombrie 2024",
    status: "completed" as const
  },
  {
    id: "project-4",
    title: "A Journey to Your Future Career",
    projectId: "2023-1-RO01-KA152-YOU-000145540",
    shortDescription: "Proiect axat pe descoperirea potențialului personal, dezvoltarea încrederii și identificarea direcției potrivite în carieră pentru tineri.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2c59a37b2c4c42f2966b42579ff8794f%2F4420c056f5e34173b6ee5ad282955d1c?format=webp&width=800",
    location: "Craiova, România",
    date: "10-18 Octombrie 2023",
    status: "completed" as const
  }
];


function ProjectCard({ project, index }: { project: typeof erasmusProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        to={`/erasmus/${project.id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">
            {project.title}
          </h3>

          {/* Project ID and Status */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <span className="text-xs font-medium text-brand-blue">{project.projectId}</span>
            </div>
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${project.status === "completed"
                ? "bg-brand-green/10 border border-brand-green/20"
                : "bg-brand-orange/10 border border-brand-orange/20"
              }`}>
              {project.status === "completed" ? (
                <>
                  <CheckCircle className="w-3 h-3 text-brand-green" />
                  <span className="text-xs font-medium text-brand-green">Finalizat</span>
                </>
              ) : (
                <>
                  <Clock className="w-3 h-3 text-brand-orange" />
                  <span className="text-xs font-medium text-brand-orange">În Desfășurare</span>
                </>
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.date}
              </span>
            </div>

            <div className="flex items-center gap-1 text-brand-blue text-sm font-medium group-hover:gap-2 transition-all">
              <span>Vezi detalii</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ErasmusProjects() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "ongoing" | "completed">("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [showFilters, setShowFilters] = useState(false);

  const parseDate = (dateStr: string): Date => {
    const parts = dateStr.split(" ");
    const dayRange = parts[0].split("-");
    const startDay = parseInt(dayRange[0]);
    const monthStr = parts[1];
    const year = parseInt(parts[2]);

    const months: Record<string, number> = {
      "Ianuarie": 0, "Februarie": 1, "Martie": 2, "Aprilie": 3,
      "Mai": 4, "Iunie": 5, "Iulie": 6, "August": 7,
      "Septembrie": 8, "Octombrie": 9, "Noiembrie": 10, "Decembrie": 11
    };

    return new Date(year, months[monthStr] || 0, startDay);
  };

  const isDateInProjectRange = (projectDate: string, startDate: Date, endDate: Date): boolean => {
    const projectDate_parsed = parseDate(projectDate);
    return projectDate_parsed >= startDate && projectDate_parsed <= endDate;
  };

  const filteredProjects = useMemo(() => {
    let filtered = erasmusProjects.filter(project => {
      const matchesSearch =
        (project.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (project.projectId?.toLowerCase() || "").includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      if (sortOrder === "newest") {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });

    return filtered;
  }, [searchQuery, statusFilter, sortOrder]);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-12 bg-gradient-to-br from-brand-blue/10 via-background to-brand-indigo/5 overflow-hidden"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="mb-6 flex justify-center">
              <img
                src={cofundedByEu}
                alt="Cofinanțat de Uniunea Europeană"
                className="h-16 md:h-20 object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Proiecte <span className="text-brand-blue">ERASMUS+</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proiecte de mobilitate și schimburi internaționale pentru tineri și adulți,
              finanțate de Uniunea Europeană prin programul Erasmus+.
            </p>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl" />
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cauta după numele proiectului sau ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:border-brand-blue focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Button */}
            <div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl hover:border-brand-blue transition-colors text-foreground font-medium"
              >
                <Filter className="w-4 h-4" />
                Filtre
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Expandable Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-card rounded-xl border border-border/50">
                    {/* Status Filter */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">Status</label>
                      <div className="space-y-2">
                        {[
                          { value: "all", label: "Toate" },
                          { value: "ongoing", label: "În Desfășurare" },
                          { value: "completed", label: "Finalizat" }
                        ].map(option => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="status"
                              value={option.value}
                              checked={statusFilter === option.value}
                              onChange={(e) => setStatusFilter(e.target.value as "all" | "ongoing" | "completed")}
                              className="w-4 h-4"
                            />
                            <span className="text-sm text-muted-foreground">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Sort Order Filter */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">Sortare</label>
                      <div className="space-y-2">
                        {[
                          { value: "newest", label: "Cel mai nou mai întâi", icon: ArrowDown },
                          { value: "oldest", label: "Cel mai vechi mai întâi", icon: ArrowUp }
                        ].map(option => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="sort"
                              value={option.value}
                              checked={sortOrder === option.value}
                              onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                              className="w-4 h-4"
                            />
                            <span className="text-sm text-muted-foreground flex items-center gap-2">
                              <option.icon className="w-4 h-4" />
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-foreground mb-2">Niciun rezultat găsit</h3>
              <p className="text-muted-foreground">
                Încearcă o altă căutare sau schimbă filtrele
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
