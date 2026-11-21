import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Créditos e fontes' };
export default function CreditsPage() {
  return <section className="page-section container prose-page">
    <div className="page-heading"><p className="section-kicker">TRANSPARÊNCIA E PROVENIÊNCIA</p><h1>Fontes e <em>créditos</em></h1></div>
    <h2>Baralho Rider–Waite–Smith</h2>
    <p>Ilustrações de <strong>Pamela Colman Smith</strong>, com concepção e orientação de <strong>Arthur Edward Waite</strong>. Publicado originalmente por <strong>Rider &amp; Company em 1909</strong>.</p>
    <p>As imagens utilizadas neste projeto vêm do acervo público <a href="https://github.com/mixvlad/TarotCards/tree/main/tarot/rider-waite/full-png" target="_blank" rel="noopener noreferrer">mixvlad/TarotCards</a>, descrito pelo mantenedor como digitalizações históricas do baralho “Pam-A” restauradas por Steve P. Veja também a <a href="https://github.com/mixvlad/TarotCards/blob/main/SOURCES.md" target="_blank" rel="noopener noreferrer">documentação de fontes e licenças</a> e a <a href="https://steve-p.org/cards/RWSa.html" target="_blank" rel="noopener noreferrer">coleção de Steve P.</a>.</p>
    <p>O repositório-fonte informa que as ilustrações históricas estão em domínio público. A reutilização comercial de restaurações e digitalizações específicas deve ser analisada conforme os direitos e regras aplicáveis.</p>
    <h2>Tarot Brasileiro — Cinematic Heritage</h2>
    <p>Uma coleção autoral planejada e desenvolvida separadamente. As artes brasileiras ainda não estão publicadas e terão suas próprias informações de autoria, revisão, direitos e fontes simbólicas.</p>
    <h2>Sobre as interpretações</h2>
    <p>O tarot é apresentado como recurso cultural, histórico, simbólico e reflexivo. Não oferece garantias de previsão de acontecimentos nem substitui aconselhamento profissional.</p>
  </section>;
}
