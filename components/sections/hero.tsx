export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[80vh] flex-col justify-center gap-6 py-24"
    >
      <p className="font-mono text-sm text-zinc-500">Available for work</p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        Fawaz Ishola
      </h1>
      {/* TODO: real one/two sentence split between infra-level and product-level work. */}
      <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
        Software engineer working across infrastructure and product — TODO:
        replace with the real bio split.
      </p>
    </section>
  );
}
