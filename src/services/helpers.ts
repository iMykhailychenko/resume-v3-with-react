const getDataFromLocalStorage = <T, S>(key: string, defaultVal: T): S | [] => {
  try {
    const data: string | null = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultVal;
  } catch (err) {
    console.log('Get state error: ', err);
    return [];
  }
};

const setDataToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const data: string = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

export { getDataFromLocalStorage, setDataToLocalStorage };
