import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Shield, Code, Server, Network } from "lucide-react";

const skillsData = {
  "Systèmes et Réseaux": {
    icon: Server,
    color: "bg-blue-500",
    skills: [
      { name: "Active Directory (AD DS, GPO, Domaines)", percentage: 80 },
      { name: "Cisco Catalyst (VLAN, Trunks, EtherChannel, Spanning Tree)", percentage: 75 },
      { name: "Windows Server (DHCP, DNS, Virtualisation)", percentage: 70 },
      { name: "Supervision réseau (Zabbix, Centreon, GLPI)", percentage: 60 },
      { name: "Sécurité réseau (pfSense, Fortigate, Firewall)", percentage: 50 },
    ],
  },
  Programmation: {
    icon: Code,
    color: "bg-green-500",
    skills: [
      { name: "HTML, CSS, JavaScript", percentage: 70 },
      { name: "SQL (MySQL, MariaDB, PostgreSQL)", percentage: 65 },
      { name: "PowerShell/Bash", percentage: 60 },
      { name: "Python", percentage: 50 },
      { name: "Java & Programmation orientée objet", percentage: 45 },
    ],
  },
};

function SkillBar({
  skill,
  index,
}: {
  skill: { name: string; percentage: number };
  index: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setProgress(skill.percentage);
      },
      index * 200 + 500,
    ); // Stagger animations

    return () => clearTimeout(timer);
  }, [skill.percentage, index]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">
          {skill.name}
        </span>
        <Badge variant="secondary">{skill.percentage}%</Badge>
      </div>
      <Progress value={progress} className="h-3" />
    </div>
  );
}

export default function Competences() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mes Compétences
          </h1>
          <p className="text-muted-foreground text-lg">
            Compétences techniques et niveau de maîtrise
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => {
            const IconComponent = data.icon;

            return (
              <section key={category} className="animate-fade-in-up">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${data.color}`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {data.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          skill={skill}
                          index={
                            categoryIndex * data.skills.length + skillIndex
                          }
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}
        </div>

        {/* Additional Info */}
        <section className="animate-fade-in-up">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Spécialisation BTS SIO - SISR
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Solutions d'Infrastructure, Systèmes et Réseaux. Cette
                    spécialité me permet de concevoir, mettre en place et
                    maintenir des infrastructures réseaux sécurisées.
                    Concrètement, je peux installer et configurer des serveurs,
                    gérer des systèmes d'exploitation, administrer des réseaux
                    locaux et distants, et assurer la sécurité des systèmes
                    informatiques.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Environment */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" />
                Environnement technique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Windows Server",
                  "Active Directory",
                  "VMware/Virtual Box",
                  "Cisco",
                  "Packet Tracer",
                  "Wireshark",
                  "Linux",
                  "PowerShell",
                  "Git",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="justify-center p-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
