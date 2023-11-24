export const formatAfirmation = (data: string) => {
  switch (data) {
    case "Y":
      return "Yes";
    case "N":
      return "No";
    default:
      return "";
  }
};
