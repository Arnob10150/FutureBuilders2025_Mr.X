import { Link, useLocation } from "wouter";
import { Home, Stethoscope, MapPin, Phone, Info } from "lucide-react";
import clsx from "clsx";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/checkup", icon: Stethoscope, label: "Checkup" },
    { href: "/facilities", icon: MapPin, label: "Facilities" },
    { href: "/emergency", icon: Phone, label: "Emergency" },
    { href: "/about", icon: Info, label: "About" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = location === href;
          return (
            <Link key={href} href={href} className="w-full h-full flex flex-col items-center justify-center space-y-1">
              <div 
                className={clsx(
                  "p-1.5 rounded-xl transition-all duration-200",
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-gray-50"
                )}
              >
                <Icon className={clsx("w-6 h-6", isActive && "stroke-[2.5px]")} />
              </div>
              <span className={clsx("text-[10px] font-medium", isActive ? "text-primary" : "text-muted-foreground")}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function DesktopHeader() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/checkup", label: "Checkup" },
    { href: "/facilities", label: "Find Facilities" },
    { href: "/emergency", label: "Emergency" },
    { href: "/about", label: "About AI" },
  ];

  return (
    <header className="hidden md:block bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg p-1.5">
             <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-slate-900">HealthBridge</span>
        </Link>
        
        <div className="flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <Link 
              key={href} 
              href={href} 
              className={clsx(
                "text-sm font-medium transition-colors hover:text-primary",
                location === href ? "text-primary" : "text-slate-600"
              )}
            >
              {label}
            </Link>
          ))}
          <Link href="/checkup">
            <button className="bg-primary text-white px-5 py-2 rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm">
              Start Checkup
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
