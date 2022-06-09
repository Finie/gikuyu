const isEmpty = (obj: {hasOwnProperty: (arg0: string) => any}) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

export default {
  isEmpty,
};
