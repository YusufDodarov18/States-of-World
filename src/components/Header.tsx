import { Globe } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import Input from "./ui/input";
import { Link } from "react-router-dom";
import SelectVariants from "./ui/select";
import type { HeaderType } from "../types";
import { useTheme } from "../theme/theme-provider";

export default function Header({name, search, setName, setValue, value}: HeaderType) {
  const { theme } = useTheme();

  return (
    <header className={`border-b fixed top-0 left-0 right-0 py-4 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center border-b-gray-400 ${theme === 'dark' ? 'bg-gray-900 text-white border-b-gray-700' : 'bg-white text-black'}`}>
      <div className="mb-4 md:mb-0">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <Globe />
          <Link to="/">Кишварҳои Ҷаҳон</Link>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-4 md:mb-0">
        <Input name={name} search={search} setName={setName} />
        <SelectVariants value={value} setValue={setValue} />
      </div>
      <div><ModeToggle /></div>
    </header>
  );
}
