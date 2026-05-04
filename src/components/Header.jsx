import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const topbarItems = [
  {
    label: "+977 98514 18471",
    className: "topbar-item",
    href: "tel:+9779851418471",
    icon: (
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.28.54 3.5.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.16 21 3 13.84 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.18 2.4.54 3.5a1 1 0 0 1-.24 1z" />
    ),
  },
  {
    label: "+977 98211 00074",
    className: "topbar-item",
    href: "tel:+9779821100074",
    icon: (
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.28.54 3.5.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.16 21 3 13.84 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.18 2.4.54 3.5a1 1 0 0 1-.24 1z" />
    ),
  },
  {
    label: "+9779851418471",
    className: "topbar-item",
    href: "https://wa.me/9779851418471",
    icon: (
      <path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2C6.52 2 2.04 6.47 2.04 11.98c0 1.76.46 3.48 1.33 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.85 1.24h.01c5.5 0 9.98-4.47 9.98-9.98 0-2.67-1.04-5.18-2.95-6.97ZM12.02 20.2h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.3a8.2 8.2 0 0 1-1.27-4.4c0-4.54 3.69-8.24 8.24-8.24 2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.55-3.69 8.24-8.23 8.24Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.25a7.43 7.43 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.12.17 1.77 2.7 4.28 3.78.6.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.29Z" />
    ),
  },
  {
    label: "Sun - Sat: 9:00 AM - 7:00 PM",
    className: "topbar-item",
    icon: (
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v5l4.2 2.5 1-1.6-3.2-1.9z" />
    ),
  },
  {
    label: "info@sunglowfreight.com",
    className: "topbar-item",
    href: "mailto:info@sunglowfreight.com",
    icon: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.03-7.47 4.67a1 1 0 0 1-1.06 0L4 8.03V6l8 5 8-5v2.03Z" />,
  },
];

const navItems = [
  { label: "Home", href: "/", icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></> },
  { label: "About Us", href: "/about", icon: <><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></> },
  { label: "Gallery", href: "/gallery", icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><polyline points="21 15 16 10 5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></> },
  { label: "Services", href: "/services", icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></> },
  { label: "Network", href: "/network", icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></> },
  { label: "Contact Us", href: "/contact", icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></> },
  { label: "Careers", href: "/careers", icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></> },
];

function TopbarLink({ item }) {
  const content = (
    <>
      <span className="topbar-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          {item.icon}
        </svg>
      </span>
      <span>{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} className={item.className}>
        {content}
      </a>
    );
  }

  return <div className={item.className}>{content}</div>;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <div className={`header-stack${menuOpen ? " menu-open" : ""}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-links">
            {topbarItems.map((item) => (
              <TopbarLink key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <button
            className={`menu-toggle${menuOpen ? " open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          <Link to="/" className="brand">
            <span className="brand-mark brand-logo-wrap">
              <img src="/logo.png" alt="Sunglow Freight and Cargo Pvt. Ltd. logo" className="brand-logo" />
            </span>
            <span>
              <strong>Sunglow Freight and Cargo Pvt. Ltd.</strong>
              <small>Freight & Logistics Solutions</small>
            </span>
          </Link>

          <nav id="site-nav" className={`site-nav${menuOpen ? " open" : ""}`}>

            <div className="nav-links">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} onClick={handleNavClick} className="nav-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="nav-icon">
                    {item.icon}
                  </svg>
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="nav-cta nav-cta-small" onClick={handleNavClick}>
                Get Quote
              </Link>
            </div>
          </nav>
          {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
        </div>
      </header>
    </div>
  );
}
