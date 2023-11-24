export const dateCompare = (firstDate: string, secondDate: string) => {
  return new Date(firstDate).getTime() - new Date(secondDate).getTime();
};
