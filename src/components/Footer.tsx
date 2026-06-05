import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Link to="/" className="font-semibold text-foreground">
              Synluma
            </Link>
            <span aria-hidden="true">·</span>
            <span>Fractional CTO &amp; agentic engineering</span>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground" aria-label="Footer">
            <Link to="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
          © {year} Synluma. New engagements by warm introduction.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
