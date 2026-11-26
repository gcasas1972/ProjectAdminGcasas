const modules = ["Proyectos", "Objetivos", "Materiales", "Colaboradores"];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <section className="rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Sistema administrativo</p>
        <h1 className="text-4xl font-bold">Gestor de proyectos</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Plataforma preparada para administrar proyectos y sus objetivos, materiales y colaboradores.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((module) => (
          <article key={module} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">{module}</h2>
            <p className="mt-2 text-sm text-slate-500">CRUD disponible para implementar.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
