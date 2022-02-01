import { Component, OnInit } from "@angular/core";
import { IBreadcrumb } from "@app/breadcrumbs/interfaces/breadcrumb.interface";
import { BreadcrumbService } from "@app/breadcrumbs/services/breadcrumb.service";
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
