import { ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { LoaderService } from "@app/loader/services/loader/loader.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  public isVisible: Observable<boolean> = null;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.isVisible = this.loaderService.isVisibleLoader;
  }
}
