import React from "react";
import styles from "./EmpowerSection.module.css";

const EmpowerSection = () => {
    return (
        <div>

            <div className={styles.curve}>
            </div>
            <div className={styles.contentWrapper}>
                <h3 className={styles.heading}>Empowering Your Tech Experience</h3>
                <div className={styles.description}>
                    At Getitfixed, we are dedicated to providing top-notch tech support services to enhance your digital lifestyle.<br />
                    Our mission is to ensure that you have a seamless and hassle-free tech experience.
                </div>
            </div>
        </div>
    );
};

export default EmpowerSection;
