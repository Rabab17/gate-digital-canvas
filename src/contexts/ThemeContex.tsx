import { useEffect, useState } from "react";

const [theme, setTheme] = useState("light");

useEffect(() => {
  // نقرأ الثيم من ال localStorage أو من الـ class في body
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    // ممكن تعتمد على prefer-color-scheme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
}, []);
