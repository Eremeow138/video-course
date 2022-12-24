import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoaderService {

  private loadingSet = new Set<string>();

  private loaderStateSubject = new BehaviorSubject<boolean>(false);

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error("The request URL must be provided to the LoadingService.setLoading function");
    }

    if (loading) {
      this.loadingSet.add(url);
      this.loaderStateSubject.next(true);
    }

    if (!loading) {
      this.loadingSet.delete(url);

    }

    if (!this.loadingSet.size) {
      this.loaderStateSubject.next(false);
    }
  }

  get isVisibleLoader(): Observable<boolean> {
    return this.loaderStateSubject.asObservable().pipe(switchMap(result => result ? of(true).pipe(delay(300)) : of(false)));
  }
}
