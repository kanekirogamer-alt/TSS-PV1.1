import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, FileText, Images, Share2, Clock, CheckCircle, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import cofundedByEu from "@/assets/cofundedByEu.png";

// Project data
const projectsData: Record<string, {
  title: string;
  projectId: string;
  description: string;
  fullDescription: string[];
  image: string;
  previewImages: string[];
  materials: { name: string; url: string }[];
  status: "ongoing" | "completed";
}> = {
  "project-1": {
    title: "E-Youth Work – Digitalize & Engage Youth",
    projectId: "2025-1-RO01-KA153-YOU-000301667",
    description: "Îmbunătățirea competențelor digitale ale lucrătorilor de tineret pentru a integra instrumente virtuale și metode nonformale inovatoare în activitățile cu tinerii.",
    fullDescription: [
      "\"E-Youth Work – Digitalize & Engage Youth\" este un curs de formare Erasmus+ (KA153) dedicat îmbunătățirii competențelor digitale ale lucrătorilor de tineret. Proiectul este implementat de organizația noastră, Today Social Skills (România), în parteneriat cu Promesas (Spania), Walbrzych Youth Association (Polonia), Pangea Youth Association (Turcia) și Bubburriga (Letonia). Mobilitatea principală s-a desfășurat în Craiova, România, în perioada 23–28 octombrie 2025, iar în prezent urmează etapa de diseminare.",
      "Scopul proiectului a fost dezvoltarea competențelor digitale relevante pentru lucrul cu tinerii, sprijinind 25 de lucrători de tineret din cele cinci organizații partenere să exploreze noi modalități de utilizare a instrumentelor virtuale și a metodelor nonformale online. Activitățile au vizat creșterea nivelului de alfabetizare digitală, aplicarea tehnicilor de gamificare și adaptarea metodelor de educație nonformală la mediul digital.",
      "Pe durata cursului, participanții au învățat să creeze și să testeze metode digitale inovatoare de lucru cu tinerii, să folosească platforme interactive precum Genially, Zoom, Google Forms și Canva, și să integreze instrumente virtuale în activitățile zilnice ale ONG-urilor lor. Ei au colaborat internațional, dezvoltând împreună metode digitale nonformale destinate implicării tinerilor din medii diverse.",
      "Rezultatele proiectului includ creșterea încrederii participanților în folosirea instrumentelor digitale, îmbunătățirea capacității organizațiilor de a lucra online și crearea unui cadru inovator pentru educația nonformală digitală. Urmează perioada de diseminare, care va include ateliere locale, activități de multiplicare și publicarea de materiale și resurse educaționale digitale, menite să valorifice rezultatele proiectului și să inspire alte organizații din rețeaua Erasmus+."
    ],
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc02707221f9c49859a2070e5da77a1b1%2F057b5df2338746e4b7e6c8329dc025e0?format=webp&width=800",
    previewImages: [
      "https://lh3.googleusercontent.com/d/1w1M3olLf6JFTyyagl6DQpcJKAXkPj_-A=w1000",
      "https://lh3.googleusercontent.com/d/1AwBiMjsRWtndV6HPnV-GlkqhTBbZsDDP=w1000",
      "https://lh3.googleusercontent.com/d/1H2w_1mN-XMyiesMnIGEx11G08U7dnpDp=w1000"
    ],
    materials: [],
    status: "ongoing"
  },
  "project-2": {
    title: "Shape the Future: Youth Financial Skills",
    projectId: "2024-3-RO01-KA153-YOU000279619",
    description: "Consolidarea competențelor financiare ale lucrătorilor de tineret pentru a sprijini educația financiară, responsabilitatea și incluziunea socială a tinerilor.",
    fullDescription: [
      "\"Shape the Future: Youth Financial Skills\" este un curs de formare Erasmus+ (KA153) pentru lucrători de tineret, implementat de organizația noastră, Today Social Skills (România), și Orenda Foundation (Bulgaria). Proiectul a inclus două mobilități internaționale: una în Varna, Bulgaria (18–24 iulie 2025) și alta în Craiova, România (1–8 septembrie 2025), și se află în prezent în etapa de diseminare a rezultatelor.",
      "Proiectul a fost conceput ca răspuns la nevoia comună a organizațiilor partenere de a dezvolta competențele financiare ale lucrătorilor de tineret, astfel încât aceștia să poată sprijini mai eficient tinerii din comunitățile lor în gestionarea resurselor financiare. Analizele locale din Craiova și Varna au arătat că tinerii, mai ales cei din medii vulnerabile, se confruntă cu dificultăți în planificarea bugetului personal, economisire și folosirea responsabilă a resurselor.",
      "Prin metode de educație non-formală: simulări financiare, ateliere interactive, jocuri de rol și exerciții de facilitare, cei 20 de lucrători de tineret implicați au dobândit abilități practice și teoretice esențiale pentru a face educația financiară accesibilă și atractivă. În plus, au dezvoltat competențe de motivare, comunicare, lucru în echipă, utilizare a limbii engleze și vorbire în public, consolidându-și rolul de formatori în comunitățile lor.",
      "În prezent, proiectul se află în faza de diseminare, prin organizarea de ateliere locale, activități de multiplicare, postări pe rețelele sociale și materiale vizuale, care promovează importanța educației financiare pentru tineri. Aceste acțiuni contribuie la extinderea impactului proiectului atât în România, cât și în Bulgaria, susținând obiectivul comun de incluziune socială prin educație financiară."
    ],
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc02707221f9c49859a2070e5da77a1b1%2Fc0af8de58cb4402f9fb3935cba659314?format=webp&width=800",
    previewImages: [
      "https://lh3.googleusercontent.com/d/1DWNdneSfcaYUXf8S_AJkDuWZp0YZNPIv=w1000",
      "https://lh3.googleusercontent.com/d/1loe4xhP-hhGXIM2bIG6GX6dUJ-aiy_Z6=w1000",
      "https://lh3.googleusercontent.com/d/1HlKiM9zbKi1hqJ-EUssYccl2iDaAUke0=w1000"
    ],
    materials: [],
    status: "ongoing"
  },
  "project-3": {
    title: "Inspire Youth: Leadership in Youth Work",
    projectId: "2024-1-RO01-KA153-YOU-000231210",
    description: "Dezvoltarea leadershipului în lucrul cu tinerii, comunicare eficientă, spirit de echipă și atitudine proactivă în activitățile de tineret.",
    fullDescription: [
      "\"Inspire Youth: Leadership in Youth Work\" a fost un curs de formare Erasmus+ (KA153) dedicat lucrătorilor de tineret, implementat în Craiova, România, de organizația noastră, Today Social Skills, în parteneriat cu Come Pensiamo (Italia), Pangea Youth Association (Turcia), Jong Noord (Țările de Jos) și CET Lituania. Proiectul s-a derulat pe o perioadă de 11 luni, iar mobilitatea principală a avut loc în Craiova, între 13–18 octombrie 2024.",
      "Scopul proiectului a fost dezvoltarea competențelor de leadership ale lucrătorilor de tineret, pentru a crește eficiența și impactul activităților desfășurate în lucrul cu tinerii. 25 de participanți din cele cinci țări au explorat, prin metode de educație nonformală, teme precum stiluri de leadership, comunicare eficientă, lucru în echipă, luarea deciziilor, facilitare și planificare strategică. În timpul cursului, au fost utilizate instrumente digitale precum Kahoot, Mentimeter și Canva, care au sprijinit reflecția și colaborarea.",
      "Impactul proiectului s-a reflectat în creșterea încrederii, a motivației și a atitudinii proactive a participanților, dar și în activitățile de diseminare derulate ulterior: publicarea de povești YouthPass și testimoniale pe site și pe rețelele sociale, organizarea atelierului public \"Târgul ONG-urilor\" în Craiova, precum și sesiuni de multiplicare în comunitățile partenerilor. Rezultatele au fost documentate și recunoscute prin certificările YouthPass, iar o broșură digitală cu experiențele și concluziile cursului este disponibilă pe site-ul Today Social Skills."
    ],
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc02707221f9c49859a2070e5da77a1b1%2Fdedc267d54454254834168425126cb30?format=webp&width=800",
    previewImages: [
      "https://lh3.googleusercontent.com/d/1JoChES_Ss0c--aJru0msyM9j45hzql5n=w1000",
      "https://lh3.googleusercontent.com/d/1TKexiLv9WHKsv7w1agNxZZQfUS-ngUP4=w1000",
      "https://lh3.googleusercontent.com/d/1oxS-vslFCFegOhz0L3RZxMCLJWyO6iL1=w1000"
    ],
    materials: [
      { name: "Comunicat de presă", url: "https://oltenasul.ro/2024/10/18/asociatia-today-social-skills-lanseaza-un-nou-proiect-erasmus-pentru-dezvoltarea-competentelor-de-leadership-in-randul-lucratorilor-de-tineret/" },
      { name: "EN Brochure", url: "https://drive.google.com/file/d/1TI6HSH-ysPEJ4oCZr6xbaH5RelVtBOBF/preview" }
    ],
    status: "completed"
  },
  "project-4": {
    title: "A Journey to Your Future Career",
    projectId: "2023-1-RO01-KA152-YOU-000145540",
    description: "Proiect axat pe descoperirea potențialului personal, dezvoltarea încrederii și identificarea direcției potrivite în carieră pentru tineri.",
    fullDescription: [
      "\"A Journey to Your Future Career\" a fost un schimb de tineri Erasmus+ (KA152) coordonat de Today Social Skills din România, în parteneriat cu Tou.Play (Italia), You Simply Can Foundation (Polonia) și Pangea Youth Association (Turcia). Proiectul s-a derulat între iulie și decembrie 2023, iar mobilitatea principală a avut loc în Craiova, România, în perioada 10–18 octombrie 2023.",
      "Inițiativa a reunit 28 de tineri din cele patru țări, care au participat la activități de educație nonformală dedicate autocunoașterii, orientării profesionale și dezvoltării competențelor pentru viitoarea carieră. Participanții au învățat cum să redacteze un CV, să se pregătească pentru un interviu, să își gestioneze emoțiile și să își crească încrederea în propriile abilități.",
      "Impactul proiectului a depășit grupul de participanți direcți: peste 200 de tineri și lucrători de tineret au fost implicați în activitățile de diseminare locală, regională și europeană. Proiectul a promovat educația nonformală, orientarea în carieră și cooperarea internațională, inspirând alte organizații să dezvolte inițiative similare pentru tineri."
    ],
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc02707221f9c49859a2070e5da77a1b1%2Fa069a5d8382a4f4c9699e6992592c95d?format=webp&width=800",
    previewImages: [
      "https://lh3.googleusercontent.com/d/1SGPhqZkRCczh9hLhvc8zRaR4GJV9LeTa=w1000",
      "https://lh3.googleusercontent.com/d/1KkuZYql60Jf3BgKrU1YyYxleau_X4iPn=w1000",
      "https://lh3.googleusercontent.com/d/1UZHL4ukd8aFuuttveGGDpwUVif9qq2NO=w1000"
    ],
    materials: [
      { name: "RO Broșură", url: "https://drive.google.com/file/d/1QNSz0JR-sQ43CRiDABY7ScDo0JsGgSbP/preview" },
      { name: "EN Brochure", url: "https://drive.google.com/file/d/1AUCdFj9GIACOphjeN548QU2vGseYHudU/preview" },
      { name: "Newsletter 1: CAREER ORIENTATION", url: "https://drive.google.com/file/d/1oBHZNJJmHJ4MgnAe9bHVAOq_EI6fL2QS/preview" },
      { name: "Newsletter 2: Professional Skills", url: "https://drive.google.com/file/d/1hGgXlT7FbixE_o6zMUplWUv6ho14mq4Q/preview" },
      { name: "Newsletter 3: Interviews and Motivation", url: "https://drive.google.com/file/d/1FaTSwoK8zE8AeRV2B5htYjIMgNhTqoI1/preview" }
    ],
    status: "completed"
  }
};

