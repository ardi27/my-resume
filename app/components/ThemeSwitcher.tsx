"use client";

import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Switch
      isSelected={theme === "light"}
      size="lg"
      color="primary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
};
export default ThemeSwitcher;
