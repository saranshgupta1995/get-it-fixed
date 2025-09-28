import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import footerLogo from "../../public/home/footer.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topRow}>
                <div className={styles.logoSection}>
                    <Image src={footerLogo} alt="GetItFixed Logo" width={80} height={80} />
                    <div>
                        <div className={styles.brand}>GetItFixed</div>
                        <div className={styles.tagline}>Empowering Your Tech Experience</div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.column}>
                    <div className={styles.heading}>Contact Us</div>
                    <div>1604 43rd St Vernon, BC<br />V1T6W8</div>
                    <div>Customer Support:<br />Getitfixed.tech@hotmail.com</div>
                </div>
                <div className={styles.column}>
                    <div className={styles.heading}>Connect with Us</div>
                    <div>Stay updated with the latest tech news and updates.</div>
                    <a href="#">LinkedIn</a><br />
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
