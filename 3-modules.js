//CommonJS - every file is module(by default)
//MODULES  - Encapsulated Code (only share minimun)

const {john,peter} = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');

const {items,singlePerson} = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayHi(john);
sayHi(peter);

console.log(data.items);
console.log(data.singlePerson);
console.log(items);
console.log(singlePerson);