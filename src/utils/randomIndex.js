import gsap from "gsap";

export function randomIndex(array) {
  const record = [];
  while (record.length <= array.length - 1) {
    const randomIndexPosition = () => gsap.utils.random(0, array.length - 1);
    let index = Math.round(randomIndexPosition());
    const findNumber = record.findIndex((number) => number === index);
    if (findNumber === -1) {
      record.push(index);
    } else {
      let newNumber = 0;
      const num = index + 1;
      if (num > array.length - 1) {
        newNumber = index - 1;
      }
      if (num === 1) {
        newNumber = index + 1;
      }
      const findNumber = record.findIndex((number) => number === newNumber);
      if (findNumber === -1) {
        record.push(newNumber);
      }
    }
  }
  return record;
}
