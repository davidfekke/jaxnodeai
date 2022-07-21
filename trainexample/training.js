import fs from 'fs';
import natural from 'natural';
import path from 'path';

const { BayesClassifier } = natural;
const classifier = new BayesClassifier();

const files = await fs.promises.readdir('./trainexample/');

const filelist = files.filter(file => file.endsWith('.json')).filter(file => file.startsWith('gmailmessage') || file.startsWith('fekkemessage'));

let trainingdata = [];

filelist.forEach(file =>{
    const rawdata = fs.readFileSync(path.join('trainexample', file), 'utf8');
    const data = JSON.parse(rawdata);
    trainingdata = [...trainingdata, ...data];
});

trainingdata.forEach(item => {
    classifier.addDocument(item.headline, item.twitteruser);
});

classifier.train();

classifier.save('classifier.json', function(err, classifier) {
    // handle callback
});

// test with this headline: How to Remove an Element from an Array by ID in JavaScript
// How I optimized my node js rest api and reduced response time from 2 mins to…
// Goodbye Node JS
// Why Elon Musk Fired Most of His Long-Term Employees Who Had Stuck by Him f
// 11 BEST Mac Apps for Productivity You Need To Use in 2022

console.log('1: ' + classifier.classify('How to Remove an Element from an Array by ID in JavaScript')); // jaxnode
console.log('2: ' + classifier.classify('Goodbye Node JS')); // jaxnode
console.log('3: ' + classifier.classify('Why Elon Musk Fired Most of His Long-Term Employees Who Had Stuck by Him f')); // nothing
