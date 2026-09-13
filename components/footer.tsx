export function Footer() {
  // TODO: one subtle personality detail, per the design doc.
  return (
    <footer className="border-t border-zinc-800 py-10">
      <p className="font-mono text-xs text-zinc-600">
        © {new Date().getFullYear()} Fawaz Ishola
      </p>
    </footer>
  );
}
