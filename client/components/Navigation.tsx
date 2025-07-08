import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { href: "/", label: "Accueil" },
  { href: "/parcours", label: "Mon parcours professionnel" },
  { href: "/competences", label: "Compétences" },
  { href: "/projets", label: "Projets" },
  { href: "/qui-suis-je", label: "Qui suis-je?" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 h-full w-64 bg-card border-r border-border p-6 z-40">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground">
              POLUTELE Dylan
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Portfolio</p>
          </div>

          <div className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden z-40">
          <nav className="fixed top-0 left-0 h-full w-72 bg-card border-r border-border p-6">
            <div className="space-y-6 mt-16">
              <div className="text-center">
                <h1 className="text-xl font-bold text-foreground">
                  POLUTELE Dylan
                </h1>
                <p className="text-sm text-muted-foreground mt-1">Portfolio</p>
              </div>

              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
