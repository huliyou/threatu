/**
 * Created by wl on 16/7/8.
 */

export const formatDate = (strTime) => {
  if (strTime) {
    const date = new Date(strTime);
    const month = `0${(date.getMonth() + 1)}`;
    const day = `0${date.getDate()}`;
    const hour = `0${date.getHours()}`;
    const min = `0${date.getMinutes()}`;
    const second = `0${date.getSeconds()}`;
    return `${date.getFullYear()}-${month.substr(-2, 2)}-${day.substr(-2, 2)} ${hour.substr(-2, 2)}:${min.substr(-2, 2)}:${second.substr(-2, 2)}`;
  }
  return '';
};

export const formatDateTwo = (strTime, type) => {
  if (strTime) {
    const date = new Date(strTime);
    const month = `0${(date.getMonth() + 1)}`;
    const day = `0${date.getDate()}`;
    if (type === 'start') {
      return `${date.getFullYear()}-${month.substr(-2, 2)}-${day.substr(-2, 2)} 00:00:00`;
    } else if (type === 'end') {
      return `${date.getFullYear()}-${month.substr(-2, 2)}-${day.substr(-2, 2)} 23:59:59`;
    }
  }
  return '';
};

export const showDefaultValueTime = (type) => {
  const date = new Date();
  const month = `0${(date.getMonth() + 1)}`;
  const day = `0${date.getDate()}`;
  const hour = `0${date.getHours()}`;
  const min = `0${date.getMinutes()}`;
  const second = `0${date.getSeconds()}`;
  const endTime = `${date.getFullYear()}-${month.substr(-2, 2)}-${day.substr(-2, 2)} ${hour.substr(-2, 2)}:${min.substr(-2, 2)}:${second.substr(-2, 2)}`;
  const startTime = `${date.getFullYear()}-${month.substr(-2, 2)}-01 00:00:00`;
  if (type === 1) {
    return String(startTime);
  } else if (type === 2) {
    return String(endTime);
  }
  return '';
}

export const getDate = (strTime) => {
  if (strTime) {
    const date = new Date(strTime);
    const month = `0${(date.getMonth() + 1)}`;
    const day = `0${date.getDate()}`;
    return `${date.getFullYear()}-${month.substr(-2, 2)}-${day.substr(-2, 2)}`;
  }
  return '';
};
