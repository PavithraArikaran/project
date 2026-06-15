import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FiBriefcase, FiCheck, FiMail, FiShield, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

function Trial() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#/features" },
    { label: "Pricing", href: "#/pricing" },
    { label: "Download", href: "#/download" },
    { label: "About", href: "#/about" },
  ];

  const trialSteps = [
    "14 days of full Growth plan access",
    "No credit card required to begin",
    "Cancel or switch plans anytime",
  ];

  const fieldClass =
    "w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500";

  return (
    <div className="font-[Poppins] min-h-screen overflow-hidden relative text-white bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(212,175,55,0.22)_0%,transparent_32%),radial-gradient(circle_at_84%_20%,rgba(245,230,168,0.15)_0%,transparent_30%),radial-gradient(circle_at_48%_92%,rgba(38,92,83,0.2)_0%,transparent_36%),linear-gradient(135deg,#050403_0%,#100c05_46%,#000000_100%)]" />

      <motion.div
        animate={{ x: [0, 115, -75, 0], y: [0, -85, 72, 0], scale: [1, 1.18, 0.92, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-44 -left-40 h-[760px] w-[760px] rounded-full bg-[conic-gradient(from_180deg,#D4AF3738,#265c5326,#17100a24,#F5E6A826,#D4AF3738)] blur-[150px]"
      />

      <motion.div
        animate={{ x: [0, -130, 82, 0], y: [0, 105, -78, 0], scale: [1, 0.86, 1.16, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-44 h-[820px] w-[820px] rounded-full bg-[conic-gradient(from_45deg,#1b140b28,#D4AF372e,#214f4930,#0f0d0a30,#1b140b28)] blur-[170px]"
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
                href="#/trial"
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
              <a href="#/trial" className="text-[#F5E6A8]">
                Start Free Trial
              </a>
            </motion.div>
          )}
        </nav>

        <section className="relative min-h-[calc(100vh-82px)] py-16 md:py-24 overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15"
          />

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.45em] text-xs mb-5">
                FREE TRIAL
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] bg-gradient-to-b from-white via-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent">
                Start your accounting workspace today.
              </h1>
              <p className="mt-7 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                Create a Hivenex workspace with invoices, expenses, reports, and
                team controls ready from day one.
              </p>

              <div className="mt-9 grid sm:grid-cols-3 gap-3">
                {trialSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 + index * 0.12 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
                  >
                    <FiCheck className="h-5 w-5 text-[#F5E6A8]" />
                    <p className="mt-3 text-sm leading-relaxed text-gray-300">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.75 }}
              className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 md:p-8 backdrop-blur-2xl shadow-[0_0_70px_rgba(212,175,55,0.12)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF371f,transparent_64%)]" />
              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-3xl font-bold">Create trial</h2>
                    <p className="mt-2 text-sm text-gray-400">
                      Set up your first workspace in under a minute.
                    </p>
                  </div>
                  <FiShield className="h-12 w-12 flex-none rounded-2xl bg-[#D4AF37]/10 p-3 text-[#F5E6A8]" />
                </div>

                <form className="space-y-5">
                  <label className="block">
                    <span className="text-sm font-medium text-gray-300">Full name</span>
                    <span className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 focus-within:border-[#D4AF37]/45">
                      <FiUser className="h-5 w-5 text-[#F5E6A8]" />
                      <input type="text" placeholder="Alex Morgan" className={fieldClass} />
                    </span>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-300">Work email</span>
                    <span className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 focus-within:border-[#D4AF37]/45">
                      <FiMail className="h-5 w-5 text-[#F5E6A8]" />
                      <input type="email" placeholder="you@company.com" className={fieldClass} />
                    </span>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-300">Company name</span>
                    <span className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 focus-within:border-[#D4AF37]/45">
                      <FiBriefcase className="h-5 w-5 text-[#F5E6A8]" />
                      <input type="text" placeholder="Northstar Studio" className={fieldClass} />
                    </span>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-300">Trial plan</span>
                    <select className="mt-2 w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]/45">
                      <option>Growth - full trial</option>
                      <option>Starter - simple trial</option>
                      <option>Scale - team trial</option>
                    </select>
                  </label>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(212,175,55,0.65)" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] px-5 py-3.5 font-bold text-black shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                  >
                    Start Free Trial
                  </motion.button>
                </form>

                <p className="mt-7 text-center text-sm text-gray-400">
                  Already have an account?{" "}
                  <a href="#/login" className="font-semibold text-[#F5E6A8] hover:text-white transition">
                    Log in
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Trial;
