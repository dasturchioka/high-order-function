type StrArray = String[];

let myArray: StrArray = ["Vue", "Angular", "React"];

function reverseEach(arr: StrArray, fn: Function): Object {
  let newObj = { original: arr, reversed: [] };

  for (let i = 0; i < arr.length; i++) {
    let reversed = arr[i].split("").reverse().join("");

    newObj.reversed.push(reversed);

    fn(arr[i]);
  }

  return newObj;
}

const reversedArray = reverseEach(myArray, (obj) => {
  return obj;
});

console.log(reversedArray);

// Output:
// { original: [ 'Vue', 'Angular', 'React' ], reversed: [ 'euV', 'ralugnA', 'tcaeR' ] }
