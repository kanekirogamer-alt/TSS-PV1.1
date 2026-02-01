import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { href: "/", label: "Acasă", isRoute: true },
  { href: "/despre-noi", label: "Despre noi", isRoute: true, showToast: true },
  { href: "/proiecte", label: "Proiecte", isRoute: true },
  { href: "#get-involved", label: "Implică-te", isRoute: false },
  { href: "#contact", label: "Contact", isRoute: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  const handleSectionInProgress = () => {
    toast({
      description: "Această secțiune este în lucru...",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean, showToast?: boolean) => {
    setIsMobileMenuOpen(false);

    if (showToast) {
      handleSectionInProgress();
      return;
    }

    if (isRoute) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith("#")) {
      // Handle section navigation
      const sectionId = href.substring(1);

      // If not on home page, navigate to home first then scroll to section
      if (!isHomePage) {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // Determine navbar styling based on page and scroll position
  const isTransparent = isHomePage && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)} 
            className="flex items-center gap-2 group"
          >
            <img 
              src={isTransparent ? logoWhite : logo} 
              alt="Today Social Skills Logo" 
              className="h-14 w-auto group-hover:scale-105 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isRoute, link.showToast)}
                className={`font-medium transition-colors hover:text-primary ${
                  isTransparent ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant={isTransparent ? "hero-outline" : "default"}
              size="lg"
              onClick={handleSectionInProgress}
            >
              <Heart className="w-4 h-4" />
              Donează
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isTransparent ? "text-primary-foreground" : "text-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button className="mt-4" size="lg" onClick={handleSectionInProgress}>
                <Heart className="w-4 h-4" />
                Donează
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
