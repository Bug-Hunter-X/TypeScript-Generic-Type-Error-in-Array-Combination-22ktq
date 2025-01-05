function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

const combinedArray: (string | number)[] = combineArrays(arr1, arr2); //Corrected
console.log(combinedArray); 