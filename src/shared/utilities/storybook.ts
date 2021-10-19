/**
 * @example
 * toKebab('memberId')
 * // => 'member-id'
 */
const toKebab = (letter: string) => {
  return letter
    .split('')
    .map((char, index) => {
      return char.toUpperCase() === char ? `${index !== 0 ? '-' : ''}${char.toLowerCase()}` : char;
    })
    .join('');
};

/**
 * 引数に渡したオブジェクトをcustom elementsのatttributeの形に展開する
 * @example
 * const args = {
 *   name: 'John',
 *   id: '1E7D8C50-1CEE-465E-8EE5-60B66C0319F7'
 * }
 *
 * <my-component {embedArgs(args)}></my-component>
 * // => <my-component name="John" id="1E7D8C50-1CEE-465E-8EE5-60B66C0319F7"></my-component>
 */
export const embedArgs = <T extends object>(args: T) =>
  Object.entries(args)
    .map(([key, value]) => {
      const parsedKey = toKebab(key);
      return `${parsedKey}=${JSON.stringify(value)}`;
    })
    .join(' ');
