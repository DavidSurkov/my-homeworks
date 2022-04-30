import axios from 'axios';

export const requestAPI = {
  authoriseTest(success: boolean) {
    const data = {
      success: success,
    };
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', data);
  },
};
