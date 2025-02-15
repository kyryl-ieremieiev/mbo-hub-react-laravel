import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Bericht verzonden! We nemen zo snel mogelijk contact met je op.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Heb je een vraag of wil je een project aandragen? Neem contact met ons op!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Stuur ons een bericht</CardTitle>
            <CardDescription>Vul het formulier in en we nemen zo snel mogelijk contact met je op.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Naam"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Onderwerp"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Je bericht"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full text-white">Verstuur bericht</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contactgegevens</CardTitle>
              <CardDescription>Je kunt ons ook direct bereiken via:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <a href="mailto:info@mbo-hub.nl" className="hover:text-primary">
                  info@mbo-hub.nl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span>020 - XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span>Amsterdam, Nederland</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volg ons</CardTitle>
              <CardDescription>Blijf op de hoogte via onze sociale media</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project aandragen?</CardTitle>
              <CardDescription>
                Heb je een interessant project voor onze studenten?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full text-white" onClick={() => {
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Draag een project aan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;