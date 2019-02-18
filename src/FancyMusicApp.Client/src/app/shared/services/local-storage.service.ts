
import {from as observableFrom, Observable} from 'rxjs';
import * as localforage from 'localforage';
import {Injectable} from "@angular/core";


@Injectable()
export class LocalStorageService {

  /**
   *
   * @param key
   * @param value
   * @returns {any}
   */
  public setItem<T>(key:string, value:T):Observable<T>{
    return observableFrom(localforage.setItem(key, value))
  }

  /**
   *
   * @param key
   * @returns {any}
   */
  public getItem<T>(key:string):Observable<any>{
    return observableFrom(localforage.getItem(key))
  }

  /**
   *
   * @param key
   * @returns {any}
   */
  public removeItem(key:string):Observable<void>{
    return observableFrom(localforage.removeItem(key))
  }
}