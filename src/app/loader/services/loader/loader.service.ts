import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoaderService implements OnDestroy {

  private loaderStateSubject = new BehaviorSubject<boolean>(false);

  ngOnDestroy(): void {
    this.loaderStateSubject.complete();
  }

  get isVisibleLoader(): Observable<boolean> {
    return this.loaderStateSubject.asObservable();
  }

  public hideLoader(): void {
    this.loaderStateSubject.next(false);
  }

  public showLoader(): void {
    this.loaderStateSubject.next(true);
  }
}
