import "./global.css";
import { Toaster } from "@/components/ui/toaster";
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
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

// ✅ Composant ThemeSwitcher avec menu déroulant
const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'default', label: 'Classic' },
    { name: 'dark', label: 'Dark' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    changeTheme(savedTheme, false);
  }, []);

  const changeTheme = (themeName: string, save = true) => {
    // Supprime toutes les classes de thème possibles (sauf default)
    document.documentElement.classList.remove('dark', 'theme-nature', 'theme-sunset');
    // Ne garder que 'dark' si sélectionné
    if (themeName === 'dark') {
      document.documentElement.classList.add('dark');
    }
    // Pas de classe ajoutée pour 'default' (classique)
    if (save) {
      localStorage.setItem('portfolio-theme', themeName);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn m-1 flex items-center gap-2"
      >
        🎨 Thème
      </button>

      {isOpen && (
        <ul className="mt-2 menu p-2 shadow bg-background border border-border rounded-box w-52">
          {themes.map((theme) => (
            <li key={theme.name}>
              <a
                onClick={() => changeTheme(theme.name)}
                className="hover:bg-secondary hover:text-secondary-foreground cursor-pointer"
              >
                {theme.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/portfolio">
        <Layout>
          <ThemeSwitcher />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/qui-suis-je" element={<QuiSuisJe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// ✅ Création du root ici (pas besoin de main.tsx)
createRoot(document.getElementById("root")!).render(<App />);
