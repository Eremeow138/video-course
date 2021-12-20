import { Component } from "@angular/core";
import { AuthService } from "@authentication/services/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = "video-course";

  public isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService){
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
}
