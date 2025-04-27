export const debounce = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number = 100
): ((...args: T) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};