import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();
  
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projecten" },
    { path: "/news", label: "Nieuws" },
    { path: "/calendar", label: "Kalender" },
    { path: "/about", label: "Over Ons" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <img src="https://mbo-hub.amsterdam/images/mbo-hub-logo.png" alt="MBO-Hub Logo" className="h-10 w-30" />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={cn(
                  "transition-colors",
                  isActiveLink(item.path) 
                    ? "text-primary font-semibold" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Button variant="secondary" asChild>
              <Link to="/login">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};