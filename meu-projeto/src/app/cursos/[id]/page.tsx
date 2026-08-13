import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse } from "@/lib/courses";
import { formatDate, formatPrice } from "@/lib/format";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourse(decodeURIComponent(id));
  return { title: course?.name ?? "Curso não encontrado" };
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;
  const course = await getCourse(decodeURIComponent(id));
  if (!course) notFound();
  return (
    <main className="border-b border-slate-200 bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <Link href="/#cursos" className="text-sm font-extrabold text-weg-blue hover:text-weg-dark">← Voltar para cursos</Link>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
          <div><p className="eyebrow">{course.featured ? "Curso em destaque" : "Curso"}</p><h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">{course.name}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{course.description}</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-600"><span className="rounded-full bg-white px-3 py-1">Categoria: {course.category}</span><span className="rounded-full bg-white px-3 py-1">{formatDate(course.date)}</span><span className="rounded-full bg-white px-3 py-1">{course.availableSpots} vagas disponíveis</span></div></div>
          <aside className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-weg-dark">Informações do curso</h2><p className="mt-4 text-sm leading-6 text-slate-600"><strong>Local:</strong> {course.location}</p><p className="mt-2 break-all text-sm leading-6 text-slate-600"><strong>Identificador:</strong> {course.id}</p><p className="mt-5 text-3xl font-extrabold tracking-tight text-weg-dark">{formatPrice(course.price)}</p><a href={`mailto:academy@weg.net?subject=${encodeURIComponent(`Interesse no curso ${course.name}`)}`} className="mt-6 inline-flex rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark">Tenho interesse</a></aside>
        </div>
      </section>
    </main>
  );
}
