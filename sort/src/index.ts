import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const characterCollection = new CharactersCollection("xFstka");

const sorter = new Sorter(characterCollection);

sorter.sort();
console.log(sorter.collection);
