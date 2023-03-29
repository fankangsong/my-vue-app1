export function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.setAttribute("data-status", "loading");
  // Add script to document body
  document.body.appendChild(script);
}