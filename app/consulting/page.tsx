// app/consulting/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  Users,
  Target,
  FileText,
  CreditCard,
  RefreshCw,
  Briefcase,
  DollarSign,
  AlertCircle,
  X,
  Phone,
  Mail,
  Send,
  Printer,
  Download,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Award,
  Globe,
  Eye,
  Copy,
  ExternalLink,
} from "lucide-react";

// ---------- TYPING ----------
type Package = {
  id: string;
  name: string;
  duration: string;
  price: number;
  features: string[];
  bestFor: string;
};

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  result: string;
  avatar: string;
};

type FAQ = {
  q: string;
  a: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  industry: string;
  address: string;
  representative: string;
  revenue: string;
  challenge: string;
  outcome: string;
  urgency: string;
  budget: string;
  packageId: string;
  serviceType: string;
};

// ---------- DATA ----------
const packages: Package[] = [
  {
    id: "quick",
    name: "Quick Strategy Session",
    duration: "30 minutes",
    price: 29,
    features: [
      "Rapid problem diagnosis",
      "Actionable next steps",
      "Resource recommendations",
      "Follow‑up summary",
    ],
    bestFor: "Startups & founders",
  },
  {
    id: "growth",
    name: "Business Growth Call",
    duration: "1 hour",
    price: 49,
    features: [
      "Deep dive into your model",
      "Custom growth roadmap",
      "Performance metrics review",
      "30‑day support via email",
    ],
    bestFor: "Scaling companies",
  },
  {
    id: "vip",
    name: "VIP Half‑Day Consulting",
    duration: "4 hours",
    price: 79,
    features: [
      "Full business audit",
      "Strategy documentation",
      "Implementation plan",
      "2 follow‑up calls",
    ],
    bestFor: "Established enterprises",
  },
  {
    id: "executive",
    name: "Executive Full‑Day Intensive",
    duration: "8 hours",
    price: 99,
    features: [
      "End‑to‑end transformation plan",
      "Team workshop (optional)",
      "Quarterly check‑ins",
      "Priority 24/7 chat access",
    ],
    bestFor: "C‑suite & boards",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tinashe Chizema",
    role: "HR Director",
    company: "Chizema Holdings",
    content:
      "The strategy call gave us a clear roadmap to automate our HR processes. Saved us hundreds of hours.",
    rating: 5,
    result: "60% efficiency gain",
    avatar: "TC",
  },
  {
    id: 2,
    name: "David Moyo",
    role: "Lead Consultant",
    company: "HR David Consultancy",
    content:
      "Executive session was transformative. Peter's insights on compliance were spot on.",
    rating: 5,
    result: "Compliance cost cut by 35%",
    avatar: "DM",
  },
  {
    id: 3,
    name: "Donald Makoni",
    role: "CEO",
    company: "Donald Electricals",
    content:
      "From struggling with digital transformation to full automation. Worth every cent.",
    rating: 5,
    result: "Revenue +120% YoY",
    avatar: "DM",
  },
];

const faqs: FAQ[] = [
  {
    q: "How do I book a strategy call?",
    a: "Select your preferred package, choose a date/time slot, fill in the professional application form, and confirm. You'll receive a confirmation email instantly.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 100% money‑back guarantee if you're not satisfied within 7 days of the session.",
  },
  {
    q: "Is my information confidential?",
    a: "Absolutely. All calls and documents are protected by a strict NDA and GDPR‑compliant data handling.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes, up to 24 hours before the session at no extra cost.",
  },
  {
    q: "What payment methods?",
    a: "All major credit cards, PayPal, and bank transfer.",
  },
  {
    q: "How does the VIP day work?",
    a: "We send a pre‑call questionnaire, then a full day of deep work including strategy, documentation, and actionable plans.",
  },
];

// ---------- CLIENT-ONLY WRAPPER (fixes hydration) ----------
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return <>{children}</>;
}

