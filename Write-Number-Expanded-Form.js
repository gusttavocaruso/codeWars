function expandedForm(num) {
  if (num > 99) {
    const centena = Math.round(num / 100) * 100;
    const dezena = Math.round((num - centena) / 10) * 10;
    const unidade = num % 10;
    return `${centena} + ${dezena} + ${unidade}`;
  }
  const dezena = Math.round(num / 10) * 10;
  const unidade = num % 10;
  return `${dezena} + ${unidade}`;
}

console.log(expandedForm(99));


// UNFINISHED YET ---------------*

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'