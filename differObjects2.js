
//feed neural network with diffrent datatypes like objects
const brain = require("brain.js");
const resturants = {
    "qa": "Monday",
    "fd":"Tuesday",
    "hd":"Wednesday",
    "kd":"Thursday",
    "kl":"Friday",
    "sa":"Saturday",
    "op":"Sunday"
};
//input:{Mopnday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday}
//output:{Resturant Name}
const trainingData = [];
for (name in resturants){
    const dayOfWeek = resturants[name];
    trainingData.push({
        input:{[dayOfWeek]:1},
        output:{[name]:1}
    });
}
const net = new brain.NeuralNetwork({hiddenLayers :[3]});

const stats = net.train(trainingData);
console.log(stats);
const res=net.run({"Monday":1});
console.log(res);