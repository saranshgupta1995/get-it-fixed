import React from "react";

export default function SupportPortal() {
    return (
        <section
            style={{
                maxWidth: 900,
                margin: "2.5rem auto",
                padding: "2rem 1rem",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 8px #e3eaf2",
                textAlign: "center",
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
                Support Portal
            </h1>
            <p style={{ fontSize: "1.08rem", color: "#2d3a4a", marginBottom: 24 }}>
                Access remote support, download tools, or check your support tickets
                here.
            </p>
            <a
                href="tel:604-749-4040"
                style={{
                    display: "inline-block",
                    background: "#1a73e8",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "0.9rem 2.2rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "1.15rem",
                    boxShadow: "0 1px 4px #b3d1f7",
                }}
            >
                📞 Call Now
            </a>
        </section>
    );
}
