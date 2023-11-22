export const hyphenStringToWords = (str: string): string => {
  let wordsArray: string[] = str.split(/-/);

  let result: string = wordsArray.join(' ');

  return result;
};
