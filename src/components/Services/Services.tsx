import React from "react";
import styles from "./Services.module.css";
import Image from "next/image";

const services = [
    {
        img: "/home/service1.svg",
        title: "Trusted Expertise",
        desc: "With our in-depth knowledge and expertise, we provide reliable solutions for all your tech-related issues.",
    },
    {
        img: "/home/service2.svg",
        title: "Comprehensive Support",
        desc: "We are your all-in-one solution for hardware and software support, ensuring that your devices are always in optimal condition.",
    },
    {
        img: "/home/service3.svg",
        title: "Customer Satisfaction\nGuarantee",
        desc: "Our dedicated team is committed to providing comprehensive customer support, ensuring your satisfaction with every interaction.",
    },
    {
        img: "/home/service4.svg",
        title: "Streamlined Solutions",
        desc: "Experience the efficiency of smart automation tools that optimize and enhance your tech environment.",
    },
];

const Services = () => (
    <section className={styles.servicesSection}>
        <h3 className={styles.heading}>Our Services</h3>
        <p className={styles.subheading}>
            From hardware troubleshooting and upgrades to software tune-ups, we offer a wide range of tech support services to meet your needs.
        </p>
        <div className={styles.grid}>
            {services.map((service, idx) => (
                <div key={idx} className={styles.card}>
                    <Image src={service.img} alt={service.title.replace('\n', ' ')} width={260} height={260} className={styles.image} />
                    <h3 className={styles.title}>
                        {service.title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < service.title.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h3>
                    <p className={styles.desc}>{service.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Services;
