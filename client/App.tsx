import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Parcours from "./pages/Parcours";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import QuiSuisJe from "./pages/QuiSuisJe";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Note le basename ici */}
      <BrowserRouter basename="/portfolio">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/qui-suis-je" element={<QuiSuisJe />} />
            <Route path="/contact" element={<Contact />} />
            {/* Toutes les autres routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
