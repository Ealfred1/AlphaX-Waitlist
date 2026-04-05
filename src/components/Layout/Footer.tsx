import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 py-10 px-8 flex flex-col items-center gap-5 text-center">
      <div className="flex gap-4">
        <Link
          href="#"
          aria-label="X (Twitter)"
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-brand/50 transition-all duration-150 hover:-translate-y-0.5"
        >
          <Image src="/twitter-x.svg" alt="X" width={16} height={16} />
        </Link>
        <Link
          href="#"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-brand/50 transition-all duration-150 hover:-translate-y-0.5"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={18} height={18} />
        </Link>
      </div>
      <p className="text-[12px] text-white/25">
        &copy; {new Date().getFullYear()} AlphaX Global Technologies. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