// Dissemination data
const disseminationData: Record<string, {
  title: string;
  photos: string[];
  videos: { thumbnail: string; url: string }[];
}> = {
  "project-1": {
    title: "E-Youth Work – Digitalize & Engage Youth",
    photos: Array(8).fill("/placeholder.svg"),
    videos: []
  },
  "project-2": {
    title: "Shape the Future: Youth Financial Skills",
    photos: [
      "https://lh3.googleusercontent.com/d/1UvQD6dsvi_Rbhmx7LYMhAqZd_mi0xoHe=w1000",
      "https://lh3.googleusercontent.com/d/1V1A8_uLA2aEd2wHnSHSS_8MHLcPk8XAJ=w1000",
      "https://lh3.googleusercontent.com/d/1utDPNuSICz1JRHGt9ov_uIQ0qanuDog8=w1000",
      "https://lh3.googleusercontent.com/d/1392QPfne98I53K6YVRKc_LmhYXYobnHX=w1000",
      "https://lh3.googleusercontent.com/d/1w0qeFv90viShRsVvpG3FLOZDjBME1XuI=w1000",
      "https://lh3.googleusercontent.com/d/1jv2TGr1AV-i_M0c06cdrj24-QtamYbbW=w1000",
      "https://lh3.googleusercontent.com/d/1-P4KoEFvg7kM_SR3KYT054WeUq4uH8Zf=w1000",
      "https://lh3.googleusercontent.com/d/1R2IJn4_GxaJTODd5pn0QSlS4UFxwZemw=w1000",
      "https://lh3.googleusercontent.com/d/1lwTgKmAJkbZpkv4ie_e8JkzJoegGqzPu=w1000",
      "https://lh3.googleusercontent.com/d/1viJZTS1s0IPlhltyt2K9VSJ99f2rRxcf=w1000",
      "https://lh3.googleusercontent.com/d/1QIOXl2_1K1BJgs11DPV5EdO57i9AZ4az=w1000",
      "https://lh3.googleusercontent.com/d/1FMfNy2arvea-NwAUTOpd5Dbm1eWT5bMx=w1000",
      "https://lh3.googleusercontent.com/d/1vJ_EffsQ05pTxPNNzQR5abjUB7YtQF8K=w1000",
      "https://lh3.googleusercontent.com/d/1rr-50eAsvwQ6IdwjkCrYhprPqI_3xlIT=w1000",
      "https://lh3.googleusercontent.com/d/1ILYO9cojoIsjjPIDYRQNkLltunpLO-8V=w1000",
      "https://lh3.googleusercontent.com/d/1kk_FuhxYr9vNa7B2_0NlA4cNWpvAMOm5=w1000",
      "https://lh3.googleusercontent.com/d/1Bb-S-8aXRVI-Hf1eEjceifuERtesbOGR=w1000",
      "https://lh3.googleusercontent.com/d/1edqJVQTtGusY8KbcqOmgeU8rNTVK130N=w1000",
      "https://lh3.googleusercontent.com/d/1mqsRyuNXPw8bs_fRQHWdBl0jh164rSZV=w1000",
      "https://lh3.googleusercontent.com/d/1GIEvFPiuZhKgeAmp-LF9rkQNvnBMBWhD=w1000"
    ],
    videos: []
  },
  "project-3": {
    title: "Inspire Youth: Leadership in Youth Work",
    photos: [
      "https://lh3.googleusercontent.com/d/14Xd2rC74BKAC9YwhJ-X3J6ksOc6Pe8FQ=w1000",
      "https://lh3.googleusercontent.com/d/1WpzGty8VR9r1WdUpPgu-kRWKTeBTU2h9=w1000",
      "https://lh3.googleusercontent.com/d/1LECgYWLQ877HDZyGWmVml5aW32_PNYMf=w1000",
      "https://lh3.googleusercontent.com/d/1Pkpe62DOdTNQk6UjHJtLX_sdu3D5e9jP=w1000",
      "https://lh3.googleusercontent.com/d/1oPItyhEWX_zUluVJT7YoCqD8T7EvunrB=w1000",
      "https://lh3.googleusercontent.com/d/128WUc3s1Rux05-Pr0fGMuA75RLZyXp59=w1000",
      "https://lh3.googleusercontent.com/d/1vMtvY6nTmusB2A9Sno-ye9j0mF4fU6qD=w1000",
      "https://lh3.googleusercontent.com/d/1XnFoX6qBAYY4VhonYDhCvtNUeZgyNq1s=w1000",
      "https://lh3.googleusercontent.com/d/1v13fe5AJHsMiRohXIsYRsb8pPS0Y1QRt=w1000",
      "https://lh3.googleusercontent.com/d/1NrCh5PnNePB7Zs5HpPLIplzOfYN6O_2o=w1000",
      "https://lh3.googleusercontent.com/d/1ukieRdR9HBB_qaWVWCU40-IMaUFY5zW5=w1000",
      "https://lh3.googleusercontent.com/d/1-mYVsYUImtDvbAByGvfnY7YdS5QUeTK-=w1000",
      "https://lh3.googleusercontent.com/d/1wZ__22RX1rvbOpKJ1_mLkJXNI1r78iH9=w1000",
      "https://lh3.googleusercontent.com/d/1IMzY3VjOW2BtU_DZFx0Esk-pq63MZ6qx=w1000",
      "https://lh3.googleusercontent.com/d/19PQhAdoZ8ga2NXHHUpKjo73QijwHUpVn=w1000"
    ],
    videos: []
  },
  "project-4": {
    title: "A Journey to Your Future Career",
    photos: Array(5).fill("/placeholder.svg"),
    videos: []
  }
};

