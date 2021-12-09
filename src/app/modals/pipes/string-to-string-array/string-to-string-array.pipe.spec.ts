import { StringToStringArrayPipe } from "./string-to-string-array.pipe";

describe("StringToStringArrayPipe", () => {
  it("create an instance", () => {
    const pipe = new StringToStringArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
