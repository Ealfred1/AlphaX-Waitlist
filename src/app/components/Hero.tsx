import Image from "next/image";
import styles from "./Hero.module.css";
import WaitlistForm from "./WaitlistForm";

function Hero() {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <span className={styles.navBrand}>AlphaX</span>
                <button className={styles.navButton}>Updates</button>
            </nav>

            <div className={styles.center}>
                <div className={styles.logoWrap}>
                    <Image src="/coin.png" alt="alphaX logo" width={140} height={140} />
                </div>
                <p className={styles.label}>AlphaX Global</p>
                <h1 className={styles.headline}>Join the Waitlist for <span className={styles.headlineAccent}>AlphaX</span></h1>
                <p className={styles.labelText}>
                    Trade on the edge of
                    <span > decentralized finance</span>
                </p>
                <WaitlistForm />
            </div>

            <footer className={styles.footer}>
                <p>AlphaX is launching soon. Built for the decentralized future.</p>
                <div className={styles.socialLinks}>
                    <Image src="/twitter-x.svg" alt="X" width={20} height={20} />
                    <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
                </div>
            </footer>
        </div>
    );
}
export default Hero