const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

// Se poniamo un oggeto uguale a un altro, non possimo modificarne liberamente le proprietà in quanto fanno riferimento alle stesse aree di memoria. Quindi, verranno modificate le porpietà di entrambi gli oggetti.