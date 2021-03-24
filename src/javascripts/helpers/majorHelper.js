import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllMajors = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/majors.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

const getSingleMajor = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/majors.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

export { getAllMajors, getSingleMajor };
