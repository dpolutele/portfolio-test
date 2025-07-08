import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bonjour l'ami(e), bienvenue sur mon portfolio. Tu trouveras sur ce
            site un résumé de ce que j'ai pu réaliser dans ma vie
            professionnelle. Bonne visite !
          </p>

          {/* Profile Image */}
          <div className="mt-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-4 border-background shadow-xl">
              <img
                src="/profile.jpg"
                alt="Photo de profil Dylan POLUTELE"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold">DP</div>';
                }}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="animate-fade-in-up">
          <Card className="backdrop-blur-sm bg-card/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Coordonnées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <a
                  href="mailto:dylangiovannipolutele@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">
                    dylangiovannipolutele@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+687 967501</span>
                </div>

                <a
                  href="https://github.com/dpolutele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="h-4 w-4 text-primary" />
                  <span className="text-sm">GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Presentation Section */}
        <section className="animate-fade-in-up">
          <Card className="backdrop-blur-sm bg-card/80">
            <CardHeader>
              <CardTitle>Présentation</CardTitle>
              <CardDescription>A propos de moi</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">
                En bref, sortant d'une formation au sein du BTS SIO, je suis
                actuellement en Licence informatique MIAGE à l'Université de la
                Nouvelle-Calédonie.
              </p>
              <Link to="/qui-suis-je">
                <Button variant="outline" className="group">
                  En savoir plus
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
          <Link to="/competences">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Compétences
                </CardTitle>
                <CardDescription>
                  Découvrez mes compétences techniques
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/projets">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Projets
                </CardTitle>
                <CardDescription>Explorez mes réalisations</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/parcours">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Mon parcours
                </CardTitle>
                <CardDescription>
                  Mon expérience professionnelle
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </section>
      </div>
    </div>
  );
}
