
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";

import windows from "../assets/windows.png";
import linux from "../assets/linux.png";
import mac from "../assets/mac-logo.png";
import web from "../assets/web.png";

function Home() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.35]);
  const ringScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.18]);
  const previewY = useTransform(scrollYProgress, [0.25, 0.65], [80, -40]);

  const items = [
    {
      name: "Windows",
      image: windows,
      detail: "Optimized desktop installer for Windows 10 and 11.",
      badge: "Recommended",
    },
    {
      name: "macOS",
      image: mac,
      detail: "Universal build for Apple silicon and Intel Macs.",
      badge: "Universal",
    },
    {
      name: "Linux",
      image: linux,
      detail: "Fast install options for AppImage and Debian systems.",
      badge: "Stable",
    },
    {
      name: "Web App",
      image: web,
      detail: "Open your secure cloud workspace instantly in browser.",
      badge: "Instant",
    },
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

  const particles = [
    "left-[8%] top-[18%] h-2 w-2",
    "left-[18%] top-[68%] h-1.5 w-1.5",
    "left-[34%] top-[24%] h-2.5 w-2.5",
    "left-[48%] top-[78%] h-1 w-1",
    "left-[62%] top-[16%] h-2 w-2",
    "left-[76%] top-[58%] h-1.5 w-1.5",
    "left-[90%] top-[30%] h-2.5 w-2.5",
    "left-[84%] top-[84%] h-1 w-1",
  ];

  return (
    <div className="font-[Poppins] min-h-screen overflow-hidden relative text-white bg-[#030303]">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-white shadow-[0_0_22px_rgba(212,175,55,0.75)]"
      />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(212,175,55,0.22)_0%,transparent_32%),radial-gradient(circle_at_84%_18%,rgba(245,230,168,0.16)_0%,transparent_30%),radial-gradient(circle_at_50%_95%,rgba(95,67,18,0.24)_0%,transparent_38%),linear-gradient(135deg,#050403_0%,#100c05_46%,#000000_100%)]" />

      <motion.div
        animate={{
          x: [0, 120, -70, 0],
          y: [0, -90, 80, 0],
          scale: [1, 1.25, 0.9, 1],
          rotate: [0, 18, -12, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-36 h-[760px] w-[760px] rounded-full bg-[conic-gradient(from_180deg,#D4AF3738,#5d421820,#17100a24,#F5E6A826,#D4AF3738)] blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -140, 80, 0],
          y: [0, 110, -80, 0],
          scale: [1, 0.82, 1.18, 1],
          rotate: [0, -16, 10, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-44 -right-40 h-[820px] w-[820px] rounded-full bg-[conic-gradient(from_45deg,#1b140b28,#D4AF372e,#4a2f0f26,#0f0d0a30,#1b140b28)] blur-[170px]"
      />

      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#F5E6A8]/10 bg-[#D4AF37]/5 blur-2xl"
      />

      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-20 bg-[linear-gradient(110deg,transparent_0%,rgba(245,230,168,0.18)_28%,transparent_54%,rgba(212,175,55,0.1)_78%,transparent_100%)] bg-[length:220%_220%]"
      />

      {particles.map((className, index) => (
        <motion.span
          key={className}
          animate={{
            y: [0, -28, 0],
            opacity: [0.2, 0.85, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 4 + index * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
          className={`absolute rounded-full bg-[#F5E6A8] shadow-[0_0_24px_rgba(245,230,168,0.8)] ${className}`}
        />
      ))}

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-3xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(212,175,55,0.3)",
                  "0 0 40px rgba(212,175,55,0.6)",
                  "0 0 20px rgba(212,175,55,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-2xl font-bold bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#FFF4C7] bg-clip-text text-transparent"
            >
              Hivenex
            </motion.div>

            <div className="hidden md:flex gap-8 text-gray-300 text-sm font-medium">
              {[
                { label: "Features", href: "#/features" },
                { label: "Pricing", href: "#/pricing" },
                { label: "Download", href: "#/download" },
                { label: "About", href: "#/about" },
              ].map((item) => (
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
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(212,175,55,0.8)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-5 py-2 rounded-xl font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                Start Free Trial
              </motion.button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                <HiMenu size={26} />
              </button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300"
            >
              <a href="#/features">Features</a>
              <a href="#/pricing">Pricing</a>
              <a href="#/download">Download</a>
              <a href="#/about">About</a>
              <a href="#/login">Log in</a>
            </motion.div>
          )}
        </nav>

        {/* Hero */}
        <section className="relative py-32 text-center overflow-hidden">
          <motion.div
            style={{ scale: ringScale }}
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15"
          />

          <motion.div
            animate={{ rotate: -360, scale: [1.08, 1, 1.08] }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D4AF37]/10"
          />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight bg-gradient-to-b from-white via-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent"
            >
              Simple Accounting
              <br />
              for Modern Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75 }}
              className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Manage invoices, track expenses, and generate reports - all
              inside a premium cloud accounting platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col md:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 0 60px rgba(212,175,55,0.9)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                Start Free Trial
              </motion.button>

              <motion.a
                href="#/download"
                whileHover={{ scale: 1.05, y: -2 }}
                className="border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl text-lg hover:text-[#F5E6A8] transition"
              >
                Download App
              </motion.a>
            </motion.div>

            <div className="mt-14 flex justify-center gap-4 md:gap-10 flex-wrap text-sm text-gray-300">
              {["No credit card required", "Cloud synced", "Secure storage"].map(
                (label, index) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + index * 0.12 }}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
                  >
                    {label}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <section className="relative py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="text-center mb-12"
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4">
                FEATURES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Powerful Features
              </h2>
              <p className="text-gray-400 mt-4">
                Everything you need to manage your finances.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {features.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    rotateX: 4,
                    boxShadow: "0 24px 80px rgba(212,175,55,0.16)",
                  }}
                  className="relative bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-7 overflow-hidden group hover:border-[#D4AF37]/30 transition"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_70%)]" />
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5E6A8] mb-5 shadow-[0_0_26px_rgba(212,175,55,0.35)]"
                  />
                  <h3 className="relative z-10 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-gray-400 mt-3 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              style={{ y: previewY }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative bg-white/[0.04] border border-white/10 rounded-[28px] backdrop-blur-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.08)]"
            >
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="grid md:grid-cols-3 gap-5 p-6">
                {[
                  {
                    title: "Total Balance",
                    amount: "$24,850",
                  },
                  {
                    title: "Monthly Revenue",
                    amount: "$12,430",
                  },
                  {
                    title: "Expenses",
                    amount: "$3,210",
                  },
                ].map((card) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-black/25 border border-white/10 rounded-2xl p-5"
                  >
                    <p className="text-sm text-gray-400 mb-3">{card.title}</p>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] bg-clip-text text-transparent mb-5">
                      {card.amount}
                    </h3>
                    <div className="space-y-2">
                      {[100, 80, 60].map((width, index) => (
                        <motion.div
                          key={width}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${width}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.12 }}
                          className="h-2 rounded-full bg-gradient-to-r from-[#D4AF37]/70 to-white/10"
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Download Section (with Images Restored) */}
        <section className="relative py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="text-center mb-12"
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4">
                DOWNLOAD
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Available Everywhere
              </h2>
              <p className="text-gray-400 mt-4">
                Choose your platform and get started instantly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-5">
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 24px 70px rgba(212,175,55,0.14)",
                  }}
                  className="relative bg-white/[0.035] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center overflow-hidden group hover:border-[#D4AF37]/40 transition duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,#D4AF3718,transparent_68%)]" />

                  <span className="relative z-10 inline-flex rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#F5E6A8]">
                    {item.badge}
                  </span>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.25,
                    }}
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="relative z-10 mx-auto mt-6 mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-black/35 shadow-[inset_0_0_30px_rgba(255,255,255,0.04),0_0_30px_rgba(212,175,55,0.08)]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-contain"
                    />
                  </motion.div>

                  <h3 className="relative z-10 text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="relative z-10 mt-3 min-h-12 text-sm leading-relaxed text-gray-400">
                    {item.detail}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative z-10 mt-6 w-full py-3 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-sm font-bold text-[#F5E6A8] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F5E6A8] hover:text-black transition"
                  >
                    {item.name === "Web App" ? "Launch App" : "Download Now"}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden">
          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-8 mx-auto h-28 max-w-4xl rounded-full bg-[#D4AF37]/20 blur-3xl"
          />
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-b from-white to-[#F5E6A8] bg-clip-text text-transparent">
                Ready to simplify your accounting?
              </h2>

              <p className="text-gray-400 mt-5 text-lg">
                Join thousands of modern businesses using Hivenex.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 55px rgba(212,175,55,0.8)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-8 py-3.5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.45)]"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
