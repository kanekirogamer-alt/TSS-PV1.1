import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Submit to the MailerLite API endpoint
      const response = await fetch(
        "https://assets.mailerlite.com/jsonp/2029417/forms/176215661522978413/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "fields[name]": name,
            "fields[email]": email,
            "ml-submit": "1",
          }).toString(),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting newsletter form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">
                Hai în comunitate!
              </DialogTitle>
              <DialogDescription className="text-base mt-2">
                <span className="font-semibold text-foreground">
                  Primești acces la sfaturi, resurse educaționale și povești inspiraționale (Nu vom trimite SPAM)
                </span>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground"
                >
                  Cum te cheamă?
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Cum te cheamă?"
                  className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground"
                >
                  Email-ul tău
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email-ul tău"
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading || !name || !email}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold hover:shadow-lg transition-all"
                size="lg"
              >
                {isLoading ? "Se trimite..." : "Vreau acces!"}
              </Button>

              <p className="text-sm text-muted-foreground italic text-center">
                Accesul este gratuit și te poți dezabona oricând dorești
              </p>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-8">
            <div className="text-4xl">✓</div>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Îți mulțumim!
            </DialogTitle>
            <p className="text-foreground font-semibold">
              Te-ai înscris cu succes în newsletter-ul nostru.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
