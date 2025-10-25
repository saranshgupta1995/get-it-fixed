import React from 'react';
import HeroHome from './HeroHome';
import EmpowerSection from './EmpowerSection';
import Services from '../components/Services/Services';

export default function Page() {
  return (
    <>
      <HeroHome />
      <EmpowerSection />
      <Services />

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

export const metadata = {
  applicationName: 'Get it fixed',
  keywords: ['Canada tech support', 'Get fixed', 'Tech support', 'IT support in Canada', 'Remote tech support'],
  title: 'Get It Fixed | Canada - Fast & Reliable Tech Support',
  authors: [{ name: 'Saransh', url: 'https://saransh.dev' }],
  creator: 'Shreyaansh Jain',
  publisher: 'Saransh Gupta',
}