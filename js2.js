// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
  // write your code here
  for (let val in data) {
    data[val] = data[val] * 3;
  }

  let sortable = Object.entries(data).sort(([, a], [, b]) => a - b).reduce((initiator, [key, value]) => ({ ...initiator, [key]: value }), {});
  return sortable;
}

console.log(result(data));
