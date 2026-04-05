import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="relative z-50 flex items-center justify-between px-16 py-6 h-[80px]"
      style={{
        background: 'transparent',
        backdropFilter: 'blur(0px)',
      }}
    >
      <div
        className="flex items-center gap-2 font-heading font-bold tracking-tight text-white"
        style={{ fontSize: 20, letterSpacing: '-0.02em' }}
      >
        <Image src="/alphaX.png" alt="AlphaX" width={26} height={26} className="rounded-md" />
        AlphaX
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Protocol', 'Network', 'Governance', 'Ecosystem'].map(link => (
          <Link
            key={link}
            href="#"
            className="text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-150"
          >
            {link}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/30 bg-black/30 text-[11px] text-brand-light font-semibold uppercase tracking-wider backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
          Waitlist Live
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
