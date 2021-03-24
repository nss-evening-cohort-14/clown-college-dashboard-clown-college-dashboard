import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllTeachers = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/teachers.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

const getSingleStudent = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/teachers.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

export { getAllTeachers, getSingleStudent };
