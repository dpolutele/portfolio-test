import React, { useState } from "react";
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
      "Dans le cadre de ma formation en BTS SIO, nous avons organisé un jeu de simulation Simuland pour les terminales STMG du Lycée Dick Ukeiwe. " +
      "Préparation des salles info et création des comptes utilisateurs. " +
      "Gestion des équipes et des parties. " +
      "Animation du jeu et vérification des équipements. " +
      "Gestion administrative sur Simuland. " +
      "Vérification des salles et connexion réseau. " +
      "Tests d’accès au site et sessions.",
    type: "Projet éducatif",
    technologies: ["Gestion de projet", "Travail en équipe", "Simulation"],
    url: "https://weblgn.ac-noumea.nc/IMG/pdf/jee-2022_1_.pdf",
  },
  {
    title: "CTF pour les terminales SIG",
    date: "Septembre 2022",
    location: "Lycée Dick Ukeiwe",
    description:
      "Dans le cadre de ma formation en BTS SIO, nous avons organisé une journée pour faire découvrir le BTS aux terminales SIG du Lycée Blaise Pascal et Dick Ukeiwe via un Capture The Flag. " +
      "Création complète du CTF, hébergement web, défis et gestion sur le site. " +
      "Organisation des équipes avec comptes, accueil, connexion et déroulement du jeu. " +
      "Le gagnant est reparti avec un commutateur Cisco 2960.",
    type: "Animation pédagogique",
    technologies: ["Cybersécurité", "CTF", "Formation", "Pédagogie"],
  },
  {
    title: "Projet final BTS SIO SISR - Épreuve E5",
    date: "Juin-Octobre 2023",
    location: "Lycée Dick Ukeiwe",
    description: `Dans le cadre de l’épreuve finale E5 du BTS SIO spécialité SISR, j’ai conçu et déployé une infrastructure réseau complète pour une entreprise fictive "DEVLINE".

Mission 1 : Mise en place du LAN
- Schéma réseau LAN
- Installation d’un Active Directory (VBox)
- Configuration AD DS, DHCP (plage IP définie), DNS
- Création et déploiement des postes clients sur le domaine DEVLINE
- Gestion des groupes, comptes utilisateurs et GPO (stratégies de sécurité, redirections, scripts)
- Installation serveur Zabbix avec déploiement agents clients
- Installation serveur GLPI pour gestion du parc

Mission 2 : Mise en place du WAN
- Schéma réseau WAN
- Installation et configuration du routeur/pare-feu pfSense
- Mise en place de règles de filtrage et routage inter-VLAN

Mission 3 : Mise en place de la DMZ
- Installation et configuration d’un serveur web

Travail sur Cisco 2960 :
- Création VLAN, trunks, EtherChannel, Spanning Tree
- Sécurisation des switches : interface management, SSH, affectation ports VLAN
`,
    type: "Projet final",
    technologies: [
      "Active Directory",
      "Cisco 2960",
      "pfSense",
      "Zabbix",
      "GLPI",
      "Windows Server",
      "Linux",
      "Virtualisation",
      "Sécurité réseau",
    ],
  },
];

function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);

  // Pour tronquer la description à environ 350 caractères
  const shortDesc = project.description.slice(0, 350);

  return (
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
        <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
          {showMore ? project.description : shortDesc + (project.description.length > 350 ? "..." : "")}
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-2">
              Technologies utilisées
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.url && (
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
          )}

          {!project.url && project.description.length > 350 && (
            <Button variant="link" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Réduire" : "Afficher la suite"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projets() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Mes Projets</h1>
          <p className="text-muted-foreground text-lg">
            Projets réalisés et participations
          </p>
        </header>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <section key={index} className="animate-fade-in-up">
              <ProjectCard project={project} />
            </section>
          ))}
        </div>

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
      </div>
    </div>
  );
}
