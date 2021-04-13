import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllStudents = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/students.json`)
    .then((resp) => resolve(Object.values(resp.data).reverse()))
    .catch(reject);
});

const getSingleStudent = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/students/${firebaseKey}.json`)
    .then((resp) => resolve(resp.data))
    .catch(reject);
});

const createStudent = (studentInfo) => new Promise((resolve, reject) => {
  axios
    .post(`${BASEURL}/students.json`, studentInfo)
    .then((resp) => {
      const firebaseKey = resp.data.name;
      axios.patch(`${BASEURL}/students/${firebaseKey}.json`, { firebaseKey }).then(resolve);
    })
    .catch(reject);
});
const deleteStudent = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${BASEURL}/students/${firebaseKey}.json`)
    .then(resolve)
    .catch(reject);
});

const updateStudent = (firebaseKey, studentInfo) => new Promise((resolve, reject) => {
  axios
    .patch(`${BASEURL}/students/${firebaseKey}.json`, studentInfo)
    .then(resolve)
    .catch(reject);
});

export {
  getAllStudents,
  createStudent,
  deleteStudent,
  getSingleStudent,
  updateStudent
};
