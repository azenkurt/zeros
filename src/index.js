module.exports = function zeros(expression) {
  let arr = expression.split('*')||expression;

  let rez = 1n;
  
  arr.forEach( el => {   
    let aa = el.split('!');
    aa.length === 2 ? rez *= fac1( BigInt(aa[0])) :
      aa[0] % 2 === 0 ? rez *= fac2( BigInt(aa[0])) : rez *= fac3( BigInt(aa[0]))   
  });
  
  let zeros = 0;
  
  while ( rez % 10n === 0n ) {
    zeros += 1;
    rez = rez/10n;
  }

  return zeros;
};
const fac1 = n => { return (n != 1n) ? n * fac1(BigInt(n) - 1n) : 1n};
const fac2 = n => { return (n != 2n) ? n * fac2(BigInt(n) - 2n) : 2n};
const fac3 = n => { return (n != 1n) ? n * fac3(BigInt(n) - 2n) : 1n};
