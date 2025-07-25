import React, { useEffect, useState } from "react";

const THEMES = ["classique", "dark"] as const;
type Theme = typeof THEMES[number];

const LOCAL_STORAGE_KEY = "theme-preference";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("classique");

  // Applique le thème en mettant la bonne classe sur <html>
  const applyTheme = (theme: Theme) => {
    const html = document.documentElement;

    // Supprimer toutes les classes de thème avant d'en ajouter une nouvelle
    html.classList.remove("dark", "theme-neon", "theme-pastel");

    if (theme === "classique") {
      // Pas de classe spécifique pour classique (light mode par défaut)
      html.classList.remove("dark");
    } else {
      html.classList.add(theme);
    }
  };

  // Au montage, lire la préférence stockée ou détecter le mode système
  useEffect(() => {
    let savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme | null;

    if (!savedTheme) {
      // Détection automatique dark/light système
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        savedTheme = "dark";
      } else {
        savedTheme = "classique";
      }
    }

    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Quand le thème change (par clic), applique-le et sauvegarde en localStorage
  const onChangeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
  };

  return (
    <div className="flex gap-4 p-4">
      {THEMES.map((t) => (
        <button
          key={t}
          onClick={() => onChangeTheme(t)}
          className={`px-4 py-2 rounded ${
            theme === t
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
          aria-pressed={theme === t}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}
