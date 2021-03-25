import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllLessons = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/lessons.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch(reject);
});

const createLesson = (lessonInfo) => new Promise((resolve, reject) => {
  axios
    .post(`${BASEURL}/lessons.json`, lessonInfo)
    .then((resp) => {
      const firebaseKey = resp.data.name;
      axios.patch(`${BASEURL}/lessons/${firebaseKey}.json`, { firebaseKey }).then(resolve);
    })
    .catch(reject);
});

export { getAllLessons, createLesson };
