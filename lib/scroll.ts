export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 80;
  const rect = element.getBoundingClientRect();
  const offsetPosition = rect.top + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

