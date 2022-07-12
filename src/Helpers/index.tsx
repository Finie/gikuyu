import moment from 'moment';

const isEmpty = (obj: {hasOwnProperty: (arg0: string) => any}) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

const getAccroNames = (firstName: string, lastName: string) => {
  const initial = `${firstName.substring(0, 1)}${lastName.substring(
    0,
    1,
  )}`.toUpperCase();

  return initial;
};

const getTheMinimumSelectableYear = () => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear() - 18;

  return `${year}-${month.toString().length === 1 ? '0' + month : month}-${
    day.toString().length === 1 ? '0' + day : day
  }`;
};

export default {
  isEmpty,
  getAccroNames,
  getTheMinimumSelectableYear,
};
