import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';


const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data);

const strCollection = new CharactersCollection('zyx');
strCollection.sort();
console.log(strCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(7);
linkedList.add(2);
linkedList.print();

linkedList.sort()
linkedList.print();