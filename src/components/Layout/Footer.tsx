import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 py-10 px-8 flex flex-col items-center gap-5 text-center">
      <div className="flex gap-6">
        <Link
          href="#"
          aria-label="X (Twitter)"
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-brand/40 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Image src="/twitter-x.svg" alt="X" width={24} height={24} />
        </Link>
        <Link
          href="#"
          aria-label="LinkedIn"
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-brand/40 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={26} height={26} />
        </Link>
      </div>
      <p className="text-[12px] text-white/25">
        &copy; {new Date().getFullYear()} AlphaX Global Technologies. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
