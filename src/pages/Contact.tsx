import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "info@indianabacus.com", href: "mailto:info@indianabacus.com" },
  { icon: MapPin, label: "Office Address", value: "123 Education Street, T. Nagar, Chennai – 600017, Tamil Nadu, India" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: Closed" },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    form.reset();
  };

  return (
    <div>
      <section className="bg-hero py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg">We'd love to hear from you. Reach out with any questions!</p>
        </div>
      </section>

      <section className="bg-section py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-elevated">
              <h2 className="text-2xl font-black text-foreground mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Full Name *</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email *</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone *</FormLabel><FormControl><Input placeholder="+91 XXXXX XXXXX" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Message *</FormLabel><FormControl><Textarea placeholder="How can we help you?" rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Info + Map */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="bg-card rounded-xl p-5 shadow-card">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-bold text-sm text-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">{info.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="bg-card rounded-xl overflow-hidden shadow-card">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.889523456789!2d80.2341!3d13.0482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzUzLjUiTiA4MMKwMTQnMDIuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-black text-foreground mb-8 text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "What age group is Indian Abacus suitable for?", a: "Indian Abacus is designed for children aged 5 to 14 years. The program is structured into progressive levels suitable for different age groups." },
              { q: "How long is the complete course?", a: "The complete course spans approximately 2-3 years, divided into 8 progressive levels. Each level typically takes 3-4 months to complete." },
              { q: "How many classes per week?", a: "We conduct 2 classes per week, each lasting 1-1.5 hours. Regular practice at home for 15-20 minutes daily is recommended." },
              { q: "Will Abacus help in school math?", a: "Absolutely! Students show significant improvement in school mathematics, speed of calculations, and overall academic performance." },
              { q: "Is there a demo class available?", a: "Yes! We offer a free demo class at all our centres. Contact your nearest centre or fill the enrollment form to book one." },
              { q: "What is the fee structure?", a: "Fees vary by centre and city. Please contact your preferred centre directly for the current fee structure." },
            ].map((faq, i) => (
              <details key={i} className="bg-section rounded-xl group">
                <summary className="p-5 cursor-pointer font-bold text-foreground hover:text-primary transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
