import { Sorter } from './sorter.js';
import { NumbersCollection } from './NumbersCollection';
const numbers = new NumbersCollection([0, 10, -1, 9]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.data);
//# sourceMappingURL=index.js.map