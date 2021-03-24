import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllClasses = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/classes.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

const getSingleClass = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/classes.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

export { getAllClasses, getSingleClass };
