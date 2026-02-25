import { Link } from "react-router-dom";
import { Brain, Target, TrendingUp, Zap, Star, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-children.jpg";

const benefits = [
  { icon: Target, title: "Improves Concentration", desc: "Sharpen focus and attention span through structured mental exercises." },
  { icon: Brain, title: "Enhances Memory", desc: "Develop photographic memory and recall abilities naturally." },
  { icon: TrendingUp, title: "Boosts Confidence", desc: "Watch your child grow confident with every calculation mastered." },
  { icon: Zap, title: "Increases Speed", desc: "Perform complex calculations faster than a calculator." },
];

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Arjun, Age 8", text: "My son's math grades improved dramatically within 3 months. The Indian Abacus method is truly magical!", rating: 5 },
  { name: "Rajesh Kumar", role: "Parent of Sneha, Age 10", text: "Sneha can now solve complex calculations mentally. Her teachers are amazed at her progress.", rating: 5 },
  { name: "Anita Patel", role: "Parent of Vikram, Age 7", text: "The confidence boost my child got from this program is incredible. Highly recommend to all parents!", rating: 5 },
];

const stats = [
  { value: "50+", label: "Centres" },
  { value: "10K+", label: "Students" },
  { value: "15+", label: "Years" },
  { value: "98%", label: "Satisfaction" },
];

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Children learning abacus" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-hero" style={{ opacity: 0.85 }} />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-6 animate-fade-in-up">
              🧒 #1 Abacus Training Program in India
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Unlock Your Child's{" "}
              <span className="text-secondary">Brain Power</span>{" "}
              with Indian Abacus
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Develop mental arithmetic, concentration, and confidence in children aged 5-14 through our proven Abacus methodology used by 10,000+ students.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-cta font-bold text-base px-8">
                <Link to="/enroll">Enroll Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8">
                <Link to="/centres">Find a Centre</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center animate-count-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-black text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-section py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Why <span className="text-primary">Indian Abacus?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our scientifically designed program develops both sides of the brain, giving your child a lifelong advantage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <b.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                The Ancient Art of <span className="text-primary">Mental Arithmetic</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Indian Abacus is a structured mental arithmetic program that trains children to perform calculations using visualization of the abacus. This engages both hemispheres of the brain, leading to holistic brain development.
              </p>
              <div className="space-y-3 mb-8">
                {["Whole brain development", "Suitable for ages 5-14", "8 progressive levels", "Certified instructors"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                <Link to="/about">Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="relative">
              <img src={heroImage} alt="Students learning abacus" className="rounded-2xl shadow-elevated w-full" />
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-xl px-6 py-3 shadow-cta">
                <div className="font-black text-2xl">15+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-section py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              What <span className="text-primary">Parents Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">Real stories from parents who've seen incredible transformations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hero py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Ready to Transform Your Child's Future?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of parents who trust Indian Abacus for their child's brain development journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-cta font-bold text-base px-8">
              <Link to="/enroll">Start Enrollment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
