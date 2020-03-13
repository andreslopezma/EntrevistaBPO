export class Fotos {
     constructor( albumId = 0, id= 0, title = '', url = '', thumbnailUrl = '' ) {
        this.id = id;
        this.albumId = albumId;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
