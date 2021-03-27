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
    .then(resolve)
    .catch(reject);
});

export { getAllClasses, createClass };
