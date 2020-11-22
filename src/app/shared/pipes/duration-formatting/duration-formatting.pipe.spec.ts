import { DurationFormattingPipe } from './duration-formatting.pipe';

describe('DurationPipePipe', () => {
  it('should format minutes correctly', () => {
    const pipe: DurationFormattingPipe = new DurationFormattingPipe();
    expect(pipe.transform(40)).toBe('40min');
  });

  it('should format hours correctly', () => {
    const pipe: DurationFormattingPipe = new DurationFormattingPipe();
    expect(pipe.transform(60)).toBe('1h');
  });

  it('should format hours and minutes correctly', () => {
    const pipe: DurationFormattingPipe = new DurationFormattingPipe();
    expect(pipe.transform(90)).toBe('1h 30min');
  });
});
