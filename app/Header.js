'use client';
import { useState } from 'react';
import { nav, profile } from './data';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="pill">
        <a href="#" className="logo"><span className="logo-badge">{profile.initials}</span>{profile.name}</a>
        <nav className={open ? 'menu open' : 'menu'} aria-label="Main">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={n === 'About' ? '' : ''} onClick={() => setOpen(false)}>{n}</a>
          ))}
          <a href="#contact" className="btn small menu-cta" onClick={() => setOpen(false)}>Let&apos;s Talk ↗</a>
        </nav>
        <a href="#contact" className="btn small desk-cta">Let&apos;s Talk ↗</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
