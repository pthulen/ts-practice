import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", "30k", plane);
// Reflect.defineMetadata("note2", "hi there again", plane, "color");

// console.log(plane);

// const note2 = Reflect.getMetadata("note2", plane, "color");
// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);

// console.log(note);
// console.log(height);
// console.log(note2);

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("Vrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);
    router.get(path, middleware, target.prototype[key]);
  }
}