function StatusBadge({ status }: { status: "ongoing" | "completed" }) {
  if (status === "ongoing") {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium">
        <Clock className="w-4 h-4" />
        <span>În Desfășurare</span>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium">
      <CheckCircle className="w-4 h-4" />
      <span>Finalizat</span>
    </div>
  );
}

export default function ErasmusProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const project = projectId ? projectsData[projectId] : null;
  const dissemination = projectId ? disseminationData[projectId] : null;

  const handleCollapse = () => {
    setIsExpanded(false);
    // Scroll to the description after state updates
    setTimeout(() => {
      descriptionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  if (!project) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Proiect negăsit</h1>
          <Link to="/erasmus" className="text-brand-blue hover:underline">
            Înapoi la proiecte ERASMUS+
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-12 bg-gradient-to-br from-brand-blue/10 via-background to-brand-indigo/5 overflow-hidden"
      >
        <div className="container relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            <Link
              to="/erasmus"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi la proiecte ERASMUS+
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium">
                <span>ID: {project.projectId}</span>
              </div>
              <StatusBadge status={project.status} />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl" />
      </section>

      {/* Hero Image Section */}
      <section className="bg-background">
        <div className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 lg:h-[500px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                ref={descriptionRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Despre Proiect</h2>
                <div className="space-y-4">
                  {/* Mobile: Show first paragraph with expand option */}
                  <div className="md:hidden">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription[0]}
                    </p>
                    {!isExpanded && project.fullDescription.length > 1 && (
                      <button
                        onClick={() => setIsExpanded(true)}
                        className="inline-flex items-center gap-1 mt-3 text-brand-blue font-medium hover:underline"
                      >
                        Vezi mai mult
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    )}
                    {isExpanded && (
                      <div className="space-y-4 mt-4">
                        {project.fullDescription.slice(1).map((paragraph, index) => (
                          <p key={index + 1} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                        <button
                          onClick={handleCollapse}
                          className="inline-flex items-center gap-1 mt-3 text-brand-blue font-medium hover:underline"
                        >
                          Vezi mai puțin
                          <ChevronDown className="w-4 h-4 rotate-180" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Desktop: Show all paragraphs */}
                  <div className="hidden md:block space-y-4">
                    {project.fullDescription.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Photo Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Images className="w-6 h-6 text-brand-blue" />
                    Foto-Video din activitate
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.previewImages.slice(0, 3).map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="group aspect-square rounded-xl overflow-hidden bg-secondary cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`Preview ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </motion.div>
                  ))}
                </div>

                <Link
                  to={`/erasmus/${projectId}/galerie`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Button variant="outline" className="gap-2">
                    Vezi mai mult
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>

              {/* Dissemination Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Share2 className="w-6 h-6 text-brand-green" />
                    Diseminare
                  </h2>
                </div>

                {dissemination && dissemination.photos.length > 0 && !dissemination.photos[0].includes("placeholder") ? (
                  <>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {dissemination.photos.slice(0, 3).map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="group aspect-square rounded-xl overflow-hidden bg-secondary cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} alt={`Dissemination ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      to={`/erasmus/${projectId}/diseminare`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <Button variant="outline" className="gap-2">
                        Vezi mai mult
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </>
                ) : (
                  <div className="bg-brand-green/5 rounded-xl p-8 border border-brand-green/20 text-center">
                    <p className="text-muted-foreground text-lg">Diseminarea va fi adăugată în curând...</p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* EU Funding Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-brand-blue/5 rounded-2xl p-6 border border-brand-blue/20"
              >
                <img
                  src={cofundedByEu}
                  alt="Cofinanțat de Uniunea Europeană"
                  className="h-10 object-contain mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Proiect finanțat de Uniunea Europeană prin programul ERASMUS+
                </p>
              </motion.div>

              {/* Materials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-orange" />
                  Materiale
                </h3>

                {project.materials.length > 0 ? (
                  <ul className="space-y-2">
                    {project.materials.map((material, i) => (
                      <li key={i}>
                        <a
                          href={material.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-blue hover:text-brand-blue/80 font-medium text-sm block py-1 transition-colors"
                        >
                          {material.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    Materialele vor fi adăugate în curând.
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
