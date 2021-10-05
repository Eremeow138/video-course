import { DurationPrettierPipe } from './duration-prettier.pipe';

describe('DurationPrettierPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPrettierPipe();
    expect(pipe).toBeTruthy();
  });
});
