function optimiseFileArrayNoFragmentation(input) {
  const fileArray = createFileArray(input);
  let fileId = parseInt(fileArray.at(-1));

  console.log(fileArray.toString());

  const intFileArray = fileArray.map(Number)

  for (fileId; fileId > 0; fileId--) {
    const indexesOfId = [];
    for (let j = 0; j < intFileArray.length; j++) {
      if (intFileArray[j] === fileId) {
        indexesOfId.push(j);
      }
    }

    let blocksOfEmptySpace = [];

    let i = 0;

    while (i < fileArray.length) {
      if (fileArray[i] === '.') {
        const intermediateArr = [];
        while (i < fileArray.length && fileArray[i] === '.') {
          intermediateArr.push(i);
          i++;
        }
        blocksOfEmptySpace.push(intermediateArr);
      } else {
        i++;
      }
    }

    let keepAdding = true;

    let x = 0;
    while (keepAdding) {
      const block = blocksOfEmptySpace[x];
      if (block.length >= indexesOfId.length) {
        for (let i = 0; i < indexesOfId.length; i++) {
          if (indexesOfId[i] > block[i]) {
            fileArray[indexesOfId[i]] = '.';
            fileArray[block[i]] = fileId.toString();
          }
        }
        break;
      } else {
        x++;
        if (x > blocksOfEmptySpace.length-1) break;
      }
    }

  }

  return fileArray;
}

function calculateChecksum(input) {
  const fileArray = optimiseFileArray(input).map(Number, 0);
  let checksum = 0;

  fileArray.forEach((value, i) => {
    if (!isNaN(value)) {
      checksum += value*i;
    }
  });

  return checksum;
}

function optimiseFileArray(input) {
  const fileArray = createFileArray(input);

  for (let i = -1; i > -fileArray.length; i--) {
    const val = fileArray.at(i);
    if (val !== '.') {
      const firstEmptyIndex = fileArray.findIndex((element) => element === '.');
      if (firstEmptyIndex > fileArray.length + i) {
        break;
      }
      fileArray[firstEmptyIndex] = val;
      fileArray[fileArray.length + i] = '.';
    }
  }

  return fileArray;
}

function createFileArray(input) {
  let startId = 0;
  let fileArray = [];
  let isGap = false;

  const intSplit = input.split('').map(Number);

  intSplit.forEach((val) => {
    if (!isGap) {
      for (let i = 0; i < val; i++) {
        fileArray.push(startId);
      }
      isGap = true;
      startId++;
    } else {
      for (let i = 0; i < val; i++) {
        fileArray.push('.');
      }
      isGap = false;
    }
  });
  return fileArray.map(String);
}

module.exports = { createFileArray, optimiseFileArray, calculateChecksum, optimiseFileArrayNoFragmentation };
