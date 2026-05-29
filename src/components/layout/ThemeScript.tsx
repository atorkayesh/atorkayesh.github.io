const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem("theme") || "system";
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var resolvedTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;
    var root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;
  } catch (error) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
