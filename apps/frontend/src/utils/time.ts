const toDoubleDigit = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (timeDifference: number) => {
  const seconds = Math.floor(timeDifference);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return `${toDoubleDigit(hours)}:${toDoubleDigit(minutes)}:${toDoubleDigit(
    seconds
  )}`;
};
