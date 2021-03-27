import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllTeachers = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/teachers.json`)
    .then((resp) => resolve(Object.values(resp.data).reverse()))
    .catch(reject);
});

const getSingleTeacher = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/teachers/${firebaseKey}.json`)
    .then((resp) => resolve(resp.data))
    .catch(reject);
});

const createTeacher = (teacherInfo) => new Promise((resolve, reject) => {
  axios
    .post(`${BASEURL}/teachers.json`, teacherInfo)
    .then((resp) => {
      const firebaseKey = resp.data.name;
      axios.patch(`${BASEURL}/teachers/${firebaseKey}.json`, { firebaseKey }).then(resolve);
    })
    .catch(reject);
});

const updateTeacher = (firebaseKey, teacherInfo) => new Promise((resolve, reject) => {
  axios
    .patch(`${BASEURL}/teachers/${firebaseKey}.json`, teacherInfo)
    .then(resolve)
    .catch(reject);
});

export {
  getAllTeachers,
  createTeacher,
  getSingleTeacher,
  updateTeacher
};
