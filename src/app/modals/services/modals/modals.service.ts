import { Injectable, OnDestroy } from "@angular/core";
import { IModalData, IModalMetadata } from "@modals/interfaces/modals.interface";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ModalsService implements OnDestroy {
  private showModalSubject = new Subject<IModalData>();
  private hideModalsSubject = new Subject<void>();
  private modalConfirmResultSubject = new Subject<IModalMetadata>();

  get showModal$(): Observable<IModalData> {
    return this.showModalSubject.asObservable();
  }

  get hideModals$(): Observable<void> {
    return this.hideModalsSubject.asObservable();
  }

  constructor() { }

  ngOnDestroy(): void {
    this.completeAllStreams();
  }

  public showModal(data: IModalData): Observable<IModalMetadata> {
    this.showModalSubject.next(data);
    return this.modalConfirmResultSubject.asObservable();
  }

  public hideModals(): void {
    this.hideModalsSubject.next();
  }

  public confirmModalValue(data: IModalMetadata): void {
    this.modalConfirmResultSubject.next(data);
  }

  private completeAllStreams(): void {
    this.showModalSubject.complete();
    this.hideModalsSubject.complete();
    this.modalConfirmResultSubject.complete();
  }
}
