
import React from 'react';
import Link from 'next/link';
import HeroHome from './HeroHome';
import EmpowerSection from './EmpowerSection';

type ServiceBoxProps = {
  icon: string;
  title: string;
  desc: string;
  link: string;
};

function ServiceBox({ icon, title, desc, link }: ServiceBoxProps) {
  return (
    <Link href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px #e3eaf2', padding: '2rem 1rem', textAlign: 'center', transition: 'box-shadow 0.2s', minHeight: 180 }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{title}</div>
        <div style={{ color: '#555', fontSize: '0.98rem' }}>{desc}</div>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <HeroHome />
      <EmpowerSection />

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
        <h3 style={{ color: '#1a73e8', fontWeight: 700, fontSize: '2rem', textAlign: 'center', marginBottom: 32 }}>Our Services</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          <ServiceBox icon="🖥️" title="Computer & Laptop Troubleshooting" link="/services/computer-laptop-troubleshooting" desc="Hardware & software fixes for all major brands" />
          <ServiceBox icon="📡" title="Wi-Fi & Networking" link="/services/wifi-networking" desc="Setup, optimization, and repair for home & office networks" />
          <ServiceBox icon="🛡️" title="Virus & Malware Removal" link="/services/virus-malware-removal" desc="Keep your data safe and devices clean" />
          <ServiceBox icon="☁️" title="Cloud & Email Support" link="/services/cloud-email-support" desc="Email setup, sync issues, cloud storage help" />
          <ServiceBox icon="🖧" title="Remote IT Support" link="/services/remote-it-support" desc="Quick help from anywhere, without waiting" />
          <ServiceBox icon="🏢" title="Small Business IT Solutions" link="/services/small-business-it" desc="Affordable tech management for growing businesses" />
        </div>
      </section>

      <section style={{ background: '#e3f0ff', padding: '2.5rem 1rem', borderRadius: 16, maxWidth: 1000, margin: '2rem auto' }}>
        <h3 style={{ color: '#1a73e8', fontWeight: 700, fontSize: '1.7rem', textAlign: 'center', marginBottom: 24 }}>Why People Trust Get It Fixed</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem' }}>
          <li>✅ Available 24/7 for urgent issues</li>
          <li>✅ Remote & On-Site Support Options</li>
          <li>✅ Affordable, Transparent Pricing</li>
          <li>✅ Years of Professional IT Experience</li>
        </ul>
      </section>

      <section style={{ maxWidth: 900, margin: '2.5rem auto', padding: '2rem 1rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e3eaf2' }}>
        <h3 style={{ color: '#1a73e8', fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Who We Are</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32 }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <p style={{ fontSize: '1.08rem', color: '#2d3a4a' }}>
              Hi, I’m Shreyaansh Jain, the founder of Get It Fixed. With multiple years of IT support experience, I’ve helped individuals and small businesses solve tech problems quickly and stress-free. My goal is simple: to make technology work for you, not against you.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#e3f0ff', display: 'inline-block', margin: '0 auto' }}></div>
          </div>
        </div>
      </section>

    </>
  );
}
