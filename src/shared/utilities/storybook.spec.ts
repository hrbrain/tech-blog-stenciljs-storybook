import { embedArgs } from './storybook';

describe('storybook', () => {
  describe('embedArgs', () => {
    it('when input object as args of component, then return ', () => {
      const args = {
        name: '太郎',
        age: 20,
      };

      const result = embedArgs(args);

      expect(result).toBe('name="太郎" age=20');
    });
  });
});
