export function makeDateReadable(date: Date) {
    return new Intl.DateTimeFormat("nl-NL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
    .format(date)
    .split("/")
    .reverse()
    .join("-");
}
  

export function parseDate(date: Date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
    const dd = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
    return `${yyyy}-${mm}-${dd}`;
}
  