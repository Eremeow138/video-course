import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoaderService } from "@app/loader/services/loader/loader.service";
import { finalize } from "rxjs/operators";
import { urls } from "@environments/environment";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url !== urls.authors) {
      this.loaderService.showLoader();
    }
    return next.handle(request).pipe(
      finalize(() => {
        if (request.url !== urls.authors) {
          this.loaderService.hideLoader();
        }
      })
    );
  }
}
