import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllMajors = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/majors.json`)
    .then((resp) => resolve(Object.values(resp.data).reverse()))
    .catch(reject);
});

const getSingleMajor = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/majors/${firebaseKey}.json`)
    .then((resp) => resolve(resp.data))
    .catch(reject);
});

const deleteMajor = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${BASEURL}/majors/${firebaseKey}.json`)
    .then(resolve)
    .catch(reject);
});

const createMajor = (majorInfo) => new Promise((resolve, reject) => {
  axios
    .post(`${BASEURL}/majors.json`, majorInfo)
    .then((resp) => {
      const firebaseKey = resp.data.name;
      axios.patch(`${BASEURL}/majors/${firebaseKey}.json`, { firebaseKey }).then(resolve);
    })
    .catch(reject);
});

const updateMajor = (firebaseKey, majorInfo) => new Promise((resolve, reject) => {
  axios
    .patch(`${BASEURL}/majors/${firebaseKey}.json`, majorInfo)
    .then(resolve)
    .catch(reject);
});

export {
  getAllMajors,
  createMajor,
  getSingleMajor,
  updateMajor,
  deleteMajor
};
