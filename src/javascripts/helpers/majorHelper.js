import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllMajors = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/majors.json`)
    .then((resp) => resolve(Object.values(resp.data).reverse()))
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

export { getAllMajors, createMajor };
