import React from "react";

export default function CloudEmailSupport() {
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
                Seamless Email & Cloud Solutions
            </h1>
            <p style={{ fontSize: "1.08rem", color: "#2d3a4a", marginBottom: 16 }}>
                Struggling with email setup or syncing issues? Need help moving to the
                cloud? We provide tailored solutions so your communication and storage
                work flawlessly.
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
                <li>Email setup (Outlook, Gmail, business accounts)</li>
                <li>Fixing sync issues across devices</li>
                <li>Cloud storage setup & troubleshooting</li>
                <li>Backup solutions for important files</li>
                <li>Business collaboration tools (Google Workspace, Microsoft 365)</li>
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
