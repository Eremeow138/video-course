import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Directive()
export abstract class AbstractFieldComponent implements OnInit, OnDestroy {

  @Input()
  public fieldName = "";
  @Input()
  public title = "";
  @Input()
  public placeholder = "";
  @Input()
  public control: FormControl = null;

  protected unsubscribe$ = new Subject<void>();

  public get isRequired(): boolean {
    if (!this.control.validator) {
      return false;
    }
    const validator = this.control.validator({} as FormControl);
    return !!(validator && validator.required);
  }

  constructor(protected cd: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.subscribeToValueUpdating();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  protected subscribeToValueUpdating(): void {
    this.control.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.cd.detectChanges();
    });
  }

}
