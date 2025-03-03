export async function checkCache (key: string) {
    const raw = localStorage.getItem(key);

    if(!raw) return null;

    return JSON.parse(raw);
}

export async function setCache (key: string, value: any) {
    localStorage.setItem(key, value)
}