import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllClasses = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/classes.json`)
    .then((resp) => resolve(Object.values(resp.data).reverse()))
    .catch(reject);
});
const createClass = (classInfo) => new Promise((resolve, reject) => {
  axios
    .post(`${BASEURL}/classes.json`, classInfo)
    .then((resp) => {
      const firebaseKey = resp.data.class_name;
      axios.patch(`${BASEURL}/classes/${firebaseKey}.json`, { firebaseKey }).then(resolve);
    })
    .catch(reject);
});

const getSingleClass = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/classes/${firebaseKey}.json`)
    .then((resp) => resolve(resp.data))
    .catch(reject);
});

const deleteClass = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${BASEURL}/classes/${firebaseKey}.json`)
    .then(resolve)
    .catch(reject);
});

const updateClass = (firebaseKey, classInfo) => new Promise((resolve, reject) => {
  axios
    .patch(`${BASEURL}/classes/${firebaseKey}.json`, classInfo)
    .then(resolve)
    .catch(reject);
});

export {
  getAllClasses,
  getSingleClass,
  updateClass,
  deleteClass,
  createClass
};
