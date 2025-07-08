import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Target, Music } from "lucide-react";

export default function QuiSuisJe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Qui suis-je ?
          </h1>
          <p className="text-muted-foreground text-lg">
            Découvrez mon parcours et ma personnalité
          </p>
        </header>

        {/* Photo and Greeting */}
        <section className="animate-fade-in-up">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-4 border-background shadow-xl shrink-0">
                  <img
                    src="/quisuis-je.jpg"
                    alt="Photo de Dylan POLUTELE"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold">DP</div>';
                    }}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-foreground mb-2 greeting">
                    Salut,
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Moi c'est{" "}
                    <strong className="text-primary">POLUTELE Dylan</strong>,
                    j'ai <strong>21 ans</strong> et dans cette rubrique, je vais
                    me présenter en détail, pourquoi avoir choisi
                    l'informatique, mes passions, et ce que j'envisage pour la
                    suite de ma carrière professionnelle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mon parcours */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Mon parcours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Rien ne m'était destiné à travailler dans l'informatique. Comme
                la plupart des adolescents de la génération 2000, j'aimais les
                jeux vidéo, mais sans plus. Je ne m'étais pas découvert une
                passion folle pour le code ou encore les réseaux informatiques.
                Après une première STMG, j'ai postulé en terminale SIG (Systèmes
                d'Information et de Gestion), car aucune autre filière ne
                m'intéressait vraiment.
              </p>

              <p className="text-foreground leading-relaxed">
                J'ai donc obtenu mon{" "}
                <Badge variant="secondary">
                  baccalauréat technologique option SIG
                </Badge>{" "}
                au lyc��e Dick Ukeiwë en 2021. Cette terminale m'a montré
                l'impact du numérique dans le monde professionnel, ce qui m'a
                poussé à postuler pour le
                <Badge variant="secondary">BTS SIO</Badge> (Services
                Informatiques aux Organisations). Je suis plus que satisfait de
                ce BTS, car j'y ai acquis de nombreuses compétences.
              </p>

              <p className="text-foreground leading-relaxed">
                Cette formation m'a fait comprendre que l'informatique est un
                domaine très vaste qui ne se limite pas seulement au code ou aux
                machines. Les métiers, les outils, l'évolution technologique...
                tout cela fait que, jour après jour, ce domaine évolue et change
                constamment.
              </p>

              <div className="bg-accent/20 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground leading-relaxed">
                  J'ai obtenu mon diplôme avec la spécialité{" "}
                  <strong>
                    "Solutions d'Infrastructure, Systèmes et Réseaux" (SISR)
                  </strong>
                  . Cette spécialité me permet d'être capable de concevoir, de
                  mettre en place et de maintenir des infrastructures réseaux
                  sécurisées. Concrètement, cela signifie que je peux installer
                  et configurer des serveurs, gérer des systèmes d'exploitation,
                  administrer des réseaux locaux et distants, et assurer la
                  sécurité des systèmes informatiques.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* En dehors des études */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                En dehors des études
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent">
                    <Music className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">
                      Ma passion pour la musique
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Je suis de nature calme et discrète, mais j'apprécie
                      également l'interaction avec les autres. C'est vrai que
                      cela peut sembler contradictoire, mais si je devais me
                      décrire en quelques mots, je dirais que je suis un{" "}
                      <strong>introverti sociable</strong>.
                    </p>
                    <p className="text-foreground leading-relaxed mt-2">
                      En dehors de mes études, je passe beaucoup de mon temps
                      libre à{" "}
                      <strong>composer des sons sur mon ordinateur</strong>. Si
                      je n'avais pas découvert l'informatique, je me serais
                      probablement lancé dans une carrière de DJ ou de
                      beatmaker.
                    </p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed">
                  Je m'intéresse également à tout ce qui se passe dans le monde
                  sur les plans <strong>politique, économique et social</strong>
                  car je pense qu'il est important pour nous, étudiants et
                  futurs acteurs du monde de demain, de nous informer sur les
                  enjeux qui traversent nos sociétés.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ce que j'envisage */}
        <section className="animate-fade-in-up">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Ce que j'envisage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                Après ma licence, j'aimerais me lancer dans la vie active, mais
                je ne suis pas certain de ma décision. Je ne sais pas de quoi
                demain sera fait et il est possible qu'entre-temps, j'éprouve le
                désir de poursuivre une formation pour me spécialiser davantage
                dans un domaine.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Pour l'instant, j'envisage, après ma formation{" "}
                <Badge variant="secondary">bac +3</Badge>, de travailler dans le
                <strong> secteur privé</strong> ou d'intégrer la{" "}
                <strong>fonction publique</strong> en passant des concours
                spécifiques.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
