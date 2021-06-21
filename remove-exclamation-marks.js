function removeExclamationMarks(s) {
  let newS = s.split('');
  let sFinal = '';
  for (let i = 0; i < newS.length; i += 1) {
    newS[i] !== '!' ? sFinal += newS[i] : newS[i];
  }
  return sFinal;
};
