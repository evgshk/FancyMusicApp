import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SearchResultModel } from "../models/search-result.model";
@Injectable()
export class LibraryService extends BaseService {

    constructor(http: HttpClient) {
        super(http);
    }

    searchAlbums(term: string): Observable<SearchResultModel> {
        return this.http.get<SearchResultModel>(`${this.baseUri}api/library/search?term=${term}`, { withCredentials: true });
    }
}
