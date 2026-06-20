import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowDown } from "react-icons/hi2";

const line = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-driven parallax
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-16"
    >
      {/* ambient glow */}
      <motion.div
        style={{ scale: scaleGlow }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,208,0,0.10),transparent_60%)] blur-3xl"
      />
      {/* grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <motion.div
        style={{ y: yTitle, opacity }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-haze"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Independent design & technology studio
        </motion.div>

        <h1 className="font-display text-[14vw] font-semibold leading-[0.88] tracking-[-0.04em] sm:text-[12vw] lg:text-[9.5vw]">
          {["We build", "brands that", "refuse to"].map((t, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                variants={line}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.15 + i * 0.12 }}
              >
                {t}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-accent"
              style={{ fontFamily: "Space Grotesk" }}
              variants={line}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.51 }}
            >
              blend in.
            </motion.span>
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-md text-balance text-lg leading-relaxed text-haze"
          >
            Hivenex is a digital studio crafting bold identities, immersive
            websites, and products that move people — and metrics.
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-haze transition-colors hover:text-white"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black">
              <HiArrowDown className="animate-bounce" />
            </span>
            Scroll to explore
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
