//count 1 to 5 : recurrent neural network : LSTM
//1-5,5-1

const brain = require("brain.js");
const trainingData = [
    [1,2,3,4,5],
    [5,4,3,2,1]
];
const net = new brain.recurrent.LSTMTimeStep();
net.train(trainingData,{log:(error)=> console.log(error)});
console.log(net.run([1,2,3]));
console.log(net.run([3,2]));