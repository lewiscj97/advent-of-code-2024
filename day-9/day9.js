function optimiseFileArrayNoFragmentation(input) {
  const fileArray = createFileArray(input);
  let fileId = parseInt(fileArray.at(-1));

  const intFileArray = fileArray.map(Number)

  for (fileId; fileId > 0; fileId--) {
    const indexesOfId = _findIndexesForCurrentId(intFileArray, fileId);
    const blocksOfEmptySpace = _findBlocksOfEmptySpace(fileArray);
    _moveBlockOfIntegersToEmptySpace(fileArray, fileId, indexesOfId, blocksOfEmptySpace);
  }

  return fileArray;
}

function _moveBlockOfIntegersToEmptySpace(fileArray, fileId, indexesOfId, blocksOfEmptySpace) {
  for (let x = 0; x < blocksOfEmptySpace.length; x++) {
    const block = blocksOfEmptySpace[x];
    if (block.length >= indexesOfId.length) {
      indexesOfId.forEach((index, i) => {
        if (index > block[i]) {
          fileArray[index] = '.';
          fileArray[block[i]] = fileId.toString();
        }
      });
      break;
    }
  }
}

function _findBlocksOfEmptySpace(fileArray) {
  const blocksOfEmptySpace = [];

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

  return blocksOfEmptySpace;
}

function _findIndexesForCurrentId(fileArray, id) {
  const indexesOfId = [];
  for (let j = 0; j < fileArray.length; j++) {
    if (fileArray[j] === id) {
      indexesOfId.push(j);
    }
  }
  return indexesOfId;
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
