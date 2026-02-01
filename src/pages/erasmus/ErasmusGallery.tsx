import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, X, Play, Image as ImageIcon, Video } from "lucide-react";

// Placeholder gallery data
const galleryData: Record<string, {
  title: string;
  photos: string[];
  videos: { thumbnail: string; url: string }[];
}> = {
  "project-1": {
    title: "E-Youth Work – Digitalize & Engage Youth",
    photos: [
      "https://lh3.googleusercontent.com/d/1w1M3olLf6JFTyyagl6DQpcJKAXkPj_-A=w1000",
      "https://lh3.googleusercontent.com/d/1AwBiMjsRWtndV6HPnV-GlkqhTBbZsDDP=w1000",
      "https://lh3.googleusercontent.com/d/1H2w_1mN-XMyiesMnIGEx11G08U7dnpDp=w1000",
      "https://lh3.googleusercontent.com/d/1cET_lqlF3TdBcPv_bigAqccstSYCEJXj=w1000",
      "https://lh3.googleusercontent.com/d/13WBsizRMp28rDnR8ZhmIDE8VOMrmM9nj=w1000",
      "https://lh3.googleusercontent.com/d/15itjIfJBYygy1dJOXQWv5CGpX9zVV_Ju=w1000",
      "https://lh3.googleusercontent.com/d/1IP8W8MHlAos4feM565jOngmzpQPRiySy=w1000",
      "https://lh3.googleusercontent.com/d/1l9H7WVi3zeodGnOR3W7fP_ffpDhR_Soo=w1000"
    ],
    videos: []
  },
  "project-2": {
    title: "Shape the Future: Youth Financial Skills",
    photos: [
      "https://lh3.googleusercontent.com/d/1DWNdneSfcaYUXf8S_AJkDuWZp0YZNPIv=w1000",
      "https://lh3.googleusercontent.com/d/1loe4xhP-hhGXIM2bIG6GX6dUJ-aiy_Z6=w1000",
      "https://lh3.googleusercontent.com/d/1HlKiM9zbKi1hqJ-EUssYccl2iDaAUke0=w1000",
      "https://lh3.googleusercontent.com/d/18GzyFQKmjefhHk2jtRiEDofHxuGw9DQz=w1000",
      "https://lh3.googleusercontent.com/d/1HDIvqY6J2Fzr8KJrO2wzHVawQNcWoXTM=w1000",
      "https://lh3.googleusercontent.com/d/1wG2j4Uxa31kEm39OnY15LQ4dKXo630Hh=w1000",
      "https://lh3.googleusercontent.com/d/1DWnvwmXlqZGCnOdX72Lb1qbdiQebFNTg=w1000",
      "https://lh3.googleusercontent.com/d/1jnUO_IVdK6A8DUZa28OhZDWKp4H-VVKw=w1000",
      "https://lh3.googleusercontent.com/d/18C-PlydUP4_uzqfRWC3NCRIVqPxFZn1T=w1000",
      "https://lh3.googleusercontent.com/d/1vvz8hiTZYl2Fq84zM31NBchNAcUoL8JY=w1000"
    ],
    videos: []
  },
  "project-3": {
    title: "Inspire Youth: Leadership in Youth Work",
    photos: [
      "https://lh3.googleusercontent.com/d/1JoChES_Ss0c--aJru0msyM9j45hzql5n=w1000",
      "https://lh3.googleusercontent.com/d/1TKexiLv9WHKsv7w1agNxZZQfUS-ngUP4=w1000",
      "https://lh3.googleusercontent.com/d/1oxS-vslFCFegOhz0L3RZxMCLJWyO6iL1=w1000",
      "https://lh3.googleusercontent.com/d/1XqIRU_WOnOC4uVNk3i5Ny1aHCT6378RT=w1000",
      "https://lh3.googleusercontent.com/d/14_ksmFjeKhoDYjverHT8aJWqg_JrS73P=w1000",
      "https://lh3.googleusercontent.com/d/176flDRmsxT3JFEYV1Ow4aN9_p-r9m2XD=w1000",
      "https://lh3.googleusercontent.com/d/1-nw-CqhBg20ER0Ias503YxTTNXDKGfRO=w1000"
    ],
    videos: []
  },
  "project-4": {
    title: "A Journey to Your Future Career",
    photos: [
      "https://lh3.googleusercontent.com/d/1SGPhqZkRCczh9hLhvc8zRaR4GJV9LeTa=w1000",
      "https://lh3.googleusercontent.com/d/1KkuZYql60Jf3BgKrU1YyYxleau_X4iPn=w1000",
      "https://lh3.googleusercontent.com/d/1UZHL4ukd8aFuuttveGGDpwUVif9qq2NO=w1000",
      "https://lh3.googleusercontent.com/d/1kgW3YYZJZuIGLyz8g11kd1nuEDbcH1xR=w1000",
      "https://lh3.googleusercontent.com/d/1OVAPo3uzsqKbnkFIZSRc_zBrnFEy7c9c=w1000",
      "https://lh3.googleusercontent.com/d/13n5OAtu92FSKaaK-UIfDV3GO8w5_b1Kx=w1000",
      "https://lh3.googleusercontent.com/d/15KvUAF2QTaHi0ou1uIlQlH85v1aNh-Di=w1000"
    ],
    videos: []
  }
};

export default function ErasmusGallery() {
  const { projectId } = useParams<{ projectId: string }>();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const gallery = projectId ? galleryData[projectId] : null;

  if (!gallery) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Galerie negăsită</h1>
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
        className="relative pt-28 pb-8 bg-gradient-to-br from-brand-blue/10 via-background to-brand-indigo/5"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link 
              to={`/erasmus/${projectId}`}
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi la proiect
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Galerie Foto-Video
            </h1>
            <p className="text-muted-foreground">{gallery.title}</p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "photos" 
                  ? "bg-brand-blue text-white" 
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Fotografii ({gallery.photos.length})
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "videos" 
                  ? "bg-brand-blue text-white" 
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <Video className="w-4 h-4" />
              Video ({gallery.videos.length})
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container">
          {activeTab === "photos" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="aspect-square rounded-xl overflow-hidden bg-secondary cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img src={photo} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.videos.map((video, i) => (
                <motion.a
                  key={i}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-secondary"
                >
                  <img src={video.thumbnail} alt={`Video ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-brand-blue ml-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
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
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
