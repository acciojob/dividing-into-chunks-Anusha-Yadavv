const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let currentChunk = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (currentChunk.reduce((sum, num) => sum + num, 0) + currentElement <= n) {
      currentChunk.push(currentElement);
    } else {
      result.push([...currentChunk]);
      currentChunk = [currentElement];
    }
  }

  // Add the last chunk if it is not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
