import React from "react";

export default function Contact() {
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
                Get in Touch
            </h1>
            <div style={{ marginBottom: 16 }}>
                <b>📞 Phone:</b>{" "}
                <a
                    href="tel:1234567890"
                    style={{ color: "#1a73e8", textDecoration: "none" }}
                >
                    123-456-7890
                </a>
            </div>
            <div style={{ marginBottom: 16 }}>
                <b>📧 Email:</b>{" "}
                <a
                    href="mailto:info@getitfixed.tech"
                    style={{ color: "#1a73e8", textDecoration: "none" }}
                >
                    info@getitfixed.tech
                </a>
            </div>
            <form
                style={{
                    maxWidth: 400,
                    margin: "2rem auto 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                }}
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    style={{ padding: 10, borderRadius: 6, border: "1px solid #b3d1f7" }}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    style={{ padding: 10, borderRadius: 6, border: "1px solid #b3d1f7" }}
                />
                <textarea
                    placeholder="How can we help?"
                    rows={4}
                    style={{ padding: 10, borderRadius: 6, border: "1px solid #b3d1f7" }}
                />
                <button
                    type="submit"
                    style={{
                        background: "#1a73e8",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "0.8rem 0",
                        fontWeight: 700,
                        fontSize: "1.08rem",
                        marginTop: 8,
                        cursor: "pointer",
                    }}
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
