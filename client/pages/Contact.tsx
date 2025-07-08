import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Send, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data - you can integrate with a backend later
    console.log("Form submitted:", formData);
    // In a real app, you would send this to your backend
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contactez-moi
          </h1>
          <p className="text-muted-foreground text-lg">
            N'hésitez pas à me contacter pour toute question ou opportunité
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <section className="animate-fade-in-up">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Mes coordonnées</CardTitle>
                <CardDescription>
                  Plusieurs moyens de me contacter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <a
                    href="https://nc.linkedin.com/in/dylan-polutele-687902246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        LinkedIn
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Connectez-vous avec moi
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>

                  <a
                    href="mailto:dylangiovannipolutele@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-red-500">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        dylangiovannipolutele@gmail.com
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/20">
                    <div className="p-2 rounded-lg bg-green-500">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        Téléphone
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        +687 967501
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Disponibilité
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Je réponds généralement aux messages dans les 24-48 heures.
                    N'hésitez pas à me contacter pour discuter d'opportunités
                    professionnelles ou de collaborations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Form */}
          <section className="animate-fade-in-up">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Formulaire de contact</CardTitle>
                <CardDescription>
                  Envoyez-moi un message directement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse e-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    * Champs obligatoires. Vos données personnelles sont
                    traitées de manière confidentielle et ne seront pas
                    partagées avec des tiers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Quick Contact Actions */}
        <section className="animate-fade-in-up">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-4">
                  Contact rapide
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="outline">
                    <a href="mailto:dylangiovannipolutele@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      M'écrire
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href="https://nc.linkedin.com/in/dylan-polutele-687902246"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
