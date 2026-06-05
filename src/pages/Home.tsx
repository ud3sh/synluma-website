import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Architecture review",
    blurb: "One to two weeks. A senior read on what to build, in what order, on what infra.",
  },
  {
    title: "Build sprint",
    blurb: "Four to six weeks, fixed scope. Ship a production agent or piece of infra.",
  },
  {
    title: "Fractional CTO",
    blurb: "Monthly retainer, three-month minimum. Architecture, hiring, hands-on when needed.",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative">
        <div className="container mx-auto px-4 max-w-4xl pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
            Synluma · Fractional CTO &amp; agentic engineering
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Production engineering for teams shipping agents.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Synluma works with AI teams shipping production agents — whether it&apos;s the first
            one for a seed-stage product, the next one for a growing team, or putting an
            established company&apos;s proprietary data to work. Senior engineering in weeks
            instead of quarters, without the months of hiring it would normally take.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Button asChild>
              <Link to="/services">
                What we do <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/about">About</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl py-16 md:py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Three ways we work
            </h2>
            <Link
              to="/services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              See all services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border p-6 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our point of view</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Most agentic systems fail in the same places: brittle tool boundaries, undertested
              recovery paths, eval suites that score the wrong thing. The work isn&apos;t harder
              than other software, but the failure modes are unfamiliar to teams who shipped
              CRUD apps last year.
            </p>
            <p>
              We bring the operating experience of senior product engineers who have lived through
              real production incidents and the design taste to know which complexity is worth the
              cost.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/about">More about Synluma →</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Working with us</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We take on a small number of engagements at a time. New work comes through warm
            introductions from founders, investors, and operators we&apos;ve worked with before.
            If we haven&apos;t met, the fastest path is an introduction from someone who has.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
