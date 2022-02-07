import { FormControl, FormGroup } from "@angular/forms";

export abstract class AbstractForm extends FormGroup {

  constructor() {
    super({});
  }

  public get(controlName: string): FormControl {
    return <FormControl>super.get(controlName);
  }
}
