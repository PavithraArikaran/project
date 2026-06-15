import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

function About() {
  const [open, setOpen] = useState(false);

  const values = [
    {
      title: "Built for Clarity",
      desc: "Hivenex keeps invoicing, expenses, and reports easy to scan so business owners can act quickly.",
    },
    {
      title: "Secure by Design",
      desc: "Every workflow is shaped around trusted access, protected records, and dependable cloud storage.",
    },
    {
      title: "Ready to Scale",
      desc: "From solo operators to growing teams, Hivenex adapts as financial operations become more complex.",
    },
  ];

  const stats = [
    { value: "12k+", label: "Businesses supported" },
    { value: "98%", label: "Faster monthly close" },
    { value: "24/7", label: "Cloud availability" },
  ];

  return (
    <div className="font-[Poppins] min-h-screen overflow-hidden relative text-white bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(212,175,55,0.22)_0%,transparent_34%),radial-gradient(circle_at_86%_20%,rgba(245,230,168,0.16)_0%,transparent_32%),radial-gradient(circle_at_44%_88%,rgba(95,67,18,0.22)_0%,transparent_38%),linear-gradient(135deg,#050403_0%,#100c05_48%,#000000_100%)]" />

      <motion.div
        animate={{ x: [0, 110, -60, 0], y: [0, -70, 70, 0], scale: [1, 1.2, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-44 -left-40 h-[740px] w-[740px] rounded-full bg-[conic-gradient(from_180deg,#D4AF3738,#5d421820,#17100a24,#F5E6A826,#D4AF3738)] blur-[150px]"
      />

      <motion.div
        animate={{ x: [0, -120, 80, 0], y: [0, 90, -80, 0], scale: [1, 0.9, 1.16, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-44 -right-44 h-[800px] w-[800px] rounded-full bg-[conic-gradient(from_45deg,#1b140b28,#D4AF372e,#4a2f0f26,#0f0d0a30,#1b140b28)] blur-[170px]"
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212,175,55,0.8)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-5 py-2 rounded-xl font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                Start Free Trial
              </motion.button>
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
              <a href="#/features">Features</a>
              <a href="#/pricing">Pricing</a>
              <a href="#/download">Download</a>
              <a href="#/about">About</a>
              <a href="#/login">Log in</a>
            </motion.div>
          )}
        </nav>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15"
          />

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.45em] text-xs mb-5">
                ABOUT HIVENEX
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] bg-gradient-to-b from-white via-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent">
                Accounting that keeps modern business moving.
              </h1>
              <p className="mt-7 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                Hivenex brings invoicing, expense tracking, reporting, and team
                visibility into one polished workspace. It is made for founders,
                operators, and finance teams who need fewer spreadsheets and
                better decisions.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#/features"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-center bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-7 py-4 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.45)]"
                >
                  Explore Features
                </motion.a>
                <motion.a
                  href="#/download"
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="text-center border border-white/20 bg-white/5 backdrop-blur-xl px-7 py-4 rounded-2xl text-lg hover:text-[#F5E6A8] transition"
                >
                  Download App
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
                    <p className="text-sm text-gray-400">Mission</p>
                    <h2 className="mt-1 text-2xl font-bold">Financial focus</h2>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F5E6A8] shadow-[0_0_30px_rgba(212,175,55,0.35)]" />
                </div>

                <p className="mt-6 text-gray-300 leading-relaxed">
                  We help teams replace scattered tools with a single, calm
                  accounting command center that is fast enough for daily work
                  and clear enough for big financial calls.
                </p>

                <div className="mt-7 grid sm:grid-cols-3 gap-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <p className="text-2xl font-black text-[#F5E6A8]">
                        {item.value}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-gray-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4">
                OUR VALUES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Designed around trust
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {values.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -10, boxShadow: "0 24px 80px rgba(212,175,55,0.16)" }}
                  className="relative bg-white/[0.035] border border-white/10 backdrop-blur-xl rounded-2xl p-7 overflow-hidden group hover:border-[#D4AF37]/30 transition"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_70%)]" />
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5E6A8] mb-5 shadow-[0_0_26px_rgba(212,175,55,0.35)]" />
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
      </div>
    </div>
  );
}

export default About;
