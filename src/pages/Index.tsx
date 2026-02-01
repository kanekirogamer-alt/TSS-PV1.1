import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Impact } from "@/components/Impact";
import { TargetGroups } from "@/components/TargetGroups";
import { GetInvolved } from "@/components/GetInvolved";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Impact />
      <TargetGroups />
      <GetInvolved />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
