import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/AlphaXGlobal_",
    icon: "/twitter-x.svg",
    width: 20,
    height: 20,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alphaxglobal",
    icon: "/instagram.svg",
    width: 22,
    height: 22,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@alphaxapp",
    icon: "/tiktok.svg",
    width: 20,
    height: 20,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Alphax",
    icon: "/facebook.svg",
    width: 22,
    height: 22,
  },
  {
    name: "Telegram",
    href: "https://t.me/JoinAlphaX",
    icon: "/telegram.svg",
    width: 22,
    height: 22,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/alphax-global-technologies",
    icon: "/linkedin.svg",
    width: 22,
    height: 22,
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 py-10 px-8 flex flex-col items-center gap-6 text-center">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-brand/40 transition-all duration-300 hover:scale-110 active:scale-95 bg-white/5 backdrop-blur-sm"
          >
            <Image 
              src={social.icon} 
              alt={social.name} 
              width={social.width} 
              height={social.height}
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        ))}
      </div>
      <p className="text-[12px] font-medium text-white/25 tracking-wider uppercase">
        &copy; {new Date().getFullYear()} AlphaX Global Technologies. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