// ---------- COMPONENTS ----------
// AI Chat Widget (simulated)
const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "ai", content: "Hello! I'm your AI strategy advisor. Ask me about business growth, automation, or compliance." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", content: "Thanks for your question! Our strategy calls can help with that. Would you like to book a session with Peter Phiri?" }]);
    }, 800);
    setInput("");
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-electric-blue to-cyan p-3 rounded-full shadow-lg shadow-electric-blue/50"
      >
        <MessageSquare size={24} className="text-navy-deep" />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-32 right-6 w-80 bg-navy-light border border-electric-blue/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-electric-blue/20 p-3 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Sparkles size={16} className="text-electric-blue" />
                <span className="font-semibold text-white">AI Strategy Advisor</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div className="h-80 overflow-y-auto p-3 space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-lg p-2 text-sm ${msg.role === "user" ? "bg-electric-blue text-white" : "bg-navy-deep text-gray-200"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="p-2 border-t border-electric-blue/20 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask anything..."
                className="flex-1 bg-navy-deep text-white rounded-lg px-3 py-1 text-sm"
              />
              <button onClick={sendMessage} className="bg-electric-blue p-1 rounded-lg"><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Mouse-follow lighting effect (simple but effective)
const MouseLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      className="fixed pointer-events-none z-0 transition-all duration-300"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, rgba(0,180,216,0) 70%)",
        borderRadius: "50%",
      }}
    />
  );
};

// Multi-step Form components (unchanged, but we ensure all selects have default values)
const FormStep1 = ({ formData, setFormData, onNext }: any) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-5"
  >
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
      <input
        type="text"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Your Position/Title</label>
      <input
        type="text"
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Company Address</label>
      <input
        type="text"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Name of Company Representative (if different)</label>
      <input
        type="text"
        value={formData.representative}
        onChange={(e) => setFormData({ ...formData, representative: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <button
      onClick={onNext}
      disabled={!formData.name || !formData.email || !formData.phone}
      className="w-full bg-electric-blue hover:bg-cyan text-navy-deep font-semibold py-3 rounded-lg transition disabled:opacity-50"
    >
      Continue →
    </button>
  </motion.div>
);

const FormStep2 = ({ formData, setFormData, onNext, onBack }: any) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-5"
  >
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
      <select
        value={formData.industry}
        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      >
        <option value="">Select industry</option>
        <option>Finance</option>
        <option>Technology</option>
        <option>Retail</option>
        <option>Manufacturing</option>
        <option>Healthcare</option>
        <option>Other</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Monthly Revenue Range</label>
      <select
        value={formData.revenue}
        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      >
        <option value="">Select range</option>
        <option>&lt; $5k</option>
        <option>$5k – $20k</option>
        <option>$20k – $100k</option>
        <option>$100k+</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Main Business Challenge</label>
      <textarea
        value={formData.challenge}
        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
        rows={3}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Desired Outcome</label>
      <textarea
        value={formData.outcome}
        onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
        rows={3}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      />
    </div>
    <div className="flex gap-4">
      <button onClick={onBack} className="px-6 py-3 border border-electric-blue/50 rounded-lg text-white">Back</button>
      <button onClick={onNext} className="flex-1 bg-electric-blue hover:bg-cyan text-navy-deep font-semibold py-3 rounded-lg">Continue →</button>
    </div>
  </motion.div>
);

const FormStep3 = ({ formData, setFormData, onSubmit, onBack }: any) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-5"
  >
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Urgency Level</label>
      <select
        value={formData.urgency}
        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      >
        <option value="">Select urgency</option>
        <option>Low (2-3 months)</option>
        <option>Medium (1 month)</option>
        <option>High (2 weeks)</option>
        <option>Critical (ASAP)</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Budget Range (USD)</label>
      <select
        value={formData.budget}
        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      >
        <option value="">Select budget</option>
        <option>&lt; $100</option>
        <option>$100 – $500</option>
        <option>$500 – $1,000</option>
        <option>$1,000+</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Type of Service Requested</label>
      <select
        value={formData.serviceType}
        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      >
        <option value="">Select type</option>
        <option>Consulting Call (30min)</option>
        <option>Business Growth Call (1h)</option>
        <option>VIP Half-Day Session</option>
        <option>Executive Full-Day Intensive</option>
        <option>Custom Project</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Consultation Package</label>
      <select
        value={formData.packageId}
        onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
        className="w-full bg-navy-light border border-electric-blue/30 rounded-lg px-4 py-3 text-white"
      >
        <option value="">Select package</option>
        <option value="quick">Quick Strategy Session ($29)</option>
        <option value="growth">Business Growth Call ($49)</option>
        <option value="vip">VIP Half-Day ($79)</option>
        <option value="executive">Executive Full-Day ($99)</option>
      </select>
    </div>
    <div className="flex gap-4 mt-6">
      <button onClick={onBack} className="px-6 py-3 border border-electric-blue/50 rounded-lg text-white">Back</button>
      <button onClick={onSubmit} className="flex-1 bg-gradient-to-r from-electric-blue to-cyan text-navy-deep font-semibold py-3 rounded-lg hover:shadow-lg transition">
        Submit & Book →
      </button>
    </div>
  </motion.div>
);

