import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, HandHeart, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const options = [
  {
    icon: HandHeart,
    title: "Voluntariat",
    description: "Alătură-te echipei noastre, sprijină proiectele comunitare și dobândește noi abilități și experiențe valoroase.",
    cta: "Devino Voluntar",
    href: "/volunteer",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    borderColor: "border-brand-blue/20 hover:border-brand-blue/50",
    buttonVariant: "default" as const,
  },
  {
    icon: Heart,
    title: "Donează",
    description: "Sprijinul tău ne ajută să ajungem la mai mulți oameni și să creăm programe care fac cu adevărat diferența.",
    cta: "Donează Cauzei",
    href: "/donate",
    colorClass: "bg-brand-pink/10 text-brand-pink",
    borderColor: "border-brand-pink/20 hover:border-brand-pink/50",
    buttonVariant: "accent" as const,
  },
  {
    icon: Building2,
    title: "Parteneriat",
    description: "Colaborează cu noi pentru a aduce programe de dezvoltare a abilităților sociale în comunitatea ta.",
    cta: "Devino Partener",
    href: "/partner",
    colorClass: "bg-brand-green/10 text-brand-green",
    borderColor: "border-brand-green/20 hover:border-brand-green/50",
    buttonVariant: "default" as const,
  },
];

export function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const handleSectionInProgress = () => {
    toast({
      description: "Această secțiune este în lucru...",
    });
  };

  return (
    <section id="get-involved" className="py-24" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4"
          >
            Implică-te
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Alătură-te <span className="text-brand-purple">cauzei</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Susține comunitatea noastră și alătură-te inițiativelor care dezvoltă abilități sociale și educație financiară pentru toți.
          </motion.p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`bg-card rounded-3xl p-8 border-2 ${option.borderColor} transition-all duration-300 hover:-translate-y-2 group text-center`}
            >
              <div className={`w-16 h-16 rounded-2xl ${option.colorClass} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <option.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {option.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {option.description}
              </p>

              {option.cta === "Devino Voluntar" ? (
                <Button
                  variant={option.buttonVariant}
                  className="w-full"
                  asChild
                >
                  <Link to={option.href} onClick={() => window.scrollTo(0, 0)}>
                    {option.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <Button
                  variant={option.buttonVariant}
                  className="w-full"
                  onClick={handleSectionInProgress}
                >
                  {option.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
