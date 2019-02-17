import { AlbumModel } from "./album.model";

export class SearchResultModel {
    resultCount: number;
    results: Array<AlbumModel>;

    public constructor(init?: Partial<SearchResultModel>) {
        Object.assign(this, init);
    }
}
