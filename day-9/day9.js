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
    } else {

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

module.exports = { createFileArray, optimiseFileArray, calculateChecksum };
