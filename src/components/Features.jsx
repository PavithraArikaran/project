import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import {
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiLock,
  FiRefreshCw,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Features() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#/features" },
    { label: "Pricing", href: "#/pricing" },
    { label: "Download", href: "#/download" },
    { label: "About", href: "#/about" },
  ];

  const featureGroups = [
    {
      icon: FiFileText,
      title: "Invoice Builder",
      desc: "Create polished invoices, recurring billing schedules, and payment reminders in a few clicks.",
    },
    {
      icon: FiCreditCard,
      title: "Expense Capture",
      desc: "Log expenses, attach receipts, and keep categories consistent across your whole team.",
    },
    {
      icon: FiBarChart2,
      title: "Live Reports",
      desc: "Track revenue, cash flow, taxes, and monthly performance with clear visual summaries.",
    },
    {
      icon: FiUsers,
      title: "Team Workspace",
      desc: "Invite accountants, operators, and managers with role-based access for every workflow.",
    },
    {
      icon: FiLock,
      title: "Secure Records",
      desc: "Protect financial data with controlled access, encrypted cloud storage, and audit-ready history.",
    },
    {
      icon: FiRefreshCw,
      title: "Bank Sync",
      desc: "Match transactions automatically and reconcile accounts without chasing scattered spreadsheets.",
    },
  ];

  const workflow = [
    "Send branded invoices with tax, discount, and due-date controls.",
    "Approve expenses from one queue before they hit your books.",
    "Close each month with reports that are ready for leadership review.",
  ];

  return (
    <div className="font-[Poppins] min-h-screen overflow-hidden relative text-white bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(212,175,55,0.2)_0%,transparent_34%),radial-gradient(circle_at_88%_18%,rgba(245,230,168,0.14)_0%,transparent_30%),radial-gradient(circle_at_48%_94%,rgba(38,92,83,0.2)_0%,transparent_36%),linear-gradient(135deg,#050403_0%,#100c05_48%,#000000_100%)]" />

      <motion.div
        animate={{ x: [0, 100, -70, 0], y: [0, -80, 60, 0], scale: [1, 1.18, 0.92, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-44 -left-40 h-[760px] w-[760px] rounded-full bg-[conic-gradient(from_180deg,#D4AF3733,#265c5326,#17100a22,#F5E6A824,#D4AF3733)] blur-[150px]"
      />

      <motion.div
        animate={{ x: [0, -130, 80, 0], y: [0, 100, -70, 0], scale: [1, 0.88, 1.14, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-44 h-[820px] w-[820px] rounded-full bg-[conic-gradient(from_45deg,#1b140b28,#D4AF372d,#214f4930,#0f0d0a30,#1b140b28)] blur-[170px]"
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

        <section className="relative py-24 md:py-32 overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15"
          />

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_0.95fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.45em] text-xs mb-5">
                FEATURES
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] bg-gradient-to-b from-white via-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent">
                Every finance workflow in one sharp workspace.
              </h1>
              <p className="mt-7 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                Hivenex combines invoices, expenses, reporting, bank sync, and
                secure collaboration so your team can move through daily
                accounting without tool hopping.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#/pricing"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-center bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black px-7 py-4 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.45)]"
                >
                  View Pricing
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
                    <p className="text-sm text-gray-400">Today</p>
                    <h2 className="mt-1 text-2xl font-bold">Operations queue</h2>
                  </div>
                  <FiClock className="h-11 w-11 rounded-2xl bg-[#D4AF37]/10 p-3 text-[#F5E6A8]" />
                </div>

                <div className="mt-6 space-y-4">
                  {workflow.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.12 }}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <FiCheckCircle className="mt-0.5 h-5 w-5 flex-none text-[#F5E6A8]" />
                      <p className="text-sm leading-relaxed text-gray-300">{item}</p>
                    </motion.div>
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
                TOOLKIT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Built for daily finance work
              </h2>
              <p className="text-gray-400 mt-4">
                Focused tools for getting paid, staying organized, and making decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featureGroups.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -10, boxShadow: "0 24px 80px rgba(212,175,55,0.16)" }}
                    className="relative bg-white/[0.035] border border-white/10 backdrop-blur-xl rounded-2xl p-7 overflow-hidden group hover:border-[#D4AF37]/30 transition"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_70%)]" />
                    <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5E6A8] text-black shadow-[0_0_26px_rgba(212,175,55,0.35)]">
                      <Icon size={22} />
                    </div>
                    <h3 className="relative z-10 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="relative z-10 text-gray-400 mt-3 leading-relaxed text-sm">
                      {item.desc}
                    </p>
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

export default Features;
