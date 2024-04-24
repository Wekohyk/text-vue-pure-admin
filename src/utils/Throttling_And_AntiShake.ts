/* eslint-disable */
// 节流
// throttle

type Func<T extends any[]> = (...args: T) => void;

function throttle<T extends any[]>(func: Func<T>, delay: number): Func<T> {
  let lastCall = 0;
  return function (...args: T): void {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

// 防抖
// debounce
function debounce<T extends any[]>(func: Func<T>, delay: number): Func<T> {
  let timeoutId: NodeJS.Timeout | null = null;
  return function (...args: T): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export { throttle, debounce };
