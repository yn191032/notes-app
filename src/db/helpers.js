import moment from 'moment';

export const sortByDate = (arr) => {
  return arr.sort((a, b) => {
    return moment(b.date).diff(a.date);
  });
};

export const getDate = () => {
  return moment().format();
};