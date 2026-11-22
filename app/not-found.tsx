import Link from 'next/link';
export default function NotFound() {
  return <section className="container page-section empty-state"><p className="section-kicker">CARTA NÃO ENCONTRADA</p><h1>O caminho não foi encontrado.</h1><p>Volte à biblioteca para explorar as 78 cartas.</p><Link href="/cartas" className="button button-gold">Explorar biblioteca</Link></section>;
}
