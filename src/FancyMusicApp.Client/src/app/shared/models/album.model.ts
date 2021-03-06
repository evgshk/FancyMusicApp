export class AlbumModel {
    artistName: string;
    artworkUrl60: string;
    artworkUrl100: string; 
    collectionType: string;
    collectionName: string;
    primaryGenreName: string;
    releaseDate: Date;
    collectionViewUrl: string;

    public constructor(init?: Partial<AlbumModel>) {
        Object.assign(this, init);
    }
}
