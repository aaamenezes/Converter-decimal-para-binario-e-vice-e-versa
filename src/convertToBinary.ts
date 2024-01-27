export function convertToBinary(decimal: number): number {
  if (decimal < 1) return 0;

  const base = 2;
  // const decimalBase = 10;

  function getBinaryList(decimal: number, list: number[]): number[] {
    if (decimal < base) return [...list, decimal];

    const newDecimal = Math.floor(decimal / base);
    const rest = decimal % base;
    const newList = [...list, rest];

    return getBinaryList(newDecimal, newList);
  }

  const binaryList = getBinaryList(decimal, []);
  return Number(binaryList.reverse().join(""));
}
