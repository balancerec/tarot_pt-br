import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Tarot PT-BR — Biblioteca Rider–Waite–Smith', template: '%s · Tarot PT-BR' },
  description: 'Explore 78 cartas Rider–Waite–Smith em português brasileiro. Biblioteca de tarot, acervo histórico e coleção brasileira em desenvolvimento.',
  metadataBase: new URL('https://github.com/balancerec/tarot_pt-br'),
};

const links = [
  { href: '/', label: 'Início' },
  { href: '/cartas', label: 'Biblioteca' },
  { href: '/baralhos', label: 'Baralhos' },
  { href: '/creditos', label: 'Créditos' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <div className="container topbar-inner">
              <Link className="brand" href="/" aria-label="Tarot PT-BR, página inicial">
                <span className="brand-mark" aria-hidden="true">✦</span>
                <span>TAROT <em>PT-BR</em></span>
              </Link>
              <nav className="main-nav" aria-label="Navegação principal">
                {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
              </nav>
              <span className="nav-status">Rider–Waite–Smith · 1909</span>
            </div>
          </header>
          <main id="conteudo">{children}</main>
          <footer className="footer">
            <div className="container footer-inner">
              <span>✦ Tarot PT-BR · Uma biblioteca de símbolos e histórias.</span>
              <Link href="/creditos">Fontes e atribuições</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
