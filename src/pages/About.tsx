import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 max-w-3xl pt-20 pb-12 md:pt-24 md:pb-16">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">About</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Synluma is an engineering practice for AI teams.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We work with a small number of AI founders and growing teams at a time. The
            engagements are senior, hands-on, and short enough that whoever owns the product is
            still in the room when the code is written.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who we work with</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The typical Synluma engagement is a venture-backed AI founder shipping their
              first production system, or a growing team adding agentic capability to an
              existing product. Either way the constraint is the same: a real deadline, a
              technically ambitious roadmap, and not enough senior engineering bandwidth in
              house.
            </p>
            <p>
              We are not the right team for enterprise digital transformation, generic web app
              development, or projects without a clear product owner. We&apos;re a good fit when
              the work is technically ambitious, the deadline is real, and the team is small
              enough that a senior engineer in the room actually moves the needle.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How we work</h2>
          <ul className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <li className="pl-6 relative">
              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-foreground font-medium">Senior by default.</span>{" "}
              Every engagement is led by a senior engineer who has shipped production agents
              before. No junior delivery layer.
            </li>
            <li className="pl-6 relative">
              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-foreground font-medium">Small batch.</span> We take a small
              number of engagements at a time so the work is concentrated and accountable.
            </li>
            <li className="pl-6 relative">
              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-foreground font-medium">Written and reviewable.</span>{" "}
              Architecture decisions, eval strategies, and handover documents are written down.
              Founders should be able to ramp the next engineer without re-deriving the
              context.
            </li>
            <li className="pl-6 relative">
              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-foreground font-medium">Production is the bar.</span>{" "}
              Demos are easy; the work is what holds up under real traffic. Eval and
              observability are part of every build, not afterthoughts.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Founder</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {/* TODO(udesh): replace with actual founder bio. */}
              Synluma is led by Udesh Senaratne, a senior engineer with a background in shipping
              production systems for early-stage companies. Past work spans agentic systems,
              developer infrastructure, and product engineering at venture-backed startups.
            </p>
            <p>
              Named case studies and references are available on request once an engagement
              starts. Public references will be added here as permissions are granted.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Working together</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We take on new engagements through warm introductions from founders, investors, and
            operators in our network. If you found us through someone we&apos;ve worked with,
            ask them for the fastest path. If we haven&apos;t met yet, the{" "}
            <Link to="/services" className="text-foreground underline underline-offset-4 hover:text-primary">
              Services
            </Link>{" "}
            page is the best place to start understanding whether we&apos;re a fit.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
