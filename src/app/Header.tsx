"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
    ];
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    GETITFIXED
                </Link>
                {/* Hamburger Icon for mobile */}
                <button
                    className={styles.hamburger}
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerBar}></span>
                </button>
                {/* Regular Navigation */}
                <div className={styles.links}>
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                pathname === link.href
                                    ? `${styles.link} ${styles.linkHome} `
                                    : styles.link
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.supportBtn}>Get Support</Link>
                </div>
                {/* Mobile Navigation */}
                <aside
                    className={menuOpen ? `${styles.mobileMenu} ${styles.mobileMenuOpen}` : styles.mobileMenu}
                    aria-hidden={!menuOpen}
                >
                    <button
                        className={styles.closeBtn}
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className={styles.closeIcon}>&#10005;</span>
                    </button>
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                pathname === link.href
                                    ? `${styles.link} ${styles.linkHome} `
                                    : styles.link
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.supportBtn} onClick={() => setMenuOpen(false)}>Get Support</Link>
                </aside>
            </nav>
        </header>
    );
}
