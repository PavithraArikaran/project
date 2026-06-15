import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FiCheckCircle, FiCloud, FiDownload, FiHardDrive, FiMonitor, FiRefreshCw } from "react-icons/fi";
import { motion } from "framer-motion";

import windows from "../assets/windows.png";
import linux from "../assets/linux.png";
import mac from "../assets/mac-logo.png";
import web from "../assets/web.png";

function Download() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#/features" },
    { label: "Pricing", href: "#/pricing" },
    { label: "Download", href: "#/download" },
    { label: "About", href: "#/about" },
  ];

  const platforms = [
    {
      name: "Windows",
      image: windows,
      version: "v2.4.1",
      size: "86 MB",
      detail: "Installer for Windows 10 and 11 with automatic updates.",
      cta: "Download for Windows",
    },
    {
      name: "macOS",
      image: mac,
      version: "v2.4.1",
      size: "92 MB",
      detail: "Universal app for Apple silicon and Intel Macs.",
      cta: "Download for macOS",
    },
    {
      name: "Linux",
      image: linux,
      version: "v2.4.1",
      size: "78 MB",
      detail: "AppImage package with Debian build support.",
      cta: "Download for Linux",
    },
    {
      name: "Web App",
      image: web,
      version: "Live",
      size: "Browser",
      detail: "Launch Hivenex instantly from any modern browser.",
      cta: "Launch Web App",
    },
  ];

  const setupSteps = [
    "Download the app for your preferred platform.",
    "Sign in or create a Hivenex workspace.",
    "Sync invoices, expenses, reports, and team access.",
  ];

  const highlights = [
    { icon: FiCloud, title: "Cloud synced", desc: "Your workspace stays current across desktop and web." },
    { icon: FiRefreshCw, title: "Auto updates", desc: "New improvements ship quietly in the background." },
    { icon: FiHardDrive, title: "Offline ready", desc: "Keep working locally when your connection drops." },
  ];

  return (
    <div className="font-[Poppins] min-h-screen overflow-hidden relative text-white bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_9%,rgba(212,175,55,0.22)_0%,transparent_34%),radial-gradient(circle_at_84%_20%,rgba(245,230,168,0.15)_0%,transparent_30%),radial-gradient(circle_at_52%_92%,rgba(44,82,104,0.2)_0%,transparent_36%),linear-gradient(135deg,#050403_0%,#100c05_48%,#000000_100%)]" />

      <motion.div
        animate={{ x: [0, 120, -70, 0], y: [0, -80, 70, 0], scale: [1, 1.18, 0.92, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-44 -left-40 h-[760px] w-[760px] rounded-full bg-[conic-gradient(from_180deg,#D4AF3735,#2c526826,#17100a24,#F5E6A824,#D4AF3735)] blur-[150px]"
      />

      <motion.div
        animate={{ x: [0, -130, 80, 0], y: [0, 100, -75, 0], scale: [1, 0.88, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-44 h-[820px] w-[820px] rounded-full bg-[conic-gradient(from_45deg,#1b140b28,#D4AF372d,#2c52682b,#0f0d0a30,#1b140b28)] blur-[170px]"
      />

      <div className="relative z-10">
        <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-3xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <motion.a
              href="#/"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#FFF4C7] bg-clip-text text-transparent"
            >
              Hivenex
            </motion.a>

            <div className="hidden md:flex gap-8 text-gray-300 text-sm font-medium">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="hover:text-[#F5E6A8] transition relative group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="#/login" className="inline-flex h-10 items-center text-gray-300 hover:text-[#F5E6A8] transition">
                Log in
              </a>
              <motion.a
                href="#/pricing"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212,175,55,0.8)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-5 py-2 rounded-xl font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                Start Free Trial
              </motion.a>
            </div>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <HiMenu size={26} />
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300"
            >
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#/login">Log in</a>
            </motion.div>
          )}
        </nav>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15"
          />

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.45em] text-xs mb-5">
                DOWNLOAD
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] bg-gradient-to-b from-white via-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent">
                Install Hivenex anywhere work happens.
              </h1>
              <p className="mt-7 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                Use the desktop app for focused accounting work, or launch the
                secure web workspace when you need instant access.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#platforms"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-7 py-4 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.45)]"
                >
                  <FiDownload />
                  Choose Platform
                </motion.a>
                <motion.a
                  href="#/pricing"
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="text-center border border-white/20 bg-white/5 backdrop-blur-xl px-7 py-4 rounded-2xl text-lg hover:text-[#F5E6A8] transition"
                >
                  Compare Plans
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.75 }}
              className="relative border border-white/10 bg-white/[0.04] backdrop-blur-2xl rounded-[28px] p-6 shadow-[0_0_70px_rgba(212,175,55,0.1)]"
            >
              <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,#D4AF371f,transparent_64%)]" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm text-gray-400">Latest release</p>
                    <h2 className="mt-1 text-2xl font-bold">Hivenex 2.4.1</h2>
                  </div>
                  <FiMonitor className="h-12 w-12 rounded-2xl bg-[#D4AF37]/10 p-3 text-[#F5E6A8]" />
                </div>

                <div className="mt-6 space-y-4">
                  {setupSteps.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.12 }}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <FiCheckCircle className="mt-0.5 h-5 w-5 flex-none text-[#F5E6A8]" />
                      <p className="text-sm leading-relaxed text-gray-300">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="platforms" className="relative py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="text-center mb-12"
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4">
                PLATFORMS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Pick your workspace
              </h2>
              <p className="text-gray-400 mt-4">
                Every option connects to the same secure Hivenex account.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {platforms.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 24px 70px rgba(212,175,55,0.14)" }}
                  className="relative bg-white/[0.035] backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden group hover:border-[#D4AF37]/40 transition duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,#D4AF3718,transparent_68%)]" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/35">
                      <img src={item.image} alt={item.name} className="h-12 w-12 object-contain" />
                    </div>
                    <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#F5E6A8]">
                      {item.version}
                    </span>
                  </div>
                  <h3 className="relative z-10 mt-6 text-2xl font-bold">{item.name}</h3>
                  <p className="relative z-10 mt-3 min-h-16 text-sm leading-relaxed text-gray-400">
                    {item.detail}
                  </p>
                  <div className="relative z-10 mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-gray-300">
                    <span>Package</span>
                    <span className="text-[#F5E6A8]">{item.size}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative z-10 mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-3 text-sm font-bold text-[#F5E6A8] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F5E6A8] hover:text-black transition"
                  >
                    <FiDownload />
                    {item.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5E6A8] text-black shadow-[0_0_26px_rgba(212,175,55,0.35)]">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Download;
