export interface USER {
    id: string,
    name: string,
    first_name: string,
    last_name: string,
    email: string,
    picture: FB_PICTURE
}

export interface FB_PICTURE {
    data: {
        is_silhouette: boolean,
        url: string
    }
}
