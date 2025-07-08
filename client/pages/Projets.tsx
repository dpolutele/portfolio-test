import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Trophy } from "lucide-react";

const projects = [
  {
    title: "SIMULAND",
    date: "Juillet 2022",
    location: "Lycée Dick Ukeiwe",
    description:
      "Participation à un projet de simulation d'entreprise dans le cadre de la formation BTS SIO",
    type: "Projet éducatif",
    technologies: ["Gestion de projet", "Travail en équipe", "Simulation"],
    url: "https://weblgn.ac-noumea.nc/IMG/pdf/jee-2022_1_.pdf",
  },
  {
    title: "CTF pour les terminales NSI",
    date: "Septembre 2022",
    location: "Lycée Blaise Pascal",
    description:
      "Organisation et animation d'un Capture The Flag (CTF) pour les élèves de terminale NSI",
    type: "Animation pédagogique",
    technologies: ["Cybersécurité", "CTF", "Formation", "Pédagogie"],
    url: "https://weblgn.ac-noumea.nc/IMG/pdf/jee-2022_1_.pdf",
  },
];

export default function Projets() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mes Projets
          </h1>
          <p className="text-muted-foreground text-lg">
            Projets réalisés et participations
          </p>
        </header>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <section key={index} className="animate-fade-in-up">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.location}
                        </div>
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild variant="outline" className="group">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir le projet
                        <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        {/* Coming Soon Section */}
        <section className="animate-fade-in-up">
          <Card className="border-dashed border-2 border-muted">
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Projets à venir
                </h3>
                <p className="text-muted-foreground">
                  D'autres projets seront ajoutés au fur et à mesure de mon
                  parcours en Licence MIAGE.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Image */}
        <section className="flex justify-center animate-fade-in-up">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-accent overflow-hidden border-2 border-background shadow-lg">
            <img
              src="/projets.jpg"
              alt="Illustration projets"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"><Trophy /></div>';
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
