const getDataFromLocalStorage = (key: string, defaultVal: any): any => {
  try {
    const data: string | null = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultVal;
  } catch (err) {
    console.log('Get state error: ', err);
    return [];
  }
};

const setDataToLocalStorage = (key: string, value: any): void => {
  try {
    const data: string = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

export { getDataFromLocalStorage, setDataToLocalStorage };
