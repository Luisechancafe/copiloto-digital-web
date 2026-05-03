import { cn } from '@/lib/cn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';
import {
  WhatsAppIcon,
  LeadsIcon,
  CalendarIcon,
  RescueIcon,
  VoiceIcon,
  ContentIcon
} from '@/components/icons/ToolIcons';

type ToolIcon = (props: { className?: string }) => JSX.Element;

interface Tool {
  key: string;
  Icon: ToolIcon;
  iconClasses: string;
  title: string;
  description: string;
  badge?: string;
}

const tools: Tool[] = [
  {
    key: 'whatsapp',
    Icon: WhatsAppIcon,
    iconClasses: 'bg-green-500/10 text-green-400 ring-green-500/20',
    title: 'Tu negocio responde solo en WhatsApp',
    description: 'Atiende a cada cliente como si tuvieras un equipo de 10 personas.'
  },
  {
    key: 'leads',
    Icon: LeadsIcon,
    iconClasses: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
    title: 'Recoge contactos sin que tú hagas nada',
    description: 'Cada conversación se convierte en una ficha en tu CRM. Automático.'
  },
  {
    key: 'calendar',
    Icon: CalendarIcon,
    iconClasses: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
    title: 'Apunta citas y manda recordatorios',
    description: 'Tu calendario se llena solo. Los olvidos desaparecen.'
  },
  {
    key: 'rescue',
    Icon: RescueIcon,
    iconClasses: 'bg-purple-500/10 text-purple-400 ring-purple-500/20',
    title: 'Vuelve a hablar con los que se enfriaron',
    description:
      'El que no respondió hace 15 días recibe un mensaje justo ahora. Tú no haces nada.'
  },
  {
    key: 'voice',
    Icon: VoiceIcon,
    iconClasses: 'bg-red-500/10 text-red-400 ring-red-500/20',
    badge: 'Plan Élite',
    title: 'Contesta tus llamadas como un humano',
    description: 'Habla por teléfono con tus clientes en español. Toma datos, agenda, deriva.'
  },
  {
    key: 'content',
    Icon: ContentIcon,
    iconClasses: 'bg-pink-500/10 text-pink-400 ring-pink-500/20',
    title: 'Crea publicaciones para redes sociales',
    description: 'Posts, captions, ideas. Listos para publicar en tu Instagram.'
  }
];

export function ToolsSection() {
  return (
    <section className="section relative bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Las 6 herramientas"
          title="Todo lo que tu negocio necesita"
          subtitle="Una sola suscripción. Seis copilotos trabajando en paralelo."
        />

        <RevealStagger
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {tools.map(({ key, Icon, iconClasses, title, description, badge }) => (
            <RevealItem key={key}>
              <article className="card-dark group relative h-full p-7">
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110',
                      iconClasses
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  {badge && (
                    <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-brand-300">
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-medium leading-snug text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
