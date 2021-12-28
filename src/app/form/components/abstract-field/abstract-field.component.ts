import { Directive, Input, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, ControlValueAccessor, FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Directive()
export abstract class AbstractFieldComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input()
  public id = "";
  @Input()
  public title = "";
  @Input()
  public placeholder = "";
  @Input()
  public fieldControl: AbstractControl = null;

  public value = "";

  public isDisabled = false;

  public ownFieldControl = new FormControl();

  public onChange: (value: any) => void = null;

  public onTouched: () => void = null;

  protected unsubscribe$ = new Subject<void>();

  public get isRequired(): boolean {
    if (!this.fieldControl.validator) {
      return false;
    }
    const validator = this.fieldControl.validator({} as AbstractControl);
    return !!(validator && validator.required);
  }

  public ngOnInit(): void {
    this.subscribeToValueUpdating();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public writeValue(outsideValue: string): void {
    this.value = outsideValue;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public updateValue(insideValue: string): void {
    this.value = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }

  protected subscribeToValueUpdating(): void {
    this.ownFieldControl.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(value => {
      this.value = value;
    });
  }

}
