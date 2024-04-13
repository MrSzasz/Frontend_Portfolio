import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark">(
    "theme-light"
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div className="flex items-center gap-2 cursor-none">
      <Label htmlFor="toggle" className="cursor-none">
        {theme === "theme-light" ? <SunIcon /> : <MoonIcon />}
      </Label>
      <Switch
        name="toggle"
        defaultChecked={false}
        onCheckedChange={() => {
          theme === "theme-light"
            ? setThemeState("dark")
            : setThemeState("theme-light");
        }}
        className="cursor-none"
        checked={theme !== "dark"}
      />
    </div>
  );
}
