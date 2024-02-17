/**
 * 
 * @param {string} txt - The income text to be sliced.
 * @param {number} [max = 50] - The maximum length before truncation
 * @returns The sliced text with (---) appended if truncated
 */
  export function txtSlicer(txt: string, max: number = 50) {
    if (txt.length >= max) return `${txt.slice(0, max)}...`;
    return txt;
  }