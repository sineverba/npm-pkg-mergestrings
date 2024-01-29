/**
 *
 * @param String startString The start string
 * @param int intLength The needed length
 */
export const mergeStrings = (...strings: string[]) => {
  /**
   * filter(Boolean) is a trick to remove
   * empty values from array
   */
  return strings.filter(Boolean).join(" ");
};
