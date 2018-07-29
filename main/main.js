module.exports = function main(strr) {
  summ = 0;
    for (var i=0; i<strr.length; i++){
      summ += Number(strr[i]);
    }
    return summ;
};
