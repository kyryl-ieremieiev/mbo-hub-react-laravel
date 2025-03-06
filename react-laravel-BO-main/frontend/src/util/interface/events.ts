export interface EventType {
    date: string | null,
    description: string,
    id: number | string,
    image: string | null,
    location: string,
    tags: string[] | null,
    title: string,
    created_at: string | null,
    updated_at: string
}