import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

import windows from "../assets/windows.png";
import linux from "../assets/linux.png";
import mac from "../assets/mac-logo.png";
import web from "../assets/web.png";

function Home() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Windows", image: windows },
    { name: "macOS", image: mac },
    { name: "Linux", image: linux },
    { name: "Web App", image: web },
  ];

  const features = [
    {
      title: "Fast Invoicing",
      desc: "Create invoices instantly with automation.",
    },
    {
      title: "Expense Tracking",
      desc: "Track every business expense in real time.",
    },
    {
      title: "Smart Reports",
      desc: "Visual insights for better decisions.",
    },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen overflow-hidden relative">

      {/* ================= GLOBAL GLOW ================= */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5E6A8]/10 blur-[150px] rounded-full" />

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          >
            Hivenex
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-gray-300 text-sm">
            {["Features", "Pricing", "Download", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#F5E6A8] transition duration-300 relative group"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="hidden md:flex gap-4">
            <button className="text-gray-300 hover:text-[#F5E6A8] transition">
              Log in
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-5 py-2 rounded-xl font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.9)] transition"
            >
              Start Free Trial
            </motion.button>
          </div>

          {/* MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <HiMenu size={26} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300"
          >
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Download</a>
            <a href="#">Support</a>
          </motion.div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-32">

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* FLOATING GLOWS */}
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-[#D4AF37]/15 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute right-[10%] top-[30%] w-[300px] h-[300px] bg-[#F5E6A8]/10 blur-[120px] rounded-full"
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight bg-gradient-to-b from-white via-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            Simple Accounting <br />
            for Modern Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Manage invoices, track expenses, and generate reports —
            all inside a premium cloud accounting platform.
          </motion.p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_60px_rgba(212,175,55,0.9)] transition"
            >
              Start Free Trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white/20 bg-white/5 backdrop-blur-lg px-8 py-4 rounded-2xl text-lg hover:border-[#D4AF37]/40 hover:text-[#F5E6A8] transition"
            >
              Download App
            </motion.button>
          </div>

          {/* STATS */}
          <div className="mt-14 flex justify-center gap-10 flex-wrap text-sm text-gray-400">
            <span>✔ No credit card required</span>
            <span>✔ Cloud synced</span>
            <span>✔ Secure storage</span>
          </div>

          {/* TRUSTED */}
          <div className="mt-20">
            <p className="text-gray-500 text-sm mb-8 uppercase tracking-[0.3em]">
              Trusted Worldwide
            </p>

            <div className="flex justify-center flex-wrap gap-10 opacity-60 text-xl">
              <span>Google</span>
              <span>Microsoft</span>
              <span>Stripe</span>
              <span>Slack</span>
            </div>
          </div>
        </div>
      </section>
       {/* ================= FEATURES ================= */}
<section className="relative py-20 border-t border-white/10">

{/* Glow */}
<div className="absolute left-0 top-10 w-[250px] h-[250px] bg-[#D4AF37]/10 blur-[120px] rounded-full" />

<div className="max-w-7xl mx-auto px-6">

  {/* Heading */}
  <div className="text-center mb-12">
    <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4">
      FEATURES
    </p>

    <h2 className="text-4xl md:text-5xl font-bold">
      Powerful Features
    </h2>

    <p className="text-gray-400 mt-4">
      Everything you need to manage your finances.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-5">

    {features.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 }}
        whileHover={{ y: -6 }}
        className="relative bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-7 overflow-hidden group hover:border-[#D4AF37]/30 transition duration-300"
      >

        {/* SOFT HOVER GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_70%)]" />

        {/* ICON */}
        <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5E6A8] shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-5" />

        {/* TITLE */}
        <h3 className="relative z-10 text-xl font-semibold">
          {item.title}
        </h3>

        {/* TEXT */}
        <p className="relative z-10 text-gray-400 mt-3 leading-relaxed text-sm">
          {item.desc}
        </p>

      </motion.div>
    ))}

  </div>
</div>
</section>

{/* ================= DASHBOARD ================= */}
<section className="relative py-20">

<div className="absolute inset-0 bg-[#D4AF37]/5 blur-[120px]" />

<div className="max-w-6xl mx-auto px-6">

  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="relative bg-white/[0.04] border border-white/10 rounded-[28px] backdrop-blur-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.08)]"
  >

    {/* TOP BAR */}
    <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/20">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-3 gap-5 p-6">

      {[1, 2, 3].map((card) => (
        <motion.div
          whileHover={{ y: -4 }}
          key={card}
          className="bg-black/25 border border-white/10 rounded-2xl p-5 hover:border-[#D4AF37]/20 transition"
        >

          <div className="h-4 w-28 rounded-full bg-white/10 mb-4" />

          <div className="h-9 w-36 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#F5E6A8]/70 mb-5" />

          <div className="space-y-2">
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 rounded-full bg-white/10 w-[80%]" />
            <div className="h-2 rounded-full bg-white/10 w-[60%]" />
          </div>

        </motion.div>
      ))}

    </div>
  </motion.div>
</div>
</section>

{/* ================= DOWNLOAD ================= */}
<section className="relative py-20 border-t border-white/10">

<div className="absolute right-0 top-10 w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[120px] rounded-full" />

<div className="max-w-7xl mx-auto px-6">

  {/* Heading */}
  <div className="text-center mb-12">
    <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4">
      DOWNLOAD
    </p>

    <h2 className="text-4xl md:text-5xl font-bold">
      Available Everywhere
    </h2>

    <p className="text-gray-400 mt-4">
      Choose your platform and get started instantly.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-4 gap-5">

    {items.map((item) => (
      <motion.div
        whileHover={{
          y: -6,
        }}
        key={item.name}
        className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center overflow-hidden group hover:border-[#D4AF37]/30 transition duration-300"
      >

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,#D4AF3715,transparent_70%)]" />

        {/* IMAGE */}
        <div className="relative z-10 w-20 h-20 rounded-full bg-black/30 flex items-center justify-center mx-auto mb-5 border border-white/10">

          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* NAME */}
        <h3 className="relative z-10 text-lg font-semibold">
          {item.name}
        </h3>

        {/* TEXT */}
        <p className="relative z-10 text-gray-400 mt-2 text-sm">
          Download available
        </p>

        {/* BUTTON */}
        <button className="relative z-10 mt-5 w-full py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 hover:text-[#F5E6A8] transition">
          Download
        </button>

      </motion.div>
    ))}

  </div>
</div>
</section>

{/* ================= CTA ================= */}
<section className="relative py-20 border-t border-white/10 text-center overflow-hidden">

<div className="absolute inset-0 bg-[#D4AF37]/5 blur-[100px]" />

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="relative z-10 max-w-3xl mx-auto px-6"
>

  <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-b from-white to-[#F5E6A8] bg-clip-text text-transparent">
    Ready to simplify your accounting?
  </h2>

  <p className="text-gray-400 mt-5 text-lg">
    Join thousands of modern businesses using Hivenex.
  </p>

  <motion.button
    whileHover={{ scale: 1.04 }}
    className="mt-8 bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-8 py-3.5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:shadow-[0_0_55px_rgba(212,175,55,0.8)] transition"
  >
    Get Started
  </motion.button>

</motion.div>

      
      </section>
    </div>
  );
}

export default Home;