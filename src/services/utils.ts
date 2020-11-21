interface Values {
  name: string;
  email: string;
  company: string;
  text: string;
  confirm: boolean;
}

export const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const initialValues: Values = {
  name: '',
  email: '',
  company: '',
  text: '',
  confirm: false,
};

export const encode = (data: { [key: string]: string }): string => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
