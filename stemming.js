import natural from 'natural';

const sentence = 'I am waking up to the sounds of chainsaws';

const tokenizer = new natural.WordTokenizer(); 
const tokens = tokenizer.tokenize('i am waking up to the sounds of chainsaws'); 
console.log(tokens); 

const nData = natural.PorterStemmer.stem(sentence);
console.log(nData);
