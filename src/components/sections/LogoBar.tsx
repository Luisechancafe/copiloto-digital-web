import { Reveal } from '@/components/ui/Reveal';

// TODO: reemplazar por logos reales cuando Luise tenga clientes
const placeholders = [
  'Peluquerías Marta',
  'Clínica Dental Vallès',
  'Inmobiliaria Granollers',
  'Gestoría Llobet',
  'Restaurant La Plaça',
  'Autoescola Ràpid'
];

export function LogoBar() {
  return (
    <section className="border-y border-white/5 bg-ink-50 py-12">
      <div className="container-page">
        <Reveal>
          <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-white/40">
            Negocios que ya confían en nosotros
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-3 items-center gap-x-8 gap-y-6 md:grid-cols-6">
            {placeholders.map((name) => (
              <li
                key={name}
                className="text-center font-display text-base font-light uppercase tracking-wider text-white/50 opacity-50 transition hover:opacity-90 md:text-lg"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
