export const getDates = (endDate: Date): Date[] => {
  const dates = [];
  let currentDate = new Date(1970, 1, 1);
  const addDays = function(days: any) {
    const date = new Date(currentDate.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
};
export const tryEqualsArr = (arrayA: any[], arrayB: any[]) => {
  // if the other array is a falsy value, return
  if (!arrayA) return false;

  // compare lengths - can save a lot of time
  if (arrayA.length != arrayB.length) return false;

  for (var i = 0, l = arrayA.length; i < l; i++) {
    // Check if we have nested arrays
    if (arrayA[i] instanceof Array && arrayB[i] instanceof Array) {
      // recurse into the nested arrays
      if (!tryEqualsArr(arrayA[i], arrayB[i])) return false;
    } else if (arrayA[i] != arrayB[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};

