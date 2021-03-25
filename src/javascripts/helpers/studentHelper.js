import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllStudents = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/students.json`)
    .then((resp) => resolve(Object.values(resp.data)))
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

export { getAllStudents, createStudent };
