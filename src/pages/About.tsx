import { Link } from "react-router-dom";
import { Eye, Target, BookOpen, Award, Users, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const usps = [
  { icon: BookOpen, title: "Proven Methodology", desc: "Scientifically designed curriculum refined over 15+ years of research." },
  { icon: Award, title: "Certified Trainers", desc: "Every instructor is certified and regularly updated with latest techniques." },
  { icon: Users, title: "Small Batches", desc: "Personal attention with maximum 10 students per batch." },
  { icon: Globe, title: "Pan-India Presence", desc: "50+ centres across India ensuring accessibility for all." },
];

const levels = [
  "Foundation – Introduction to Abacus tool",
  "Basic – Simple addition & subtraction",
  "Intermediate – Multiplication concepts",
  "Advanced – Division & decimals",
  "Expert – Mental arithmetic without tool",
  "Master – Speed & competition level",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">About Indian Abacus</h1>
            <p className="text-primary-foreground/80 text-lg">Discover how we're transforming children's learning through the ancient science of mental arithmetic.</p>
          </div>
        </div>
      </section>

      {/* What is Indian Abacus */}
      <section className="bg-card py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            What is <span className="text-primary">Indian Abacus?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Indian Abacus is a comprehensive mental arithmetic program designed for children between ages 5 and 14. It uses the ancient abacus tool as a foundation to develop mental calculation abilities, stimulating both the left and right hemispheres of the brain simultaneously.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The program was developed by combining traditional Indian mathematical heritage with modern cognitive science research. Over the years, it has evolved into one of the most effective brain development programs in India, helping over 10,000 students unlock their true potential.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-section rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-xl text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To make every child in India a mental math champion, fostering a generation of confident, quick-thinking individuals.
              </p>
            </div>
            <div className="bg-section rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-secondary" />
                <h3 className="font-bold text-xl text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, high-quality abacus education through certified centres and trained instructors across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-section py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            Teaching <span className="text-primary">Methodology</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Our progressive 8-level program takes students from basic abacus handling to advanced mental calculations. Each level builds upon the previous one, ensuring solid foundations.
          </p>
          <div className="space-y-3">
            {levels.map((level, i) => (
              <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
                </div>
                <span className="text-foreground font-medium">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((u, i) => (
              <div key={i} className="bg-section rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <u.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{u.title}</h3>
                <p className="text-muted-foreground text-sm">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-primary-foreground mb-4">Begin Your Child's Journey Today</h2>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-cta font-bold px-8">
            <Link to="/enroll">Enroll Now <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
