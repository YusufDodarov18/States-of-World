import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "../components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="relative">
      <Sun className={`h-5 w-5 transition-all duration-300 ${theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100" }`}/>
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${ theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0" }`}/>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
