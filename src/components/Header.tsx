// C:\Aman Raj\EduSangrah\src\components\Header.tsx

import { Button } from "@/components/ui/button";
import { GraduationCap, User, Users, Settings, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 glass-card border-b backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 slide-in-left hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow hover-glow">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-black gradient-text">EduSangrah</h1>
              <p className="text-xs text-muted-foreground font-medium">
                Government of Jammu & Kashmir
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {["about", "features", "pricing", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="relative text-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-full hover:bg-primary/5"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 slide-in-right">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-2 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 font-medium"
              onClick={() => handleNavigate("/student/register")}
            >
              <User className="w-4 h-4 mr-2" />
              Student Portal
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-2 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 font-medium"
              onClick={() => handleNavigate("/faculty/register")}
            >
              <Users className="w-4 h-4 mr-2" />
              Faculty Portal
            </Button>
            <div className="relative">
              <Button
                size="sm"
                className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 rounded-full font-semibold px-6"
                onClick={() => handleNavigate("/admin/login")}
              >
                <Settings className="w-4 h-4 mr-2" />
                Admin Portal
              </Button>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {/* Nav Links */}
              {["about", "features", "pricing", "contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-full hover:bg-primary/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}

              {/* Role Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-2 hover:border-primary/30 hover:bg-primary/5 font-medium justify-start"
                  onClick={() => handleNavigate("/student/register")}
                >
                  <User className="w-4 h-4 mr-2" />
                  Student Portal
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-2 hover:border-primary/30 hover:bg-primary/5 font-medium justify-start"
                  onClick={() => handleNavigate("/faculty/register")}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Faculty Portal
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-primary hover:shadow-glow rounded-full font-semibold justify-start"
                  onClick={() => handleNavigate("/admin/login")}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Admin Portal
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
