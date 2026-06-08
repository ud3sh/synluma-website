import { Link } from "react-router-dom";

type Service = {
  id: string;
  name: string;
  shape: string;
  goodFor: string;
  outcome: string;
};

const services: Service[] = [
  {
    id: "sprint",
    name: "Build sprint",
    shape: "Four to six weeks, fixed scope.",
    goodFor:
      "Founders or teams that need a specific agent, integration, or piece of infrastructure shipped to production. Scope is locked at the start; we own delivery.",
    outcome:
      "Production code, deployed and monitored, with the eval and observability scaffolding the team needs to operate it. Handover documentation written for the engineer who will own it next.",
  },
  {
    id: "retainer",
    name: "Fractional CTO retainer",
    shape: "Monthly retainer, three-month minimum.",
    goodFor:
      "Founders and growing teams that need engineering leadership without yet being able to hire one full time. Sets technical direction, runs architecture review, builds the team, and stays close to the code.",
    outcome:
      "A small engineering organization with a clear technical compass: architecture decisions documented, hires ramping, agent systems running in production, and the founder freed to focus on product and customers.",
  },
  {
    id: "audit",
    name: "Architecture review",
    shape: "One to two weeks. Diagnostic engagement.",
    goodFor:
      "Founders or teams with a working prototype who need a production-grade read on what to build next, what to discard, and which infrastructure decisions will not scale.",
    outcome:
      "A written architecture document covering data model, agent topology, tool boundaries, eval strategy, infrastructure choices, and a sequenced backlog. Optional working sessions to align the team.",
  },
];

const Services = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 max-w-4xl pt-20 pb-12 md:pt-24 md:pb-16">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Three engagement shapes, one bar.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Most engagements are sprints or retainers; an architecture review is the right
            starting point when a team needs a diagnostic read before committing. Each
            engagement stands alone; together they cover the arc from &ldquo;ship it and run
            it&rdquo; to &ldquo;is this the right architecture.&rdquo;
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
          <div className="space-y-12">
            {services.map((s, i) => (
              <article key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.name}</h2>
                </div>
                <p className="mt-2 ml-10 text-sm text-muted-foreground">{s.shape}</p>

                <div className="mt-6 ml-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Good for
                    </h3>
                    <p className="text-foreground leading-relaxed">{s.goodFor}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      What you get
                    </h3>
                    <p className="text-foreground leading-relaxed">{s.outcome}</p>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="mt-12 border-b border-border" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Pricing is per engagement and depends on scope, urgency, and team size. We share
            written proposals after a fit conversation. New work happens through warm
            introductions; see the{" "}
            <Link to="/about" className="text-foreground underline underline-offset-4 hover:text-primary">
              About
            </Link>{" "}
            page for context.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
