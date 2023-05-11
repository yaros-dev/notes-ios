export function clocktime() {
  return new Date().toLocaleString("ru-RU", {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
