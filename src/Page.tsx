import { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { convertToBinary } from './convertToBinary';
import { convertToDecimal } from './convertToDecimal';

export default function Page() {
  const [decimal, setDecimal] = useState(42);
  const [binaryResult, setBinaryResult] = useState(101010);

  const [binary, setBinary] = useState(101010);
  const [decimalResult, setDecimalResult] = useState(42);

  const handleSubmitDecimal = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      setBinaryResult(convertToBinary(decimal));
    },
    [setBinaryResult, decimal]
  );

  const handleSubmitBinary = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      setDecimalResult(convertToDecimal(binary));
    },
    [setDecimalResult, binary]
  );

  const handleChangeDecimal = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const newValue = Number(event.currentTarget.value);
      setDecimal(newValue);
      setBinaryResult(convertToBinary(newValue));
    },
    [setDecimal, setBinaryResult]
  );

  const handleChangeBinary = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const newValue = Number(
        event.currentTarget.value
          .split('')
          .filter(n => n === '1' || n === '0')
          .join('')
      );

      setBinary(newValue);
      setDecimalResult(convertToDecimal(newValue));
    },
    []
  );

  return (
    <main className='flex flex-col min-h-screen'>
      <header className='border-b border-solid bg-slate-100'>
        <h1 className='p-4 text-center text-4xl'>Converter</h1>
      </header>

      <div className='flex-1 grid gap-y-10 md:grid-cols-2 place-items-center p-3 bg-slate-200'>
        <form className='flex flex-col' onSubmit={handleSubmitDecimal}>
          <h2 className='text-3xl mb-8'>Decimal para Binário:</h2>
          <input
            type='number'
            className='p-2 mb-4 text-xl font-mono'
            value={decimal}
            onChange={handleChangeDecimal}
          />
          <button
            type='submit'
            className='rounded-md p-2 mb-8 text-white font-bold uppercase bg-purple-800 hover:bg-purple-900'>
            Convert
          </button>
          <div className='p-2 mb-2 text-xl font-mono bg-slate-300 cursor-default'>
            {binaryResult}
          </div>
          <button
            type='submit'
            className='rounded-md p-2 mb-2 font-bold uppercase bg-teal-200 hover:bg-teal-300'>
            Copy
          </button>
        </form>

        <form className='flex flex-col' onSubmit={handleSubmitBinary}>
          <h2 className='text-3xl mb-8'>Binário para Decimal:</h2>
          <input
            type='number'
            className='p-2 mb-4 text-xl font-mono'
            value={binary}
            onChange={handleChangeBinary}
          />
          <button
            type='submit'
            className='rounded-md p-2 mb-8 text-white font-bold uppercase bg-purple-800 hover:bg-purple-900'>
            Convert
          </button>
          <div className='p-2 mb-2 text-xl font-mono bg-slate-300 cursor-default'>
            {decimalResult}
          </div>
          <button
            type='submit'
            className='rounded-md p-2 mb-2 font-bold uppercase bg-teal-200 hover:bg-teal-300'>
            Copy
          </button>
        </form>
        <hr className='md:hidden w-full h-1 shadow-md bg-slate-300' />
      </div>
    </main>
  );
}
