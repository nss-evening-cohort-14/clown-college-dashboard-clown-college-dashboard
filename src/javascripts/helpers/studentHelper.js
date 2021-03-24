import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllStudents = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/students.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

const getSingleStudent = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/students.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

export { getAllStudents, getSingleStudent };
