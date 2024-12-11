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

module.exports = { createFileArray };
