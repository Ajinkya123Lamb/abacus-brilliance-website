import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const centres = [
  { name: "Indian Abacus – Anna Nagar", address: "45, 2nd Avenue, Anna Nagar", city: "Chennai", phone: "+91 98765 43210" },
  { name: "Indian Abacus – T. Nagar", address: "12, Usman Road, T. Nagar", city: "Chennai", phone: "+91 98765 43211" },
  { name: "Indian Abacus – Koramangala", address: "78, 4th Block, Koramangala", city: "Bangalore", phone: "+91 98765 43212" },
  { name: "Indian Abacus – Banjara Hills", address: "23, Road No. 12, Banjara Hills", city: "Hyderabad", phone: "+91 98765 43213" },
  { name: "Indian Abacus – Andheri West", address: "56, Link Road, Andheri West", city: "Mumbai", phone: "+91 98765 43214" },
  { name: "Indian Abacus – Salt Lake", address: "Block A, Salt Lake Sector V", city: "Kolkata", phone: "+91 98765 43215" },
  { name: "Indian Abacus – Gomti Nagar", address: "15, Vibhuti Khand, Gomti Nagar", city: "Lucknow", phone: "+91 98765 43216" },
  { name: "Indian Abacus – Aundh", address: "34, Aundh Road, Near D-Mart", city: "Pune", phone: "+91 98765 43217" },
  { name: "Indian Abacus – Vaishali Nagar", address: "89, Vaishali Nagar Main Road", city: "Jaipur", phone: "+91 98765 43218" },
];

const cities = [...new Set(centres.map((c) => c.city))].sort();

export default function Centres() {
  const [search, setSearch] = useState("");

  const filtered = centres.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="bg-hero py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">Our Centres</h1>
          <p className="text-primary-foreground/80 text-lg">Find an Indian Abacus Learning Centre near you.</p>
        </div>
      </section>

      <section className="bg-section py-12 md:py-16">
        <div className="container">
          <div className="relative max-w-md mx-auto mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by city or centre name..."
              className="pl-10 h-12 bg-card"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* City filter chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setSearch("")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${!search ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-muted"}`}
            >
              All Cities
            </button>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSearch(city)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${search === city ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-muted"}`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                <h3 className="font-bold text-lg text-foreground mb-3">{c.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{c.address}, {c.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{c.phone}</a>
                  </div>
                </div>
                <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                  <Link to={`/enroll?centre=${encodeURIComponent(c.name)}`}>Enroll at This Centre</Link>
                </Button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg font-semibold">No centres found matching "{search}"</p>
              <p className="text-sm mt-2">Try a different search term or browse all cities.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
