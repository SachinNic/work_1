import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SearchResponse {
    content: [],
    last: boolean,
    totalElements: Number,
    totalPages: Number,
    first: boolean,
    sort: any,
    numberOfElements: Number,
    size: Number,
    number: Number
}

interface OtherSearchResponse {
    content: [],
}

@Injectable({
    providedIn: 'root',
})

export class DataService {

    search(dtp: Array<any>) {
        return this.http.post<SearchResponse>("http://localhost:42529/person/searchPerson", dtp);
    }

    constructor(private http: HttpClient) {

    }

    cmp(per) {
        return this.http.post<[]>("http://localhost:42529/person/baseInfo", per);
    }

    aop(per) {
        return this.http.post<[]>("http://localhost:42529/person/aop", per);
    }

    edu(per) {
        return this.http.post<[]>("http://localhost:42529/person/education", per);
    }

    exp(per) {
        return this.http.post<[]>("http://localhost:42529/person/experience", per);
    }

    public getData() {
        return this.http.post<SearchResponse>("http://localhost:42529/person/allPerson", null);
    }

}