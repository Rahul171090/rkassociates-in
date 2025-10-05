import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    "⚡ Electrical Installation (HT/LT Panels, Transformers, LED Fittings)",
    "💧 Pump Automation with PLC & HMI",
    "📊 Centralized Water Logging Systems",
    "☎ Complaint Call Centre with CRM Integration",
    "🎥 CCTV & Security Solutions",
    "🚪 Access Control & Boom Barrier Systems",
  ];

  const projects = [
    { name: "PWD Delhi", img: "https://via.placeholder.com/400x250?text=PWD+Delhi" },
    { name: "CPWD", img: "https://via.placeholder.com/400x250?text=CPWD" },
    { name: "Private Groups", img: "https://via.placeholder.com/400x250?text=Private+Groups" },
    { name: "Smart Water & Drainage Automation", img: "https://via.placeholder.com/400x250?text=Smart+Water+Automation" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">R K Associates</h1>
        <Button variant="ghost" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </Button>
        <nav className="hidden lg:flex space-x-6">
          <a href="#intro" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#complaint" className="hover:text-yellow-400">Complaint</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>

      {menuOpen && (
        <nav className="lg:hidden bg-gray-800 text-white p-4 space-y-4">
          <a href="#intro" className="block">Home</a>
          <a href="#about" className="block">About</a>
          <a href="#services" className="block">Services</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#complaint" className="block">Complaint</a>
          <a href="#contact" className="block">Contact</a>
        </nav>
      )}

      {/* Intro Page */}
      <section id="intro" className="bg-yellow-500 text-gray-900 py-28 text-center">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6">
          Welcome to R K Associates
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-xl max-w-3xl mx-auto">
          We are trusted Electrical Contractors and Automation Experts in Delhi, delivering complete solutions in
          Electrical Installations, Pump Automation, Water Logging Systems, CCTV, Access Control, and Complaint Management.
        </motion.p>
        <div className="mt-8">
          <a href="#services">
            <Button className="bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-800">
              Explore Our Services
            </Button>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          R K Associates is a leading Electrical Contractor in Delhi, specializing in Electrical Installation Work,
          Pump Automation, Centralized Water Logging Systems, HVAC Automation, CCTV, Access Control, and Call Centre
          Operations with CRM integration. We have experience working with PWD, CPWD, and private groups.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <Card className="rounded-2xl shadow-md hover:shadow-xl">
                <CardContent className="p-6">{service}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Clients & Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <Card className="rounded-2xl shadow-md overflow-hidden">
                <img src={project.img} alt={project.name} className="w-full h-40 object-cover" />
                <CardContent className="p-4 font-medium text-center">{project.name}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Complaint Form */}
      <section id="complaint" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Register a Complaint</h2>
        <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required />
          <textarea placeholder="Complaint Details" className="w-full p-3 border rounded-lg" rows="5" required></textarea>
          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg">Submit Complaint</Button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p><strong>Address:</strong> 1st Floor, Block BK-240, Shalimar Bagh, New Delhi-110088</p>
        <p><strong>Email:</strong> rkassociatesgem@gmail.com</p>
        <p><strong>Phone:</strong> +91-8700279944</p>
        <p className="mt-4">Scan to Pay:</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=8700279944@upi&pn=R%20K%20Associates&size=150x150" alt="QR Code" className="mx-auto mt-3 rounded-lg shadow-md" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>&copy; 2025 R K Associates. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
