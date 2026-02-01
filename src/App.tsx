import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import DataProcessing from "./pages/DataProcessing";
import Proiecte from "./pages/Proiecte";
import DespreNoi from "./pages/DespreNoi";
import ImplicaTe from "./pages/ImplicaTe";
import SkillSociale from "./pages/programs/SkillSociale";
import EducatieFinanciara from "./pages/programs/EducatieFinanciara";
import Leadership from "./pages/programs/Leadership";
import LucruInEchipa from "./pages/programs/LucruInEchipa";
import ErasmusProjects from "./pages/erasmus/ErasmusProjects";
import ErasmusProjectDetail from "./pages/erasmus/ErasmusProjectDetail";
import ErasmusGallery from "./pages/erasmus/ErasmusGallery";
import ErasmusDissemination from "./pages/erasmus/ErasmusDissemination";
import Workshop from "./pages/Workshop";
import WorkshopsKids from "./pages/workshops/WorkshopsKids";
import WorkshopsYoung from "./pages/workshops/WorkshopsYoung";
import WorkshopsAdults from "./pages/workshops/WorkshopsAdults";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Partner from "./pages/Partner";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/proiecte" element={<Proiecte />} />
            <Route path="/despre-noi" element={<DespreNoi />} />
            <Route path="/implica-te" element={<ImplicaTe />} />
            <Route path="/programe/skill-uri-sociale" element={<SkillSociale />} />
            <Route path="/programe/educatie-financiara" element={<EducatieFinanciara />} />
            <Route path="/programe/leadership" element={<Leadership />} />
            <Route path="/programe/lucru-in-echipa" element={<LucruInEchipa />} />
            <Route path="/erasmus" element={<ErasmusProjects />} />
            <Route path="/erasmus/:projectId" element={<ErasmusProjectDetail />} />
            <Route path="/erasmus/:projectId/galerie" element={<ErasmusGallery />} />
            <Route path="/erasmus/:projectId/diseminare" element={<ErasmusDissemination />} />
            <Route path="/workshop-uri" element={<Workshop />} />
            <Route path="/workshop-uri/copii" element={<WorkshopsKids />} />
            <Route path="/workshop-uri/tineri" element={<WorkshopsYoung />} />
            <Route path="/workshop-uri/adulti" element={<WorkshopsAdults />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/politica-de-confidentialitate" element={<PrivacyPolicy />} />
            <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
            <Route path="/prelucrarea-datelor-personale" element={<DataProcessing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
