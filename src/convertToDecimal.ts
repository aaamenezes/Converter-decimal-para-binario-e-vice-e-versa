export function convertToDecimal(binario: number): number {
  const binaryInList = binario.toString().split('').reverse();
  const decimalsToSum = binaryInList.map((number, index: number) => {
    return Math.pow(2, index) * Number(number);
  });

  const decimalResult = decimalsToSum.reduce(
    (result, current) => result + current,
    0
  );

  return decimalResult;
}
