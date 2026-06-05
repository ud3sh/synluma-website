import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  return (
    <section>
      <div className="container mx-auto px-4 max-w-2xl pt-24 pb-24 text-center">
        <p className="font-mono text-sm text-muted-foreground mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page at <code className="font-mono text-sm">{location.pathname}</code> doesn&apos;t
          exist or has moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">Back home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/services">See services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
