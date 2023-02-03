import "reflect-metadata";

const plane = {
  color: "red",
};

Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", "30k", plane);
Reflect.defineMetadata("note2", "hi there again", plane, "color");

console.log(plane);

const note2 = Reflect.getMetadata("note2", plane, "color");
const note = Reflect.getMetadata("note", plane);
const height = Reflect.getMetadata("height", plane);

console.log(note);
console.log(height);
console.log(note2);
