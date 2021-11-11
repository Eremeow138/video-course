import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBorderHighlight]"
})
export class BorderHighlightDirective implements OnInit {
  @Input("appBorderHighlight")
  public date!: string;
  private readonly freshnessInDays = 14;

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) { }

  ngOnInit() {
    this.addBorderHighlight();
  }

  addBorderHighlight() {
    const currentDate = new Date();
    const creationDate = new Date(Date.parse(this.date));
    const freshnessDate = new Date(new Date().setDate(currentDate.getDate() - this.freshnessInDays));

    const isFresh = creationDate < currentDate && creationDate >= freshnessDate;
    const isUpcoming = creationDate > currentDate;

    if (isFresh) {
      this.renderer.addClass(this.elementRef.nativeElement, "course-card--fresh");
    } else if (isUpcoming) {
      this.renderer.addClass(this.elementRef.nativeElement, "course-card--upcoming");
    }
  }
}
