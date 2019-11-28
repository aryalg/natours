/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  console.log(email, password);

  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/me');
      }, 1500);
    }
    console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });

    if (res.data.status == 'success') location.reload(true);
  } catch (err) {
    showAlert('error', 'Error! Logginng out! Try again');
  }
};

export const signup = async (name, email, password, passwordConfirm) => {
  console.log(name, email, password, passwordConfirm);

  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/me');
      }, 1500);
    }
    console.log(res);
  } catch (err) {
    showAlert('error', err);
    console.log(err);
  }
};
