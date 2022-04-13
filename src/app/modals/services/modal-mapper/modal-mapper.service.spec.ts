import { TestBed } from "@angular/core/testing";

import { ModalMapperService } from "./modal-mapper.service";

describe("ModalMapperService", () => {
  let service: ModalMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalMapperService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
