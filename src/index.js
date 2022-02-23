module.exports = function check(str, bracketsConfig) {
  let symbol = [];
  let strArr = str.split("");
  const open = bracketsConfig.map(([open]) => open);
  const close = bracketsConfig.map(([, close]) => close);
  strArr.forEach((e, i) => {
    if (i === 0) {
      symbol.push(e);
      return;
    }
    if (close.includes(e)) {
      if (open[close.indexOf(e)] === symbol[symbol.length - 1]) {
        symbol.pop();
      } else {
        symbol.push(e);
      }
    } else {
      symbol.push(e);
    }
  });
  return symbol.length === 0;
};
