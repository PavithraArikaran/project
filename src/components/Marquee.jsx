const items = [
  "Brand Identity",
  "Web Design",
  "Development",
  "Motion",
  "3D & WebGL",
  "Art Direction",
  "Strategy",
  "Product",
];

export default function Marquee() {
  return (
    <section className="relative border-y border-line py-6">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-display text-2xl font-medium text-white/70 md:text-3xl">
                {item}
              </span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
