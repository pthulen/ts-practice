const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

//inference
const car = carMakers[0];

//prevent incompatiable values

//carMakers.push(100);

//help with array methods
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types
const importantDates: (Date | string)[] = [new Date()];
