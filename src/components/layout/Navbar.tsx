import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-6 flex items-center justify-between">
      <Link href="/" className="font-semibold text-lg">
        Lumous
      </Link>
      <div className="space-x-4">
        <Link href="#features" className="text-sm opacity-80 hover:opacity-100">
          Features
        </Link>
        <Link href="#" className="text-sm opacity-80 hover:opacity-100">
          Docs
        </Link>
      </div>
    </nav>
  );
}
