export interface ProjectsInterface {
    current_page: number,
    last_page: number,
    data: ProjectInterface[]
}

export interface ProjectInterface {
    id: number | string,
    title: string,
    content: string,
    image: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    links: string[],
    show_on_homepage: number | boolean,
    tags: string[],
    slug: string,
}