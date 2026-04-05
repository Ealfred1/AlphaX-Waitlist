import Image from "next/image";
import styles from "./Hero.module.css";
import WaitlistForm from "../WaitlistForm";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span>Waitlist now open</span>
        </div>
        
        <div className={styles.logoContainer}>
          <Image 
            src="/coin.png" 
            alt="AlphaX Coin" 
            width={120} 
            height={120} 
            className={styles.coinImage}
            priority
          />
        </div>

        <h1 className={styles.headline}>
          The Future of <span>Decentralized Trading.</span>
        </h1>
        
        <p className={styles.subheadline}>
          Join the elite group of traders at AlphaX. 
          Experience institutional-grade liquidity and 
          lightning-fast execution on-chain.
        </p>

        <WaitlistForm />
      </div>
    </section>
  );
};

export default Hero;
