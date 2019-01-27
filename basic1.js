const brain = require("brain.js");

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
const trainingdata = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];
net.train(trainingdata);
console.log(net.run([0, 0]));
//to log the error while training
/* net.train(trainingdata,{log:(error) => console.log(error),logPeriod:100}); */
//templates
//inputs & outputs
/*(inputs) => outputs; */
//random values
/*Math.random() */
//activation "relu"
/*
  function relu(value){
    return value<0?0:value;
  }
  */
//activate((inputWeights * inputs)*biases)
