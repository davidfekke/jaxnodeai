import brain from 'brain.js';

const net = new brain.recurrent.LSTM();

net.train([
  {input: "my unit-tests failed.", output: "software"},
  {input: "tried the program, but it was buggy.", output: "software"},
  {input: "i need a new power supply.", output: "hardware"},
  {input: "the drive has a 2TB capacity.", output: "hardware"},
  {input: "unit-tests", output: "software"},
  {input: "program", output: "software"},
  {input: "power supply", output: "hardware"},
  {input: "drive", output: "hardware"},
]);

// console.log("output = "+net.run("drive"));