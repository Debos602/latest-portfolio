import { HatchDivider } from "./HatchDivider";

const stack = [
  {
    id: "stack-modern-web-applications",
    number: "01",
    label: "Modern Web Applications",
    items: [
      { name: "Next.js", href: "https://nextjs.org", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React", href: "https://react.dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TypeScript", href: "https://www.typescriptlang.org", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "PostgreSQL", href: "https://www.postgresql.org", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", href: "https://supabase.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Chart.js", href: "https://www.chartjs.org", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg" },
    ],
  },
  {
    id: "stack-ai-automation",
    number: "02",
    label: "AI & Automation",
    items: [
      { name: "OpenAI", href: "https://openai.com", icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg" },
      { name: "Anthropic", href: "https://www.anthropic.com", icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/anthropic.svg" },
      { name: "AI Agents", href: "https://en.wikipedia.org/wiki/Intelligent_agent", icon: "/icons/ai-agents.svg" },
      { name: "RAG Systems", href: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation", icon: "/icons/rag-systems.svg" },
    ],
  },
  {
    id: "stack-payments-business-systems",
    number: "03",
    label: "Payments & Business Systems",
    items: [
      { name: "Stripe", href: "https://stripe.com", icon: "https://cdn.simpleicons.org/stripe" },
      { name: "PayMongo", href: "https://paymongo.com", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/PayMongo_Logo.svg" },
      { name: "Resend", href: "https://resend.com", icon: "https://cdn.simpleicons.org/resend" },
      { name: "PostHog", href: "https://posthog.com", icon: "https://cdn.simpleicons.org/posthog" },
    ],
  },
  {
    id: "stack-deployment-infrastructure",
    number: "04",
    label: "Deployment & Infrastructure",
    items: [
      { name: "Vercel", href: "https://vercel.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Node.js", href: "https://nodejs.org", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Prisma", href: "https://www.prisma.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Datadog", href: "https://www.datadoghq.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datadog/datadog-original.svg" },
      { name: "Kubernetes", href: "https://kubernetes.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
    ],
  },
];

const lineColor = "border-[lab(90.6853%_0.399232_-1.45452)]";

export default function Stack() {
  return (
    <section id="stack" className="bg-gradient-safe">
      <div className={`max-w-3xl mx-auto border-x ${lineColor}`}>
        <h2 className={`border-b ${lineColor} px-4 text-3xl font-bold tracking-tight text-foreground`}>
          Tech Stack
        </h2>

        <div className="relative [--badge-height:1.5rem] [--col-left-width:12rem]">
          <div
            className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--color-line)_4px,transparent_2px)] bg-[size:1px_6px] bg-repeat-y max-sm:hidden"
            aria-hidden="true"
          />

          {stack.map((group) => (
            <div
              key={group.id}
              className={`grid items-start gap-y-2 border-b ${lineColor} py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]`}
            >
              <div
                id={group.id}
                className="pl-4 text-sm/(--badge-height) text-muted-foreground"
              >
                <span className="mr-1.5 select-none font-mono text-muted-foreground/50" aria-hidden="true">
                  {group.number}
                </span>
                {group.label}
              </div>

              <ul aria-labelledby={group.id} className="flex flex-wrap gap-1.5 px-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      title={item.name}
                      className="flex h-[var(--badge-height)] items-center justify-center gap-1.5 rounded-md bg-zinc-50/80 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="size-4 shrink-0 object-contain opacity-80 grayscale dark:invert dark:opacity-70"
                        loading="lazy"
                      />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      
      </div>
       <HatchDivider
        />
    </section>
  );
}