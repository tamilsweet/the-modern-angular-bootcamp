import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
console.log(numCollection.data);

const strCollection = new CharactersCollection('zyx');
const sorter1 = new Sorter(strCollection);
sorter1.sort();
console.log(strCollection.data);