function calculate() {
  let risultato = 0;
  
  return {
    add: numero => risultato += numero,
    sub: numero => risultato -= numero,
    multiply: numero => risultato *= numero,
    divide: numero => risultato /= numero,
    printResult: () => console.log(risultato)
  };
}

const calculator = calculate();
calculator.add(2);
calculator.add(4);
calculator.multiply(3);
calculator.sub(1);
calculator.sub(3);
calculator.divide(2);
calculator.printResult(); 


