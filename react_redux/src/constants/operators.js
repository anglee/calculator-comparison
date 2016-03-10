const operators = [
  { symbol: "+", name: "Sum", fn: (a, b) => a + b },
  { symbol: "-", name: "Difference", fn: (a, b) => a - b },
  { symbol: "%", name: "Modulo", fn: (a, b) => a % b },
  { symbol: "foo", name: "Foo", fn: (a, b) => a + b }
];

export default operators;