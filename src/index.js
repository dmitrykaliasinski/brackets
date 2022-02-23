module.exports = function check(str, bracketsConfig) {
  let symbol = [];
  let strArr = str.split("");
  const open = bracketsConfig.map(([open]) => open);
  const close = bracketsConfig.map(([, close]) => close);
  for (let i = 0; i < strArr.length; i++) {
    if (open.includes(strArr[i])) {
      symbol.push(strArr[i]);
    }
    if (close.includes(strArr[i])) {
      if (open[close.indexOf(strArr[i])] === symbol[symbol.length - 1]) {
        symbol.pop();
      } else {
        return false;
      }
    }
  }
  return symbol.length === 0;
};
