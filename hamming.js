import natural from 'natural';

const distance = natural.HammingDistance('car', 'cat', false); 
console.log(distance);

const distance2 = natural.HammingDistance('kathrin', 'kerstin', false); 
console.log(distance2);