import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const centreOptions = [
  "Indian Abacus – Anna Nagar, Chennai",
  "Indian Abacus – T. Nagar, Chennai",
  "Indian Abacus – Koramangala, Bangalore",
  "Indian Abacus – Banjara Hills, Hyderabad",
  "Indian Abacus – Andheri West, Mumbai",
  "Indian Abacus – Salt Lake, Kolkata",
  "Indian Abacus – Gomti Nagar, Lucknow",
  "Indian Abacus – Aundh, Pune",
  "Indian Abacus – Vaishali Nagar, Jaipur",
];

const enrollSchema = z.object({
  studentName: z.string().trim().min(2, "Student name is required").max(100),
  parentName: z.string().trim().min(2, "Parent name is required").max(100),
  age: z.string().min(1, "Age is required"),
  schoolName: z.string().trim().min(2, "School name is required").max(200),
  city: z.string().trim().min(2, "City is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(255),
  centre: z.string().min(1, "Please select a centre"),
  message: z.string().max(500).optional(),
});

type EnrollForm = z.infer<typeof enrollSchema>;

export default function Enroll() {
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const form = useForm<EnrollForm>({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      age: "",
      schoolName: "",
      city: "",
      phone: "",
      email: "",
      centre: searchParams.get("centre") || "",
      message: "",
    },
  });

  const onSubmit = (data: EnrollForm) => {
    console.log("Enrollment data:", data);
    toast({ title: "Enrollment Submitted!", description: "We'll contact you shortly to confirm your enrollment." });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-hero py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-black text-primary-foreground">Enrollment</h1>
          </div>
        </section>
        <section className="bg-section py-16 md:py-24">
          <div className="container max-w-lg text-center">
            <div className="bg-card rounded-2xl p-10 shadow-elevated">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h2 className="text-2xl font-black text-foreground mb-3">Enrollment Successful!</h2>
              <p className="text-muted-foreground mb-6">Thank you for enrolling! Our team will contact you within 24 hours to confirm your enrollment and schedule a demo class.</p>
              <Button onClick={() => setSubmitted(false)} className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                Submit Another Enrollment
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-hero py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">Online Enrollment</h1>
          <p className="text-primary-foreground/80 text-lg">Fill the form below to enroll your child in the Indian Abacus program.</p>
        </div>
      </section>

      <section className="bg-section py-12 md:py-16">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-elevated">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="studentName" render={({ field }) => (
                    <FormItem><FormLabel>Student Name *</FormLabel><FormControl><Input placeholder="Enter student's name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="parentName" render={({ field }) => (
                    <FormItem><FormLabel>Parent Name *</FormLabel><FormControl><Input placeholder="Enter parent's name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="age" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select age" /></SelectTrigger></FormControl>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => i + 5).map((age) => (
                            <SelectItem key={age} value={String(age)}>{age} years</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="schoolName" render={({ field }) => (
                    <FormItem><FormLabel>School Name *</FormLabel><FormControl><Input placeholder="Enter school name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem><FormLabel>City *</FormLabel><FormControl><Input placeholder="Enter your city" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Contact Number *</FormLabel><FormControl><Input placeholder="+91 XXXXX XXXXX" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email *</FormLabel><FormControl><Input type="email" placeholder="parent@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="centre" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Centre *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select a centre" /></SelectTrigger></FormControl>
                      <SelectContent>
                        {centreOptions.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Message (Optional)</FormLabel><FormControl><Textarea placeholder="Any specific requirements..." rows={3} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-cta font-bold text-base">
                  Submit Enrollment
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
