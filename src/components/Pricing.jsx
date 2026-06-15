import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FiCheck, FiShield, FiStar, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

function Pricing() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#/features" },
    { label: "Pricing", href: "#/pricing" },
    { label: "Download", href: "#/download" },
    { label: "About", href: "#/about" },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$19",
      note: "per month",
      icon: FiZap,
      desc: "For solo founders and small operators getting organized.",
      features: ["5 clients", "Unlimited invoices", "Basic expense tracking", "Monthly reports"],
    },
    {
      name: "Growth",
      price: "$49",
      note: "per month",
      icon: FiStar,
      desc: "For growing teams that need faster billing and better visibility.",
      features: ["Unlimited clients", "Recurring invoices", "Bank sync", "Team roles", "Advanced reports"],
      featured: true,
    },
    {
      name: "Scale",
      price: "$129",
      note: "per month",
      icon: FiShield,
      desc: "For finance teams managing approvals, controls, and audits.",
      features: ["Custom approvals", "Audit history", "Priority support", "Dedicated onboarding", "Custom exports"],
    },
  ];

  const included = [
    "Secure cloud storage",
    "Desktop and web access",
    "Receipt attachments",
    "Tax-ready exports",
  ];

  return (
    <div className="font-[Poppins] min-h-screen overflow-hidden relative text-white bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(212,175,55,0.22)_0%,transparent_32%),radial-gradient(circle_at_84%_18%,rgba(245,230,168,0.16)_0%,transparent_30%),radial-gradient(circle_at_52%_94%,rgba(75,57,118,0.18)_0%,transparent_36%),linear-gradient(135deg,#050403_0%,#100c05_46%,#000000_100%)]" />

      <motion.div
        animate={{ x: [0, 120, -70, 0], y: [0, -90, 80, 0], scale: [1, 1.22, 0.92, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-44 -left-40 h-[760px] w-[760px] rounded-full bg-[conic-gradient(from_180deg,#D4AF3738,#4b397626,#17100a24,#F5E6A826,#D4AF3738)] blur-[150px]"
      />

      <motion.div
        animate={{ x: [0, -135, 80, 0], y: [0, 105, -80, 0], scale: [1, 0.86, 1.16, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-44 h-[820px] w-[820px] rounded-full bg-[conic-gradient(from_45deg,#1b140b28,#D4AF372e,#352d5f2b,#0f0d0a30,#1b140b28)] blur-[170px]"
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

        <section className="relative py-24 md:py-32 text-center overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15"
          />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="text-[#D4AF37] uppercase tracking-[0.45em] text-xs mb-5"
            >
              PRICING
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black leading-[1.05] bg-gradient-to-b from-white via-[#F5E6A8] to-[#D4AF37] bg-clip-text text-transparent"
            >
              Plans that scale with your books.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-7 text-gray-400 text-lg md:text-xl leading-relaxed"
            >
              Start lean, add automation when the work grows, and keep every
              plan clear enough for predictable monthly spending.
            </motion.p>
          </div>
        </section>

        <section className="relative pb-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-5">
              {plans.map((plan, index) => {
                const Icon = plan.icon;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 42 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    whileHover={{ y: -10, boxShadow: "0 24px 90px rgba(212,175,55,0.16)" }}
                    className={`relative overflow-hidden rounded-2xl border p-7 backdrop-blur-xl transition ${
                      plan.featured
                        ? "border-[#D4AF37]/45 bg-[#D4AF37]/10"
                        : "border-white/10 bg-white/[0.035]"
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute right-5 top-5 rounded-full border border-[#D4AF37]/30 bg-black/30 px-3 py-1 text-xs font-semibold text-[#F5E6A8]">
                        Popular
                      </span>
                    )}
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5E6A8] text-black shadow-[0_0_26px_rgba(212,175,55,0.35)]">
                      <Icon size={22} />
                    </div>
                    <h2 className="text-2xl font-bold">{plan.name}</h2>
                    <p className="mt-3 min-h-12 text-sm leading-relaxed text-gray-400">
                      {plan.desc}
                    </p>
                    <div className="mt-7 flex items-end gap-2">
                      <span className="text-5xl font-black text-[#F5E6A8]">
                        {plan.price}
                      </span>
                      <span className="pb-2 text-sm text-gray-400">{plan.note}</span>
                    </div>
                    <motion.a
                      href="#/trial"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`mt-7 w-full rounded-xl px-5 py-3 font-bold transition ${
                        plan.featured
                          ? "bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                          : "border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#F5E6A8] hover:bg-[#D4AF37]/20"
                      }`}
                    >
                      Start Free Trial
                    </motion.a>
                    <div className="mt-7 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex gap-3 text-sm text-gray-300">
                          <FiCheck className="mt-0.5 h-4 w-4 flex-none text-[#F5E6A8]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 md:p-9 backdrop-blur-2xl">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
                <div>
                  <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4">
                    INCLUDED
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Essentials in every plan
                  </h2>
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    Each Hivenex plan includes the foundation needed to run a
                    dependable accounting workspace from day one.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-gray-300"
                    >
                      <FiCheck className="h-4 w-4 flex-none text-[#F5E6A8]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pricing;
