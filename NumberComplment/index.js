var findComplement = function(num) {
    let binary = num.toString(2);
    return parseInt(binary.split('').reverse().reduce((acc, digit, i) => {
      if (digit !== '1') return acc + Math.pow(2, i);
      return acc;
    }, 0), 10);
};

module.exports = findComplement;
