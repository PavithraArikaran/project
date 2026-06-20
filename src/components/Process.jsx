import { motion } from "framer-motion";
import { Reveal, TextReveal } from "./ui/Reveal";

const steps = [
  {
    no: "01",
    title: "Discover",
    desc: "We dig into your goals, audience and market to find the angle no one else has.",
  },
  {
    no: "02",
    title: "Design",
    desc: "Concepts become craft. Identity, interface and motion explored until it's undeniable.",
  },
  {
    no: "03",
    title: "Develop",
    desc: "Pixel-perfect, performant builds with clean code and buttery interactions.",
  },
  {
    no: "04",
    title: "Deliver",
    desc: "We launch, measure and refine — partners long after the site goes live.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-haze">
              <span className="h-px w-8 bg-accent" /> How we work
            </span>
          </Reveal>
          <TextReveal
            text="A process without the fluff"
            className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative min-h-[260px] bg-ink p-8 transition-colors hover:bg-ink-soft"
            >
              <span className="font-display text-sm text-accent">{step.no}</span>
              <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-haze">
                {step.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
