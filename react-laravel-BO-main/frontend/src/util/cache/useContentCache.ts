export async function checkCache (key: string) {
    return localStorage.getItem(key);
}

export async function setCache (key: string, value: any) {
    localStorage.setItem(key, value)
}