import { CourseCard } from "@/components/course-card";
import { ActionLink } from "@/components/action-link";
import { getCourses } from "@/lib/courses";

export default async function Home() {
  const courses = (await getCourses()).filter(
    (course) => course.category.toLocaleLowerCase("pt-BR") === "cursos",
  );

  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Plataforma de cursos técnicos</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
              Aprendizagem para quem transforma tecnologia em indústria
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              A WEG Academy reúne cursos e formações voltados para automação,
              acionamentos, eficiência energética, eletricidade industrial e soluções
              aplicadas ao mundo do trabalho.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href="#cursos">Explorar cursos</ActionLink>
              <ActionLink href="/sobre" variant="secondary">Conhecer a WEG</ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" id="cursos">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Catálogo</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-weg-dark">Cursos disponíveis</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Conheça as formações técnicas disponíveis e encontre o próximo passo para o seu desenvolvimento.
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        ) : (
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-600">
            Nenhum curso está disponível no momento.
          </p>
        )}
      </section>
    </main>
  );
}
