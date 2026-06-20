import { motion } from "framer-motion";
import { Reveal, TextReveal } from "./ui/Reveal";

const services = [
  {
    no: "01",
    title: "Brand Identity",
    desc: "Naming, visual systems and guidelines that give your brand a voice impossible to ignore.",
    tags: ["Logo", "Systems", "Guidelines"],
  },
  {
    no: "02",
    title: "Web Experience",
    desc: "Editorial, interactive websites engineered for performance and crafted for emotion.",
    tags: ["UX/UI", "Webflow", "Headless"],
  },
  {
    no: "03",
    title: "Development",
    desc: "Production-grade front-ends and full-stack products built to scale without friction.",
    tags: ["React", "Next.js", "WebGL"],
  },
  {
    no: "04",
    title: "Motion & 3D",
    desc: "Scroll-driven animation, immersive 3D and micro-interactions that bring stories to life.",
    tags: ["GSAP", "Three.js", "Lottie"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-haze">
                <span className="h-px w-8 bg-accent" /> What we do
              </span>
            </Reveal>
            <TextReveal
              text="Capabilities engineered for impact"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-balance text-haze">
              A full-stack studio. One team, from the first sketch to the final
              deploy.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-line">
          {services.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 gap-4 border-b border-line py-9 transition-colors hover:bg-white/[0.015] md:grid-cols-12 md:items-center"
            >
              <span className="font-display text-sm text-haze md:col-span-1">
                {s.no}
              </span>
              <h3 className="font-display text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-4xl">
                {s.title}
              </h3>
              <p className="text-haze md:col-span-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-xs text-haze transition-colors group-hover:border-accent/40 group-hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
