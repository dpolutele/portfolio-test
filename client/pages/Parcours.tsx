import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Car,
  Briefcase,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

export default function Parcours() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mon Parcours Professionnel
          </h1>
          <p className="text-muted-foreground text-lg">
            Formation, expériences et certifications
          </p>
        </header>

        {/* Diplômes */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Mes diplômes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    year: "2024",
                    title:
                      "Licence Méthodes informatiques appliquées à la gestion des entreprises",
                    status: "En cours",
                    mention: null,
                  },
                  {
                    year: "2023",
                    title: "Brevet de technicien supérieur (BTS SIO - SISR)",
                    status: "Obtenu",
                    mention: "Mention AB",
                  },
                  {
                    year: "2021",
                    title: "Baccalauréat Technologique (STMG option SIG)",
                    status: "Obtenu",
                    mention: "Mention AB",
                  },
                  {
                    year: "2018",
                    title: "Diplôme national du brevet",
                    status: "Obtenu",
                    mention: "Mention AB",
                  },
                ].map((diploma, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-accent/20 border"
                  >
                    <Badge variant="secondary" className="shrink-0">
                      {diploma.year}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {diploma.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={
                            diploma.status === "En cours"
                              ? "default"
                              : "outline"
                          }
                        >
                          {diploma.status}
                        </Badge>
                        {diploma.mention && (
                          <Badge variant="secondary">{diploma.mention}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Permis */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                Permis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/20 border">
                <Badge variant="secondary">2024</Badge>
                <span className="font-semibold">Permis B</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Expériences */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Expériences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    year: "2023",
                    type: "Stage",
                    title: "Ingénieur informatique",
                    company:
                      "Centre Hospitalier Territorial Gaston-Bourret Médipole",
                  },
                  {
                    year: "2022",
                    type: "Stage",
                    title: "Technicien de maintenance informatique",
                    company: "Direction du numérique et de la modernisation",
                  },
                ].map((experience, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-accent/20 border"
                  >
                    <Badge variant="secondary" className="shrink-0">
                      {experience.year}
                    </Badge>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <Badge variant="outline">{experience.type}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Autres certifications */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Certifications et documents
              </CardTitle>
              <CardDescription>
                Téléchargez mes certifications et documents professionnels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  {
                    name: "Mon CV",
                    file: "curriculum vitae 2025.pdf",
                    downloadable: true,
                  },
                  {
                    name: "CNIL RGPD MOD1",
                    file: "CNILRGPD(MOD1).pdf",
                    downloadable: false,
                  },
                  {
                    name: "CNIL RGPD MOD2",
                    file: "CNILRGPD(MOD2).pdf",
                    downloadable: false,
                  },
                  {
                    name: "CNIL RGPD MOD3",
                    file: "CNILRGPD(MOD3).pdf",
                    downloadable: false,
                  },
                  {
                    name: "Certification PIX",
                    file: "PIX.pdf",
                    downloadable: false,
                  },
                  {
                    name: "GetConnected",
                    file: "GetConnected.pdf",
                    downloadable: false,
                  },
                ].map((doc, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto p-4"
                    asChild
                  >
                    <a
                      href={`/${doc.file}`}
                      {...(doc.downloadable
                        ? { download: doc.file }
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <div className="flex items-center gap-3 w-full">
                        {doc.downloadable ? (
                          <Download className="h-4 w-4 text-primary" />
                        ) : (
                          <ExternalLink className="h-4 w-4 text-primary" />
                        )}
                        <span className="flex-1 text-left">{doc.name}</span>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Image */}
        <section className="flex justify-center animate-fade-in-up">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-accent overflow-hidden border-2 border-background shadow-lg">
            <img
              src="/monparcourspro.jpg"
              alt="Icône professionnelle"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"><Briefcase /></div>';
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
