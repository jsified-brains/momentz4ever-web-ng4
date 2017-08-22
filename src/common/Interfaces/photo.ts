export interface Photo {
    _id:string,
    ownerId: string,
    albumId: string,
    likeCount: number,
    comment: string,
    title:string,
    description:string,
    imageUrl:string,
    createdOn:string
}