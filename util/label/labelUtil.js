export const lastCount = (newData, previousData) => {
  const filterData = previousData.filter((el) => {
    const currentTimeStamp = new Date();
    const todayIs = currentTimeStamp.getDate();
    const currentMonthIs = currentTimeStamp.getMonth();
    const currentYearIs = currentTimeStamp.getFullYear();

    if (el.date && el.category) {
      return (
        new Date(el.date).getMonth() === currentMonthIs &&
        el.prefix === newData.category
      );
    } else {
      return new Error("There have no date information or category");
    }
  });
  let currentCount = filterData.length;
  return currentCount;
};

export const prefixSn = (date) => {
  const baseDate = String(new Date(date).getDate()).padStart(2, 0);
  const baseMonth = String(new Date(date).getMonth() + 1).padStart(2, 0);
  const baseYear = String(new Date(date).getFullYear());

  return new Date(baseYear, baseMonth, baseDate).getTime() / 1000;
};

export const rangeSn = (previousCount = 0, qty, step = 1) => {
  let start = previousCount + 1;
  let stop = qty + start - 1;

  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
};

export const serailNoFunction = (arr, prefix, mod = 10) => {
  const sn = arr.map((el) => {
    const preSnNumber = +prefix + el;
    return preSnNumber;
  });
  return sn;
};

export const modifySn = (arr, baseData) => {
  return arr.map((el) => {
    const moSn = { sn: "", isPrint: true };
    moSn.sn = el;
    return { ...baseData, ...moSn };
  });
};
