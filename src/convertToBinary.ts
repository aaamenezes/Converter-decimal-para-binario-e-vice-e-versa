export function convertToBinary(decimal: number = 0, base: number = 2) {
  if (decimal < 1) return '0';

  function getBinaryList(decimal: number, list: number[]): number[] {
    if (decimal < base) return [...list, decimal];

    const newDecimal = Math.floor(decimal / base);
    const rest = decimal % base;
    const newList = [...list, rest];

    return getBinaryList(newDecimal, newList);
  }

  const binaryList = getBinaryList(decimal, []);
  const binary = binaryList.toReversed().join('');

  return binary;
}
