import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <p>&copy; 2026 AlphaX Global Technologies. All rights reserved.</p>
        <p>Built for the decentralized future.</p>
      </div>

      <div className={styles.socials}>
        <Link href="#" className={styles.socialIcon} aria-label="X (Twitter)">
          <Image src="/twitter-x.svg" alt="X" width={18} height={18} />
        </Link>
        <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
          <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
