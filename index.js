function sumItems(array) {
  let output = 0;
  array.forEach(item => {
    if (Array.isArray(item)) {
      output += sumItems(item);
    } else {
      output += item;
    }
  });
  return output;
}
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
console.log(sumItems([1, 2, 3, 4, 5]));

module.exports = sumItems;

