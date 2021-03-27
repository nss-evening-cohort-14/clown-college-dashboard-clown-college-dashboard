import axios from 'axios';
import firebaseConfig from './apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getAllLessons = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/lessons.json`)
    .then((resp) => resolve(Object.values(resp.data).reverse()))
    .catch(reject);
});

const getSingleLesson = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/lessons/${firebaseKey}.json`)
    .then((resp) => resolve(resp.data))
    .catch(reject);
});

const deleteLesson = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${BASEURL}/lessons/${firebaseKey}.json`)
    .then(resolve)
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

const updateLesson = (firebaseKey, lessonInfo) => new Promise((resolve, reject) => {
  axios
    .patch(`${BASEURL}/lessons/${firebaseKey}.json`, lessonInfo)
    .then(resolve)
    .catch(reject);
});

export {
  getAllLessons,
  createLesson,
  getSingleLesson,
  updateLesson,
  deleteLesson
};
