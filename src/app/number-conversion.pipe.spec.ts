import { NumberConversionPipe } from './number-conversion.pipe';

describe('NumberConversionPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
