import { Component, OnInit } from "@angular/core";
import { IBreadcrumb } from "@pages/courses-page/courses/interfaces/breadcrumb/breadcrumb.interface";
import { BreadcrumbService } from "@pages/courses-page/courses/services/breadcrumb/breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"],
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs$: Observable<IBreadcrumb[]>;

  constructor(private breadcrumbService: BreadcrumbService) { }

  public ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
}
