import Link from "next/link";
import styles from "./Layout.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <div className={styles.brandDot} />
        AlphaX
      </div>

      <div className={styles.navLinks}>
        <Link href="#" className={styles.navLink}>Platform</Link>
        <Link href="#" className={styles.navLink}>Network</Link>
        <Link href="#" className={styles.navLink}>Governance</Link>
        <Link href="#" className={styles.navLink}>Ecosystem</Link>
      </div>

      <button className={styles.navButton}>
        Coming Soon
      </button>
    </nav>
  );
};

export default Navbar;
