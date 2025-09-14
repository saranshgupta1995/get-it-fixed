import React from "react";

export default function About() {
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
                About Get It Fixed
            </h1>
            <p style={{ fontSize: "1.08rem", color: "#2d3a4a" }}>
                Hi, I’m [Your Name], the founder of Get It Fixed. With [X years] of IT
                support experience, I’ve helped individuals and small businesses solve
                tech problems quickly and stress-free. My goal is simple: to make
                technology work for you, not against you.
            </p>
            <div
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "#e3f0ff",
                    margin: "2rem auto 0",
                    display: "block",
                }}
            ></div>
        </section>
    );
}
