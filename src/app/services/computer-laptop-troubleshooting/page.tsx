import React from "react";

export default function ComputerLaptopTroubleshooting() {
    return (
        <section
            style={{
                maxWidth: 900,
                margin: "2.5rem auto",
                padding: "2rem 1rem",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 8px #e3eaf2",
            }}
        >
            <h1
                style={{
                    color: "#1a73e8",
                    fontWeight: 700,
                    fontSize: "2rem",
                    marginBottom: 16,
                }}
            >
                Get Your Computer Running Like New
            </h1>
            <p style={{ fontSize: "1.08rem", color: "#2d3a4a", marginBottom: 16 }}>
                Slow, crashing, or not turning on? Don’t stress—we fix desktops and
                laptops of all brands and models. Whether it’s a hardware or software
                issue, we’ll get you back up and running fast.
            </p>
            <h3
                style={{
                    color: "#1a73e8",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    marginBottom: 8,
                }}
            >
                We Can Help With:
            </h3>
            <ul style={{ lineHeight: 2, fontSize: "1.05rem", color: "#2d3a4a" }}>
                <li>Blue screen errors & system crashes</li>
                <li>Slow performance and startup issues</li>
                <li>Hardware repairs (hard drives, RAM, screens, keyboards)</li>
                <li>Software installation & updates</li>
                <li>Data backup and recovery</li>
            </ul>
            <div style={{ marginTop: 24 }}>
                <a
                    href="tel:1234567890"
                    style={{
                        background: "#1a73e8",
                        color: "#fff",
                        borderRadius: 8,
                        padding: "0.9rem 2.2rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: "1.08rem",
                        boxShadow: "0 1px 4px #b3d1f7",
                    }}
                >
                    📞 Call Now
                </a>
            </div>
        </section>
    );
}
