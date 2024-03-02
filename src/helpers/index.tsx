export const debounce = <Args extends unknown[], ReturnType>(
  func: (...args: Args) => ReturnType,
  wait: number,
): ((...args: Args) => void) => {
  let timeout: NodeJS.Timeout;
  return function (...args: Args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
