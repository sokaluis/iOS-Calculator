import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalc = () => {
  const [result, setResult] = useState('0');
  const [prevResult, setPrevResult] = useState('0');
  const lastOperationRef = useRef<Operadores>();
  const cleanResult = () => {
    setResult('0');
    setPrevResult('0');
  };
  const resultNumber = (numberText: string) => {
    if (result.includes('.') && numberText === '.') {
      return;
    }
    if (result.startsWith('0') || result.startsWith('-0')) {
      // decimal
      if (numberText === '.') {
        setResult(result + numberText);
        // Evaluar si es otro cero y hay un punto
      } else if (numberText === '0' && result.includes('.')) {
        setResult(result + numberText);
        // evaluar si es diferente de 0 y no tiene un .
      } else if (numberText !== '0' && !result.includes('.')) {
        setResult(numberText);
      } else if (numberText === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + numberText);
      }
    } else {
      setResult(result + numberText);
    }
  };
  const plusMinus = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numTemp = result;
    if (result.includes('-')) {
      negativo = '-';
      numTemp = numTemp.substring(1);
    }

    if (numTemp.length > 1) {
      setResult(negativo + numTemp.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const handlePrevNumber = () => {
    if (result.endsWith('.')) {
      setPrevResult(result.slice(0, -1));
    } else {
      setPrevResult(result);
    }
    setResult('0');
  };

  const btnDiv = () => {
    handlePrevNumber();
    lastOperationRef.current = Operadores.dividir;
  };
  const btnMulti = () => {
    handlePrevNumber();
    lastOperationRef.current = Operadores.multiplicar;
  };
  const btnRest = () => {
    handlePrevNumber();
    lastOperationRef.current = Operadores.restar;
  };
  const btnSum = () => {
    handlePrevNumber();
    lastOperationRef.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(result);
    const num2 = Number(prevResult);

    switch (lastOperationRef.current) {
      case Operadores.sumar:
        setResult(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setResult(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setResult(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setResult(`${num2 / num1}`);
        break;
    }
    setPrevResult('0');
  };

  return {
    result,
    prevResult,
    cleanResult,
    plusMinus,
    btnDelete,
    btnDiv,
    btnMulti,
    btnSum,
    btnRest,
    resultNumber,
    calcular,
  };
};
