/**
 * Sleeps for a specified duration.
 *
 * @param {number} duration - The duration in milliseconds to sleep.
 * @return {Promise<void>} A promise that resolves after the specified duration.
 */
const sleep = (duration: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

export { sleep };
