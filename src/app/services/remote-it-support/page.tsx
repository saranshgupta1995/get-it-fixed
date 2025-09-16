import React from "react";

export default function RemoteITSupport() {
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
                Tech Support Anytime, Anywhere
            </h1>
            <p style={{ fontSize: "1.08rem", color: "#2d3a4a", marginBottom: 16 }}>
                No need to wait for a technician—most problems can be solved remotely.
                With secure remote support, we’ll fix your issues quickly, no matter
                where you are.
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
                <li>Remote troubleshooting for PCs & laptops</li>
                <li>Fixing email, software, and printer issues</li>
                <li>Installing and configuring applications</li>
                <li>Performance optimization</li>
                <li>Step-by-step guidance while you watch</li>
            </ul>
            <div style={{ marginTop: 24 }}>
                <a
                    href="tel:604-749-4040"
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
