import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Sobre a WEG" };

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.25fr_0.75fr] md:items-center">
          <div><p className="eyebrow">Página institucional</p><h1 className="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">Sobre a WEG</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">A WEG é uma empresa global de tecnologia que desenvolve soluções para motores elétricos, automação, energia, tintas industriais e sistemas aplicados a diferentes setores produtivos.</p></div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src="/placeholder-curso.jpg" alt="Ambiente industrial" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" /></div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-14 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-2xl font-bold tracking-tight text-weg-dark">Tecnologia aplicada à indústria</h2><p className="mt-4 text-sm leading-6 text-slate-600">A WEG atua no desenvolvimento de soluções que contribuem para produtividade, eficiência energética, automação e modernização de processos industriais.</p><p className="mt-3 text-sm leading-6 text-slate-600">Suas áreas de atuação conectam engenharia, inovação, fabricação e serviços técnicos, criando um ambiente em que conhecimento e prática caminham juntos.</p></article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-2xl font-bold tracking-tight text-weg-dark">Formação e desenvolvimento</h2><p className="mt-4 text-sm leading-6 text-slate-600">A WEG Academy representa uma vitrine de aprendizagem voltada à qualificação técnica, ao aperfeiçoamento profissional e à atualização de pessoas que atuam ou desejam atuar em áreas relacionadas à tecnologia industrial.</p><p className="mt-3 text-sm leading-6 text-slate-600">Conhecimento acessível para preparar profissionais para os desafios da indústria.</p></article>
      </section>
    </main>
  );
}
