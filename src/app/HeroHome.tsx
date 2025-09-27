import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroHome.module.css';

export default function HeroHome() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.leftCol}>
                <h1 className={styles.headline}>
                    Fast & Reliable Tech<br />Support-Anytime,<br />Anywhere
                </h1>
                <p className={styles.subheadline}>
                    Empowering your tech experience with expert troubleshooting, repairs, and support.
                </p>
                <Link href="/contact" className={styles.ctaBtn}>Get Support</Link>
                <div className={styles.features}>
                    <div className={styles.featureBox}>
                        <Image
                            src="/home/lock.svg"
                            alt="Customer Service Icon"
                            width={40}
                            height={40}
                            className={styles.icon}
                        />
                        <div>
                            <div className={styles.featureTitle}>Exceptional<br />Customer Service</div>
                        </div>
                    </div>
                    <div className={styles.featureBox}>
                        <Image
                            src="/home/depth.svg"
                            alt="Technical Knowledge Icon"
                            width={40}
                            height={40}
                            className={styles.icon}
                        />
                        <div>
                            <div className={styles.featureTitle}>In-Depth<br />Technical Knowledge</div>
                        </div>
                    </div>
                    <div className={styles.featureBox}>
                        <Image
                            src="/home/reliable.svg"
                            alt="Reliable Solutions Icon"
                            width={40}
                            height={40}
                            className={styles.icon}
                        />
                        <div>
                            <div className={styles.featureTitle}>Reliable<br />Solutions</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightCol}>
                <div className={styles.illustration}>
                    <Image
                        src="/home/hero.svg"
                        alt="Tech Support Hero Illustration"
                        width={520}
                        height={520}
                        style={{ maxWidth: '100%', height: 'auto' }}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