// Main Page Component
export default function ConsultingPage() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    address: "",
    representative: "",
    revenue: "",
    challenge: "",
    outcome: "",
    urgency: "",
    budget: "",
    packageId: "",
    serviceType: "",
  });
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [generatedForm, setGeneratedForm] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-save draft (runs only on client)
  useEffect(() => {
    const saved = localStorage.getItem("consulting_draft");
    if (saved) setFormData(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("consulting_draft", JSON.stringify(formData));
  }, [formData]);

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
    setShowBooking(true);
    window.scrollTo({ top: document.getElementById("booking")?.offsetTop, behavior: "smooth" });
  };

  const handleBookingConfirm = () => {
    if (!bookingDate || !bookingTime) {
      alert("Please select a date and time slot.");
      return;
    }
    setShowBooking(false);
    setShowForm(true);
    setFormData(prev => ({ ...prev, packageId: selectedPackage?.id || "" }));
  };

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields first.");
      return;
    }
    setIsSubmitting(true);
    const fullData = { ...formData, bookingDate, bookingTime };
    setGeneratedForm(fullData);

    try {
      const res = await fetch("/api/consulting/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });
      if (res.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
        setShowForm(false);
        localStorage.removeItem("consulting_draft");
        setFormStep(1);
        setFormData({
          name: "", email: "", phone: "", company: "", position: "", industry: "", address: "", representative: "", revenue: "", challenge: "", outcome: "", urgency: "", budget: "", packageId: "", serviceType: "",
        });
        setBookingDate("");
        setBookingTime("");
      } else {
        alert("Sorry, there was an error sending your request. Please try again or contact directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection.");
    }
    setIsSubmitting(false);
  };

  const printApplication = () => {
    if (!generatedForm) return;
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html><head><title>Consulting Application</title><style>body{font-family:sans-serif;padding:2rem;} table{border-collapse:collapse;width:100%} td,th{border:1px solid #ccc;padding:8px}</style></head><body>
        <h1>Consulting Application</h1>
        <p><strong>Generated on:</strong> ${new Date().toLocaleString()}</p>
        <h2>Personal & Business Details</h2>
        <table>${Object.entries(generatedForm).map(([k,v]) => `<tr><th>${k}</th><td>${v}</td></td>`).join("")}</table>
        <p><strong>Selected Date:</strong> ${bookingDate} at ${bookingTime}</p>
        </body></html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const availableDates = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d.toISOString().split("T")[0];
  });
  const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-deep via-navy to-navy-deep overflow-x-hidden relative">
      {/* Client-only components: MouseLight and AI Chat Widget */}
      <ClientOnly>
        <MouseLight />
        <AIChatWidget />
      </ClientOnly>

      {/* Floating animated gradients (safe for SSR) */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Sticky floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.a
          href="#packages"
          whileHover={{ scale: 1.05 }}
          className="bg-electric-blue text-navy-deep px-5 py-2 rounded-full font-semibold shadow-lg shadow-electric-blue/20 flex items-center gap-2"
        >
          <Zap size={18} /> Book a Call
        </motion.a>
      </div>

      {/* HERO SECTION with animated stats */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-transparent to-cyan/10 animate-pulse" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue via-cyan to-electric-blue bg-clip-text text-transparent">
              AI‑Powered Executive Advisory
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mt-6 max-w-3xl mx-auto">
              Get direct access to <span className="text-electric-blue">Peter Phiri, Kumbulani Phiri, Chido Phiri</span> – expert strategists in business, finance, and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-3 bg-electric-blue hover:bg-cyan text-navy-deep font-semibold rounded-full shadow-lg transition">
                Book a Strategy Call
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => setShowForm(true)} className="px-8 py-3 border border-electric-blue text-white rounded-full hover:bg-electric-blue/10 transition">
                Apply for VIP Consulting
              </motion.button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[{ label: "Projects Completed", value: "80+" }, { label: "Happy Clients", value: "95%" }, { label: "Experts", value: "3" }, { label: "Avg Response", value: "< 2h" }].map((stat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + idx * 0.1 }} className="glass p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-electric-blue">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Choose your experience – starting at <span className="text-electric-blue">$29</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <motion.div key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="glass-card p-6 rounded-2xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all">
                <div className="text-sm font-semibold text-electric-blue mb-2">{pkg.bestFor}</div>
                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <div className="text-3xl font-bold text-electric-blue mt-2">${pkg.price}</div>
                <div className="text-gray-400 text-sm mb-4">{pkg.duration}</div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-gray-300 text-sm"><CheckCircle size={16} className="text-electric-blue" /> {f}</li>))}
                </ul>
                <button onClick={() => handlePackageSelect(pkg)} className="w-full py-2 border border-electric-blue rounded-lg text-electric-blue hover:bg-electric-blue hover:text-navy-deep transition">Book Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING UI */}
      {showBooking && selectedPackage && (
        <section id="booking" className="py-20 px-6 bg-navy-deep/50">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule your {selectedPackage.name}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div><label className="block text-gray-300 mb-2">Select date</label><div className="grid grid-cols-3 gap-2">{availableDates.map((date) => (<button key={date} onClick={() => setBookingDate(date)} className={`p-2 rounded-lg border ${bookingDate === date ? "bg-electric-blue text-navy-deep" : "border-gray-600 text-white"}`}>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</button>))}</div></div>
                <div><label className="block text-gray-300 mb-2">Select time</label><div className="grid grid-cols-2 gap-2">{timeSlots.map((slot) => (<button key={slot} onClick={() => setBookingTime(slot)} className={`p-2 rounded-lg border ${bookingTime === slot ? "bg-electric-blue text-navy-deep" : "border-gray-600 text-white"}`}>{slot}</button>))}</div></div>
              </div>
              <div className="mt-8 flex justify-end gap-4"><button onClick={() => setShowBooking(false)} className="px-6 py-2 border border-gray-500 rounded-lg text-gray-300">Cancel</button><button onClick={handleBookingConfirm} className="px-6 py-2 bg-electric-blue rounded-lg text-navy-deep font-semibold">Confirm & Continue →</button></div>
            </motion.div>
          </div>
        </section>
      )}

      {/* APPLICATION FORM MODAL */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-navy-light rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6"><h3 className="text-2xl font-bold text-white">Professional Application Form</h3><button onClick={() => setShowForm(false)}><X size={24} /></button></div>
              <div className="flex mb-8 gap-2">{ [1,2,3].map((step) => (<div key={step} className={`flex-1 h-1 rounded-full ${formStep >= step ? "bg-electric-blue" : "bg-gray-600"}`} />)) }</div>
              <AnimatePresence mode="wait">
                {formStep === 1 && <FormStep1 formData={formData} setFormData={setFormData} onNext={() => setFormStep(2)} />}
                {formStep === 2 && <FormStep2 formData={formData} setFormData={setFormData} onNext={() => setFormStep(3)} onBack={() => setFormStep(1)} />}
                {formStep === 3 && <FormStep3 formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} onBack={() => setFormStep(2)} />}
              </AnimatePresence>
              {isSubmitting && <div className="text-center mt-4 text-electric-blue">Sending your request...</div>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS + GENERATE FORM BUTTON */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-navy-deep px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <CheckCircle size={20} /> Application sent! We'll contact you within 24h.
          </motion.div>
        )}
      </AnimatePresence>
      {generatedForm && !showForm && (
        <div className="fixed bottom-24 left-4 z-40 flex gap-2">
          <button onClick={printApplication} className="bg-electric-blue text-navy-deep px-4 py-2 rounded-full text-sm flex items-center gap-1"><Printer size={16} /> Print Application</button>
        </div>
      )}

      {/* VIP EXPERIENCE */}
      <section className="py-20 px-6 bg-gradient-to-r from-navy to-navy-deep">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">The VIP Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ { icon: <Zap />, title: "Direct Expert Access", desc: "Work 1:1 with Peter & team" }, { icon: <Target />, title: "Fast-Track Solutions", desc: "Actionable plans in days" }, { icon: <Shield />, title: "Confidential Consulting", desc: "NDA protected" }, { icon: <Users />, title: "Executive Guidance", desc: "C‑suite insights" }, { icon: <FileText />, title: "Custom Action Plans", desc: "Tailored to your business" }, { icon: <RefreshCw />, title: "Priority Support", desc: "24/7 chat & email" } ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl text-center"><div className="text-electric-blue w-12 h-12 mx-auto mb-4">{item.icon}</div><h3 className="text-xl font-semibold text-white">{item.title}</h3><p className="text-gray-400 text-sm mt-2">{item.desc}</p></motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Trusted by industry leaders</h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">{[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (<Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-gray-200 text-lg italic">“{testimonials[activeTestimonial].content}”</p>
                <div className="flex items-center gap-4 mt-6"><div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue font-bold">{testimonials[activeTestimonial].avatar}</div><div><div className="font-bold text-white">{testimonials[activeTestimonial].name}</div><div className="text-sm text-gray-400">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</div><div className="text-xs text-electric-blue mt-1">Result: {testimonials[activeTestimonial].result}</div></div></div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-3 mt-8">{testimonials.map((_, idx) => (<button key={idx} onClick={() => setActiveTestimonial(idx)} className={`w-2 h-2 rounded-full transition ${idx === activeTestimonial ? "bg-electric-blue w-6" : "bg-gray-500"}`} />))}</div>
          </div>
        </div>
      </section>

      {/* FAQ and Final CTA */}
      <section className="py-20 px-6 bg-navy-deep/50"><div className="container mx-auto max-w-3xl"><h2 className="text-4xl font-bold text-center mb-12">Frequently asked questions</h2><div className="space-y-4">{faqs.map((faq, idx) => (<div key={idx} className="glass rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between items-center p-5 text-left"><span className="font-semibold text-white">{faq.q}</span>{openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</button><AnimatePresence>{openFaq === idx && (<motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden"><div className="p-5 pt-0 text-gray-400 border-t border-electric-blue/20">{faq.a}</div></motion.div>)}</AnimatePresence></div>))}</div></div></section>

      <section className="py-24 px-6 text-center relative"><div className="absolute inset-0 bg-gradient-to-t from-electric-blue/10 to-transparent" /><div className="relative z-10"><motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-white mb-6">Ready to Solve Your Biggest Challenge?</motion.h2><div className="flex flex-wrap justify-center gap-4"><motion.button whileHover={{ scale: 1.05 }} onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-3 bg-electric-blue rounded-full text-navy-deep font-semibold text-lg shadow-xl">Schedule Your Session</motion.button><motion.button whileHover={{ scale: 1.05 }} onClick={() => setShowForm(true)} className="px-8 py-3 border-2 border-white/30 rounded-full text-white hover:bg-white/10">Speak to an Advisor</motion.button></div></div></section>
    </div>
  );
}