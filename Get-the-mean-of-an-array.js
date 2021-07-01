function getAverage(marks) {
  return Math.floor(marks.reduce((acc, mark) => acc + mark) / marks.length);
}
