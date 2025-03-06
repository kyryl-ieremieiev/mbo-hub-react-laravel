export interface PaginatedFetch {
    current_page: string | null,
    data: any[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: any[],
    next_page_url: string,
    path: string,
    per_page: number | null,
    prev_page_url: string | null,
    to: number | null,
    total: number
}