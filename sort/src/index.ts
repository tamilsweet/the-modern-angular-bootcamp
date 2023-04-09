import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
console.log(numCollection.data);

const strCollection = new CharactersCollection('zyx');
const sorter1 = new Sorter(strCollection);
sorter1.sort();
console.log(strCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(7);
linkedList.add(2);

linkedList.print();

const sorter2 = new Sorter(linkedList);
sorter2.sort()
linkedList.print();