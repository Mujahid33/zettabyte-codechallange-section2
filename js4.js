/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
  // your code here
  let result = [];
  data.map((value, index, array) => {
    if (index === array.length - 1) {
      return null
    }

    if (value?.firstName !== array[index + 1]?.firstName) {
      result.push('firstName')
    }

    if (value?.lastName !== array[index + 1]?.lastName) {
      result.push('lastName')
    }

    if (value?.age !== array[index + 1]?.age) {
      result.push('age')
    }
  })
  return result;
}

console.log(result(data));
// result(data);