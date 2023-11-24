export const dateCompare = (firstDate: Date, secondDate: Date) => {
  return firstDate.getTime() - secondDate.getTime();
};

const integerFormatter = Intl.NumberFormat("en-us", { minimumIntegerDigits: 2 }).format;

export const formatBaseDate = (date: Date) => {
  return `${integerFormatter(date.getDate())}/${integerFormatter(date.getMonth() + 1)}/${date.getFullYear()}`;
};
