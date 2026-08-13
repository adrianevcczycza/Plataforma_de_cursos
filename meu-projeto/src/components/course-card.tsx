import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";
import { formatDate, formatPrice } from "@/lib/format";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex w-full flex-col">
        <div className="relative h-44 w-full bg-slate-100">
          <Image src={course.image} alt={`Imagem do curso ${course.name}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className={`w-fit rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${course.featured ? "bg-emerald-50 text-emerald-700" : "bg-weg-light text-weg-dark"}`}>
            {course.featured ? "Destaque" : "Curso"}
          </span>
          <h3 className="mt-4 text-xl font-bold leading-tight text-weg-dark">{course.name}</h3>
          <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">{course.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">{formatPrice(course.price)}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">{formatDate(course.date)}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">{course.availableSpots} vagas</span>
          </div>
          <p className="mt-4 text-sm text-slate-500">{course.location}</p>
          <Link href={`/cursos/${encodeURIComponent(course.id)}`} className="mt-auto pt-5 text-sm font-extrabold text-weg-blue hover:text-weg-dark">Ver detalhes</Link>
        </div>
      </div>
    </article>
  );
}
