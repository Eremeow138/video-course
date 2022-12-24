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

  private urlExceptions = [urls.authors];

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.urlExceptions.includes(request.url)) {
      return next.handle(request);
    }

    this.loaderService.setLoading(true, request.urlWithParams);

    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.setLoading(false, request.urlWithParams);
      })
    );
  }
}
