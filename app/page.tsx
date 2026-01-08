"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaEnvelope, 
  FaWhatsapp, 
  FaCode, 
  FaDatabase, 
  FaLaptopCode, 
  FaChalkboardTeacher,
  FaPhp,
  FaPython
} from "react-icons/fa";
import { SiNextdotjs, SiLaravel, SiTailwindcss, SiMysql, SiGit } from "react-icons/si";
import ContactForm from "@/components/ContactForm"; 

const data = {
  name: "Muhammad Luthfi Bilqisti",
  role: "Web Developer & Educator",
  about: "Profesional IT dengan pengalaman dalam pengembangan web full-stack. Memiliki passion dalam membangun sistem yang efisien dan user-friendly. Saat ini aktif mengajar dan mengembangkan aplikasi berbasis web, menggabungkan pemahaman teknis dengan kemampuan komunikasi yang baik.",
  skills: [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <SiGit /> },
    { name: "VS Code", icon: <FaCode /> },
  ],
  experience: [
    {
      role: "Guru & IT Staff",
      company: "SMAN 1 Margaasih",
      year: "Juni 2019 – Sekarang",
      desc: "Mengelola infrastruktur IT sekolah, mengembangkan sistem informasi internal, serta mengajar siswa dalam bidang teknologi informasi dan komunikasi.",
      icon: <FaChalkboardTeacher />
    },
    {
      role: "Lulusan Sistem Informasi",
      company: "STMIK Indonesia Mandiri",
      year: "Lulus 2017",
      desc: "Menyelesaikan studi dengan fokus pada analisis sistem dan pengembangan perangkat lunak.",
      icon: <FaLaptopCode />
    }
  ],
  projects: [
    {
      title: "Sistem Informasi Pendataan Atlit",
      client: "Aquatic Indonesia",
      tech: "Laravel, MySQL",
      desc: "Platform digital terintegrasi untuk manajemen data atlit renang seluruh Indonesia, memudahkan pemantauan prestasi dan administrasi.",
      link: "#" 
    },
    {
      title: "LMS Sekolah",
      client: "SMAN 1 Margaasih",
      tech: "PHP, JavaScript",
      desc: "Learning Management System (LMS) custom untuk memfasilitasi kegiatan belajar mengajar daring yang efektif dan terstruktur.",
      link: "#"
    },
    {
      title: "Website Profil Sekolah",
      client: "SMAN 1 Margaasih",
      tech: "Next.js, Tailwind",
      desc: "Portal informasi publik sekolah dengan desain modern, responsif, dan performa tinggi untuk meningkatkan citra digital sekolah.",
      link: "#"
    }
  ],
  contact: {
    phone: "+62 8773-2144-500",
    email: "bilqimlb@gmail.com",
    github: "https://github.com/upiw256",
    location: "Bandung, Indonesia"
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-teal-400 tracking-tighter cursor-pointer"
          >
            MLB<span className="text-slate-100">.Dev</span>
          </motion.h1>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-teal-400 font-medium tracking-wide mb-2">Halo, nama saya</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 tracking-tight">{data.name}.</h1>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">{data.role}.</h2>
              <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
                {data.about}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 justify-center md:justify-start pt-4"
            >
              <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400/10 transition transform hover:scale-110">
                <FaGithub size={22} />
              </a>
              <a href={`mailto:${data.contact.email}`} className="p-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400/10 transition transform hover:scale-110">
                <FaEnvelope size={22} />
              </a>
              <a href={`https://wa.me/${data.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400/10 transition transform hover:scale-110">
                <FaWhatsapp size={22} />
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative group"
          >
            <div className="relative aspect-[4/5] w-64 md:w-80 mx-auto">
               {/* Frame Border Effect */}
               <div className="absolute inset-0 border-2 border-teal-500/50 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
               
               {/* Image Container */}
               <div className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800 shadow-2xl">
                  <Image 
                    src="/my-portfolio/profile.png" 
                    alt="Profile Picture"
                    fill
                    className="object-cover object-top hover:scale-105 transition duration-500"
                    priority
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS & EXPERIENCE --- */}
      <section id="about" className="py-24 px-6 bg-slate-800/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
              <span className="text-teal-400 text-xl">01.</span> Pengalaman Kerja
            </h3>
            <div className="space-y-12 border-l border-slate-700 ml-3 pl-8 relative">
              {data.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[42px] top-0 p-2 bg-slate-900 border border-teal-500 rounded-full text-teal-400 text-xs">
                    {exp.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-100">{exp.role}</h4>
                  <p className="text-teal-400 font-mono text-sm mb-3">{exp.company} | {exp.year}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
              <span className="text-teal-400 text-xl">02.</span> Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.skills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-teal-400/50 hover:bg-slate-800 transition group cursor-default"
                >
                  <div className="text-3xl text-slate-400 group-hover:text-teal-400 transition-colors mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold text-slate-100 mb-12 flex items-center gap-2">
            <span className="text-teal-400 text-xl">03.</span> Proyek Unggulan
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col justify-between bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-400/30 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-teal-500/10"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-teal-400 text-4xl">
                      <FaCode />
                    </div>
                    <div className="flex gap-4">
                      <a href={project.link} className="text-slate-400 hover:text-teal-400 transition">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-500/80 mt-auto">
                  {project.tech.split(',').map((t, i) => (
                    <span key={i} className="bg-slate-900 px-2 py-1 rounded">{t.trim()}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (Integrated with Formspree) --- */}
      <section id="contact" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        {/* Glow Decoration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              <span className="text-teal-400">04.</span> Hubungi Saya
            </h3>
            <p className="text-slate-400 max-w-lg mx-auto text-lg">
              Tertarik bekerja sama atau punya pertanyaan? Kirim pesan langsung di sini.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Contact Info (Left Side) */}
            <div className="md:col-span-2 space-y-8 mt-4">
               <motion.div 
                 whileHover={{ x: 5 }}
                 className="flex items-center gap-4 group cursor-pointer"
               >
                  <div className="p-4 bg-slate-800 rounded-lg text-teal-400 group-hover:bg-teal-400 group-hover:text-slate-900 transition-colors duration-300">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${data.contact.email}`} className="text-slate-200 font-medium hover:text-teal-400 transition text-lg">{data.contact.email}</a>
                  </div>
               </motion.div>
               
               <motion.div 
                 whileHover={{ x: 5 }}
                 className="flex items-center gap-4 group cursor-pointer"
               >
                  <div className="p-4 bg-slate-800 rounded-lg text-teal-400 group-hover:bg-teal-400 group-hover:text-slate-900 transition-colors duration-300">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">WhatsApp</p>
                    <a href={`https://wa.me/${data.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" className="text-slate-200 font-medium hover:text-teal-400 transition text-lg">{data.contact.phone}</a>
                  </div>
               </motion.div>

               <div className="pt-8 border-t border-slate-800">
                 <p className="text-slate-500 text-sm mb-4">Atau temukan saya di sosial media:</p>
                 <a href={data.contact.github} target="_blank" className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition">
                   <FaGithub size={20} /> github.com/upiw256
                 </a>
               </div>
            </div>

            {/* Form (Right Side) */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center bg-slate-950 border-t border-slate-900">
        <p className="text-slate-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} Built with Next.js & Tailwind by <span className="text-teal-500">Luthfi Bilqisti</span>
        </p>
      </footer>

    </main>
  );
}