import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ValuesService extends BaseService {

    constructor(http: HttpClient) {
        super(http);
    }

    getItems(): Observable<Array<string>> {
        return this.http.get<Array<string>>(
            `${this.baseUri}api/values/`,
            { withCredentials: true }
        );
    }
}