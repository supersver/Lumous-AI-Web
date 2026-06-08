export default function Footer() {
  return (
    <footer className="py-12 text-sm text-slate-400">
      <div className="text-center">
        © {new Date().getFullYear()} Lumous AI — All rights reserved.
      </div>
    </footer>
  );
}
