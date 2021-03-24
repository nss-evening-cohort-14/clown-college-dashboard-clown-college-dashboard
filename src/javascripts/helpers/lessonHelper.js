import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllLessons = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/lessons.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

const getSingleLesson = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/lessons.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

export { getAllLessons, getSingleLesson };
