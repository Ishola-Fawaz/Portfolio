const links = [
  { label: "Email", href: "mailto:TODO@example.com" },
  { label: "Resume", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800 py-24">
      <h2 className="font-mono text-sm text-zinc-500">Contact</h2>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-lg">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-zinc-200 underline underline-offset-4 hover:text-zinc-50"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
